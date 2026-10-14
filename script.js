// Complete the js code

function Car(make, model) {
	constructor(make,model) {
		this.make = make;
		this.model = model;
	}
	getMakeModel(make,model){
		return`${this.make} ${this.model}`;
	}
}

function SportsCar prototype Car(make, model, topSpeed) {
	constructor (make, model, topSpeed){
		super(make,model);
		this.topSpeed = topSpeed;
	}
	getTopSpeed(topSpeed){
		return topSpeed;
	}
}
const car = new SportsCar("Toyota", "Corolla", 200);
console.log(carar.getMakeModel());
console.log(car.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
