function Gear() {
	this.height = 100;
	this.width = 100;
	this.color = 'yellow';

	this.element;

	this.create = function() {
		this.element = document.createElement('yellow');
		this.element.style.height = this.height;
		//this.element.style.width = this.width;
		this.element.style.background = this.color;
		this.element.style.float = 'left';
		this.element.style.fontSize = 20;
	}
}