function radToDeg(rads) {
	return rads * (180/Math.PI);
}
function vector(nx,ny) {
	var x = nx;
	var y = ny;
	function getX() { return x; }
	this.getXComp = function() {
		return getX();
	}
	function setX(value) { x = value; }
	this.setXComp = function(value) {
		setX(value);
	}
	function getY() { return y; }
	this.getYComp = function() {
		return getY();
	}
	function setY(value) { y = value; }
	this.setYComp = function(value) {
		setY(value);
	}
	function vadd(vect) {
		x = x + vect.getXComp(); 
		y = y + vect.getYComp();
	}
	this.add = function(vect) {
		vadd(vect);
	}
	function vdot(vect) {
		x = x * vect.getXComp(); 
		y = y * vect.getYComp();
		return this;
	}
	this.dot = function(vect) {
		vdot(vect);
	}
}
var a = new vector(0,0);
var b = new vector(0,0);
document.getElementById("calc").onmouseup = function () {
	a.setXComp(parseInt(document.getElementById("ax").value));
	a.setYComp(parseInt(document.getElementById("ay").value));
	b.setXComp(parseInt(document.getElementById("bx").value));
	b.setYComp(parseInt(document.getElementById("by").value));
	a.add(b);
	document.getElementById("results").innerHTML = 
	"Vector C = < " + a.getXComp() + "," + a.getYComp() + " > ";
}
