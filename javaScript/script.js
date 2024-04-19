var date = new Date();

const rEyes = 50;
const rMouth = 100;

function showDate() {
	document.body.innerHTML = "<h1>Hoy es ==> " + date.toDateString() + "</h1>" + "<h2>La hora es ==> " + date.getUTCHours() + ":"+ date.getUTCMinutes() + ":" + date.getUTCSeconds()+ "</h2>";
}

function drawCircle()
{
	var canvas = document.getElementById("id_circle");
	if (canvas.getContext) {
		drawArc(canvas, rEyes);
	}

	var canvas_element_two = document.getElementById("id_circle_two");
	if (canvas_element_two.getContext) {
		drawArc(canvas_element_two, rEyes);
	}

	var canvas_element_three = document.getElementById("id_circle_three");
	if (canvas_element_three.getContext) {
		drawArc(canvas_element_three, rMouth);
	}
}
function drawArc(canvas_element, r) {
		var ctx = canvas_element.getContext("2d")
		var x = canvas_element.width / 2;
		var y = canvas_element.height / 2;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStype = "FF0000";
		ctx.stroke();
}

