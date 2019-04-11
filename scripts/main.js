var mymap = L.map('mapid').setView([22.54826, 88.35063], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);

L.marker([22.54826, 88.35063]).addTo(mymap);
L.marker([generateX(), generateY()]).addTo(mymap);
L.marker([generateX(), generateY()]).addTo(mymap);
L.marker([generateX(), generateY()]).addTo(mymap);
L.marker([generateX(), generateY()]).addTo(mymap);
L.marker([generateX(), generateY()]).addTo(mymap);



function generateX(){
	console.log(22.54826 + Math.random() * 0.06 - 0.03);
	return (22.54826 + Math.random() * 0.06 - 0.03);
}

function generateY(){
	return (88.35063 + Math.random() * 0.06 - 0.03);
}