var ax,ay,bx,by;

function radToDeg(rads) {
	return rads * (180/Math.PI);
}
function calc() {
	ax = parseInt(document.getElementById("ax").value);
	ay = parseInt(document.getElementById("ay").value);
	bx = parseInt(document.getElementById("bx").value);
	by = parseInt(document.getElementById("by").value);
	var cx = ax+bx;
	var cy = ay+by;
	var cxdot = ax*bx;
	var cydot = ay*by;
	var angle = radToDeg(Math.atan(cy/cx));
	// A + B, angle = tan^-1(y/x)
	document.getElementById("results").innerHTML = 
	"Vector C = < " + cx + " , "+ cy + "> <br>" +
	"Vector C Dot = < " + cxdot + " , "+ cydot + ">" +
	"Angle = " + angle;
}
console.log(document.getElementById("ax"));