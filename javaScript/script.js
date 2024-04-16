var date = new Date();
document.body.innerHTML = "<h1>Hoy es ==> " + date.toDateString() + "</h1>" + "<h2>La hora es ==> " + date.getUTCHours() + ":"+ date.getUTCMinutes() + ":" + date.getUTCSeconds()+ "</h2>";

function drawCircle()
{
	var canvas = document.getElementById("id_circle");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d")
		var x = canvas.width / 2;
		var y = canvas.height / 2;
		var R = 50;
		ctx.beginPath();
		ctx.arc(x, y, R, 0, 2 * Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStype = "FF0000";
		ctx.stroke();
	}

	var canvas_element_two = document.getElementById("id_circle_two");
	if (canvas_element_two.getContext) {
		var ctx = canvas_element_two.getContext("2d")
		var x = canvas_element_two.width / 2;
		var y = canvas_element_two.height / 2;
		var R = 50;
		ctx.beginPath();
		ctx.arc(x, y, R, 0, 2 * Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStype = "FF0000";
		ctx.stroke();
	}

	var canvas_element_three = document.getElementById("id_circle_three");
	if (canvas_element_three.getContext) {
		var ctx = canvas_element_three.getContext("2d")
		var x = canvas_element_three.width / 2;
		var y = canvas_element_three.height / 2;
		var R = 100;
		ctx.beginPath();
		ctx.arc(x, y, R, 0, 2 * Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStype = "FF0000";
		ctx.stroke();
	}
}

