function Transport(name, pr) {
    this.name = name;

    var privateV = pr;

    Transport.staticV = 'its a static field';

    this.getPrivateV = function () {
        return privateV;
    }

    this.setPrivateV = function (newV) {
        privateV = newV;
        return this;
    }
}

Transport.prototype.move = function () {
    console.log(`${this.name} moving...`);
}

let t = new Transport('aaa', 'private for transport');
//console.log(t.getPrivateV());
//console.log(Transport.staticV);

//////////////////////////////////////////////////////////////////////////////////////////

function Helicopter(name, pr) {
    Transport.call(this, name, pr);
}

Helicopter.prototype = Object.create(Transport.prototype);
Helicopter.prototype.constructor = Helicopter;


let h = new Helicopter('Helli', 'private for helicopter');
//console.log(h.getPrivateV());
//console.log(h.move());

/////////////////////////////////////////////////////////////////////////////////////////////

function Car(name, pr, countWheels) {
    Transport.call(this, name, pr);

    var countWheels = countWheels;

    this.getCountWheels = function () {
        return countWheels;
    }

    this.setCountWheels = function (count) {
        countWheels = conut;
        return countWheels;
    }
}
Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;

Car.prototype.playMusic = function () {
    console.log(`${this.name} playing music...`);
}

/////////////////////////////////////////////////////////////////////////////////////////////

function Plane(name, pr) {
    Transport.call(this, name, pr);
}
Plane.prototype = Object.create(Transport.prototype);
Plane.prototype.constructor = Plane;

//////////////////////////////////////////////////////////////////////////////////////////////

function SportCar(name, pr, countWheels) {
    Car.call(this, name, pr, countWheels);
}
SportCar.prototype = Object.create(Car.prototype);
SportCar.prototype.constructor = SportCar;


let sc = new SportCar("formula 1", "max speed 250km/c", 4);
//console.log(sc.playMusic())
//console.log(sc.getPrivateV())

///////////////////////////////////////////////////////////////////////////////////////////////

function OffRoadVehicle(name, pr, cw) {
    Car.call(this, name, pr, ws);
}
OffRoadVehicle.prototype = Object.create(Car.prototype);
OffRoadVehicle.prototype.constructor = OffRoadVehicle;
