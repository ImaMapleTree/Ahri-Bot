$(document).ready(function () {
	$.getJSON("https://api.jsonbin.io/b/5e1ea24db236b871b3621d94/latest", function (json) {
		var bad_solution = document.getElementById("proudly-used-by-loading-servers");
		var server_container = bad_solution.childNodes[1];
		server_container.setAttribute("style", "color: #ff9b0f;");
		server_container.innerHTML = json.servers;
	})
});

function GoPage(page, tab=false) {
	if (tab == true) {
		window.open(page);
	}
	else {
	document.location.href = page;
	}
}

function ECCCheck() {
	var ECC = "ECC=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}
