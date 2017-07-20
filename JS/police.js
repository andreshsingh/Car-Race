function Police(){
	this.height = 144;
	this.width = 70;
	this.color = 'red';
	this.pos;
	this.x;
	//this.leftside = 75;
	this.element;
	var that=this;

	this.create = function () {
		this.element = document.createElement('div');
		this.element.style.height = this.height;	
		this.element.style.width = this.width;
		this.element.style.position = 'absolute';
		//this.element.style.top = 0;
		//this.element.style.left = 0;

		this.img = document.createElement('img');
		this.img.src = 'images/policenew.png';
		this.element.appendChild(this.img);


	}


	this.setPositionPolice = function( x , y ,z){
		that.x=x;
		this.element.style.top = that.x;
		this.element.style.left = y;
		this.pos = z;
	}

	this.updatepos = function(a) {
		//console.log('updatepos police')
		if (a==2){
			that.x +=2;
		}
		else if(a==3){
			that.x += 3;
		}
		else if(a==4){
			that.x +=4;
		}
		else if(a==5){
			that.x +=5;
		}
		else {
			that.x += 1;
		}
		//console.log(a);
		//this.setPositionPolice( a + 1, this.element.style.left , n) ;
		//console.log(this.element.style.top)
		this.element.style.top =that.x;
	}

}