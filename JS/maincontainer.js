function mainContainer() {
	this.height = 700;
	this.width = 220;
	this.color = 'gray';
	this.element;

	this.create = function () {
		console.log('maincontainer ko create ma');
		this.element = document.createElement('div');
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = 'relative';
		this.element.style.background = this.color;
		this.element.style.float = 'left';
		this.element.style.overflow = 'hidden';
	}	

	this.append = function (element) {
		this.element.appendChild(element);
	}

}