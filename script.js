// Complete the js code
let make = "Toyota";
let model = "Corolla";
let topSpeed = 100;
function Car(make, model) {
	constructor{
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return(make,model);
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	constructor{
		this.topSpeed = topSpeed;
		super(make,model);
	}
	getTopSpeed(){
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
