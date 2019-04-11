function sendMsg(){
	var text = document.getElementById("myMessage").value;
	document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + '<div id="text">' + text + '</div>' + '<br>';
	document.getElementById("myMessage").value = "";
}