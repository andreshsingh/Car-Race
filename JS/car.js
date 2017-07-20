//car

function Car() {
	this.height = 144;
	this.width = 70;
	this.color = 'red';
	this.leftside = 75;
	this.element;
	this.pos=2;

	this.create = function() {
		this.element = document.createElement('div');
		this.element.style.height = this.height;
		this.element.style.width = this.width;
		//this.element.style.background = this.color;
		this.element.style.position = 'absolute';
		this.element.style.top = 556;
		this.element.style.left = this.leftside;

/*		this.img=document.createElement("img");
		// this.img.style.width="100px";
		// this.img.style.height="150px";

		this.img.src="images/car2.png";
		this.element.appendChild(this.img);
*/
		this.img = document.createElement('img');
		this.img.src = 'images/carnew.png';
		this.element.appendChild(this.img);

	}

	this.move = function(x){
		//console.log('car ko move bhittra');
		this.leftside = this.leftside + x;
		this.element.style.left = this.leftside; 
	}



}