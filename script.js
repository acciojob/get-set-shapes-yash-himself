//complete this code
class Rectangle {
	
	constructor(width,height){this.width = width;this.height = height;}
	getArea = (width,height){
		return width*height;
	}
get width = function(){
	return this.width;
}
get height = function(){
	return this.height;
}

}


class Square extends Rectangle {
	constructor(width,height){
		super(width,height)
	}

	getPerimeter(){
		return width*4;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
