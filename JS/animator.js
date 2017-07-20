function Animator(maincontainer , car , score , polices ,gameover, carrace , gear) {
	this.intervalId;
	that = this;
	this.car = car;
	var flag = 0;
	var flagkey=0;
	this.score = score;
	this.gear = gear;
	this.gameover = gameover;
	this.carrace = carrace;
	this.a = 1;

	this.animate = function(){
		/*var police = new Police();
		police.create();
		police.setPositionPolice(100,100);*/

		//maincontainer.append(police.element);
	
		that.intervalId = setInterval(function(){
			//console.log(intervalId);
			document.onkeydown=checkKeyDown;

				//console.log(that.intervalId*.1);	
				if(flag == 0){
							debugger;

					//console.log('flag bhittra');
					var n = Math.floor(Math.random() * 6) + 1  ;
					//console.log(n);
					switch (n){
						case 1:
							/*console.log('1');
							debugger;*/
/*							var police = new Police();
							police.create();
							police.setPositionPolice(0,150,3);
							maincontainer.append(police.element);*/
							
							polices[0].setPositionPolice(-1200,0,1);
							polices[1].setPositionPolice(-1200,75,2);
							polices[2].setPositionPolice(-200,150,3);
							flag = 1;
							break;

						case 2:
							/*console.log('2');
							debugger;*/

							/*var police = new Police();
							police.create();
							police.setPositionPolice(-200,75,2);
							maincontainer.append(police.element);*/
							polices[0].setPositionPolice(-1200,0,1);
							polices[1].setPositionPolice(-200,75,2);
							polices[2].setPositionPolice(-1200,150,3);
							flag = 1;
							break;
						case 3:
							//console.log('3');
							/*var police = new Police();
							police.create();
							police.setPositionPolice(-200,150,3);
							maincontainer.append(police.element);

							var police1 = new Police();
							police1.create();
							police1.setPositionPolice(-200,75,2);
							maincontainer.append(police1.element);*/
							polices[0].setPositionPolice(-1200,0,1);
							polices[1].setPositionPolice(-200,75,2);
							polices[2].setPositionPolice(-200,150,3);
							flag = 1;
							break;

						case 4:
							/*console.log('4');
							debugger;*/

							/*var police = new Police();
							police.create();
							police.setPositionPolice(-200,0,1);
							maincontainer.append(police.element);*/
							polices[0].setPositionPolice(-200,0,1);
							polices[1].setPositionPolice(-1200,75,2);
							polices[2].setPositionPolice(-1200,150,3);
							flag = 1;
							break;

						case 5:
							/*console.log('5');
							debugger;*/

							/*var police = new Police();
							police.create();
							police.setPositionPolice(-200,0,1);
							maincontainer.append(police.element);

							var police1 = new Police();
							police1.create();
							police1.setPositionPolice(-200,150,3);
							maincontainer.append(police1.element);


							*/
							polices[0].setPositionPolice(-200,0,1);
							polices[1].setPositionPolice(-1200,75,2);
							polices[2].setPositionPolice(-200,150,3);
							flag = 1;
							break;

						case 6:
							/*console.log('6');
							debugger;*/

							/*var police = new Poli
							ce();
							police.create();
							police.setPositionPolice(-200,0,1);
							maincontainer.append(police.element);
						
							var police1 = new Police();
							police1.create();
							police1.setPositionPolice(-200,75,2);
							maincontainer.append(police1.element);*/
							polices[0].setPositionPolice(-200,0,1);
							polices[1].setPositionPolice(-200,75,2);
							polices[2].setPositionPolice(-1200,150,3);
							flag = 1;
							break;

						}
						//that.police = police;
					}

/*				if(){
					flag = 0;
				}*/

					that.work();
					if(polices[0].x >= 700 || polices[1].x >=700 || polices[2].x >=700){
						console.log('flag reset');
						flag = 0;
					}

					if((polices[0].pos == car.pos && polices[0].x+144 >= 556) || (polices[1].pos == car.pos && polices[1].x+144 >= 556) || (polices[2].pos == car.pos && polices[2].x+144 >= 556)){
						//debugger;
						clearInterval(that.intervalId);
						flagkey=1;
						that.gameover.element.innerHTML = "GAMEOVER...SPEED KILLS...Press Enter to Restart";
						maincontainer.append(that.gameover.element);

					}
					that.score.increase(that.a);
					that.score.element.innerHTML="SCORE : "+Math.floor(that.score.x);
					that.gear.element.innerHTML="GEAR : "+ that.a ;

		},100/60)




	}

	var checkKeyDown = function (e) {
		//console.log('keydown');
		if(flagkey == 0){
	  		if (e.keyCode == '37' && that.car.leftside != 0) {
	       	// left arrow
	       		that.car.move(-75);
	       		
	       	    if (that.car.leftside == 75){
	    			that.car.pos = 2;
	    		//	console.log(that.car.pos);
	    		}
	    		else{
	       			that.car.pos = 1;
	       			//console.log(that.car.pos);
	       		}

	    	}
	    	else if (e.keyCode == '39' && that.car.leftside != 150) {
	       		that.car.move(75);
	       		if (that.car.leftside == 75){
	    			that.car.pos = 2;
	    			//console.log(that.car.pos);
	    		}
	    		else{	
	       			that.car.pos = 3;
	       			//console.log(that.car.pos);
	    		}
	    	}
	    	else if(e.keyCode == '49'){
	    		if (that.a!=5){
	    		that.a = that.a +1;
	    		}
	    	}
	    	else if(e.keyCode == '50'){
	    		if(that.a != 1){
	    		that.a -=1;
	    		}
	    	}
/*	    	else if(e.keyCode == '51'){
	    		that.a=3;
	    	}
	    	else if(e.keyCode == '52'){
	    		that.a=4;
	    	}
	    	else if(e.keyCode == '53'){
	    		that.a=5;
	    	}*/

	    }
	    else if(flag == 1 && e.keyCode =='13'){
	    	that.carrace.del();
	    }
    	
  	}

	this.work = function(){
  		polices[0].updatepos(that.a);
  		polices[1].updatepos(that.a);
  		polices[2].updatepos(that.a);
  	}
}