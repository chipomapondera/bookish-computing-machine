// github user finder example

$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();
      getGithubInfo(username);
      console.log('username was: ' + username);
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;

  console.log(data);
  showUser(xmlhttp);
}


function showUser(xmlhttp) {
	if (xmlhttp.status === 200) {
		var json = xmlhttp.responseText;
    	var user = JSON.parse(json);
    	$('#profile h2').text(user.login + ' is GitHub user #' + user.id)
    	$('#profile .information').append("<a href="+user.html_url+">'Link to profile'</a>")
	}	else {

	}
}

