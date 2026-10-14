// Complete the js code

function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = function(){
	return this.make+" "+this.model;
}

function SportsCar prototype Car(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype.getTopSpeed() = function () {
	return this.topSpeed;
}


const car = new SportsCar("Toyota", "Corolla", 200);
console.log(carar.getMakeModel());
console.log(car.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
