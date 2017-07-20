function Gameover() {
	this.width = 220;
	this.height = 500;
	this.background = 'red';
	this.element;

		this.create = function(){
			this.element = document.createElement('div');
			this.element.style.height = this.height;
			this.element.style.width = this.width;
			this.element.style.background = this.background;
			this.element.style.position = 'absolute';
			this.element.style.top = 0;
			this.element.style.left = 0;
			this.element.style.fontSize = 20;

		}

}