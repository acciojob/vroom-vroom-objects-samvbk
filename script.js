// Complete the js code
let make = "Toyota";
let model = "Corolla";
let topSpeed = 100;
function Car(make, model) {
	constructor(make,model) {
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return(make+" "+model);
	}
}

function SportsCar prototype Car(make, model, topSpeed) {
	constructor (make, model, topSpeed){
		super(make,model);
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
