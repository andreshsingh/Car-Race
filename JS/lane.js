//lane
function Lane() {
	this.width = 5;
	this.height = 700;
	this.color = 'white';
	this.element;

	this.create = function(){
		this.element = document.createElement('div');
		this.element.style.height = this.height;
		this.element.style.width = this.width;
		this.element.style.background = this.color;
		this.element.style.position = 'absolute';
		this.element.style.top = 0;
	}

	this.setPosition = function (left) {
		
		this.element.style.left =left;
	}



}