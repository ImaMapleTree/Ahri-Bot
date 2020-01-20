$(document).ready(function () {
	$.getJSON("https://api.jsonbin.io/b/5e1ea24db236b871b3621d94/latest", function (json) {
		var bad_solution = document.getElementById("proudly-used-by-loading-servers");
		var server_container = bad_solution.childNodes[1]
		server_container.setAttribute("style", "color: #ff9b0f;");
		server_container.innerHTML = json.servers
	})
});

function GoPage(page, tab=false) {
	if (tab == true) {
		window.open(page)
	}
	else {
	baseurl = window.location.href
	window.location.href = baseurl + page
	}
}