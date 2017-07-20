//score

function Score() {
	this.height = 100;
	this.width = 200;
	this.color = 'yellow';
	this.x = 0;
	this.element;

	this.create = function(){
		this.element = document.createElement('div');
		this.element.style.height = this.height;
		this.element.style.width = this.width;
		this.element.style.background = this.color;
		this.element.style.float = 'left';
		this.element.style.fontSize = 30;
	}

	this.increase = function(a){
		this.x += a*0.1;

	}

}