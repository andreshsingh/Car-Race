//main

function carRace(elementId){
	var element = document.getElementById(elementId);


	this.init = function() {
		element.style.height = 700;
		element.style.width = 700;
		element.style.background = 'white';
		//element.style.margin.left = 500;
		element.style.margin = 'auto';

		var polices = [];

		this.maincontainer = new mainContainer();
		this.maincontainer.create();

		var car = new Car();
		car.create();

/*		var police = new Police();
		police.create();*/

		var lane = new Lane();
		lane.create();
		lane.setPosition(70);

		var lane2 = new Lane();
		lane2.create();
		lane2.setPosition(150);

		//police
		var police = new Police();
		police.create();
		police.setPositionPolice(-200,0,1);
		this.maincontainer.append(police.element);

		var police1 = new Police();
		police1.create();
		police1.setPositionPolice(-200,75,2);
		this.maincontainer.append(police1.element);

		var police2 = new Police();
		police2.create();
		police2.setPositionPolice(-200,150,3);
		this.maincontainer.append(police2.element);

		polices.push(police);
		polices.push(police1);
		polices.push(police2);

		var gameover = new Gameover();
		gameover.create();




		this.maincontainer.append(car.element);
		//maincontainer.append(police.element);
		this.maincontainer.append(lane.element);
		this.maincontainer.append(lane2.element);
		//maincontainer.append(gameover.element);

		this.score = new Score();
		this.score.create();

		this.gear = new Gear();
		this.gear.create();

		element.appendChild(this.score.element);


		element.appendChild(this.maincontainer.element);

		element.appendChild(this.gear.element);

		var animator = new Animator(this.maincontainer , car , this.score, polices, gameover,carrace , this.gear);
		animator.animate();

	}

	this.del = function(){
		element.removeChild(this.maincontainer.element);
		element.removeChild(this.score.element);
		element.removeChild(this.gear.element);
		carrace.init();
	}

}

var carrace = new carRace('car-race');
carrace.init();