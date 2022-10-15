function Car() {
  const carProperties = { ...arguments[0] };
  this.carServiceability = 100;
  this.carRideStatus = false;
  this.carFuelConsumption = carProperties[0];
  this.carEngineType = carProperties[1];
  this.carEngineCapacity = carProperties[2];
  this.carModel = carProperties[3];
  this.carYear = carProperties[4];
  this.carMass = carProperties[5];
}

Car.prototype.startRide = function () {
  let stateOfCar = "Ride";
  if (this.carRideStatus === false) {
    this.carRideStatus = true;
    this.carServiceability = +(
      this.carServiceability -
      (Math.random() * (2.5 - 0.1) + 0.1)
    ).toFixed(1);
  } else {
    stateOfCar = "Already ride";
  }
  return stateOfCar;
};

Car.prototype.finishRide = function () {
  let stateOfCar = "Ride is over";

  if (this.carRideStatus === false) {
    return (stateOfCar = "The car is not started");
  } else {
    this.carRideStatus = false;
    return stateOfCar;
  }
};

function CreateHatchbackCar() {
  Car.call(this, arguments);
}

function CreateUniversalCar() {
  Car.call(this, arguments);
}

function CreateSedanCar() {
  Car.call(this, arguments);
}
CreateHatchbackCar.prototype = Object.create(Car.prototype);
CreateUniversalCar.prototype = Object.create(Car.prototype);
CreateSedanCar.prototype = Object.create(Car.prototype);

function service() {
  let indexPrice;
  const date = new Date().getFullYear();
  const repairMassage = "We don't repair these cars";
  const carDamage = 100 - this.carServiceability;
  const arrayIndexesHatchback = [
    [1.2, 1.4, 1.7, 2],
    [2.2, 1.8],
    [1.5, 1.7, 2],
    "hatchback",
  ];
  const arrayIndexesSedan = [
    [1.5, 1.8, 2, 2.6],
    [2.5, 2],
    [1.6, 1.8, 2.1],
    "sedan",
  ];
  const arrayIndexesUniversal = [
    [2, 2.2, 2.5, 3],
    [2.9, 2.4],
    [1.7, 1.9, 2.2],
    "universal",
  ];
  let arrayIndexesRepair = [];
  let arrayIndexesSpecificCar = [];
  if (carDamage === 0) {
    return "All is well with the car";
  } else if (this.carRideStatus === true) {
    return "Turn off the car for repairs";
  } else {
    if (this instanceof CreateHatchbackCar) {
      arrayIndexesSpecificCar = arrayIndexesHatchback;
      indexPrice = 110;
    }
    if (this instanceof CreateSedanCar) {
      arrayIndexesSpecificCar = arrayIndexesSedan;
      indexPrice = 125;
    }
    if (this instanceof CreateUniversalCar) {
      arrayIndexesSpecificCar = arrayIndexesUniversal;
      indexPrice = 130;
    }

    if (this.carYear < 1990 || this.carYear > date) {
      return repairMassage;
    } else {
      if (this.carYear >= 2019) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[0][0]);
      } else if (this.carYear < 2019 && this.carYear >= 2010) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[0][1]);
      } else if (this.carYear < 2010 && this.carYear >= 2000) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[0][2]);
      } else if (this.carYear < 2000 && this.carYear >= 1990) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[0][3]);
      } else {
        arrayIndexesRepair = [];
      }

      if (this.carEngineType === "disel") {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[1][0]);
      } else if (this.carEngineType === "gas") {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[1][1]);
      } else {
        arrayIndexesRepair = [];
      }

      if (this.carMass <= 1100 && this.carMass >= 800) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[2][0]);
      } else if (this.carMass <= 1400 && this.carMass > 1100) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[2][1]);
      } else if (this.carMass > 1400) {
        arrayIndexesRepair.push(arrayIndexesSpecificCar[2][2]);
      } else {
        arrayIndexesRepair = [];
      }

      if (arrayIndexesRepair?.length < 3) {
        return "We don't repair these cars.Please provide correct data";
      } else {
        const indexesSum = arrayIndexesRepair.reduce((sum, el) => sum + el, 0);
        const repairPrice = (carDamage + indexesSum) * indexPrice;
        this.carServiceability = 100;
        return `We repaired your ${
          arrayIndexesSpecificCar[3]
        }. Damage index is: ${carDamage.toFixed(
          1
        )}. Your bill for the service is: ${repairPrice.toFixed(2)} UAH `;
      }
    }
  }
}

const Mazda = new CreateHatchbackCar(7, "gas", 1.5, "Mazda", 2017, 900);
Mazda.startRide();
Mazda.finishRide();
console.log(Mazda);

const Opel = new CreateUniversalCar(7, "disel", 1.5, "Opel", 1992, 1600);
Opel.startRide();
Opel.finishRide();
console.log(Opel);

const Ford = new CreateSedanCar(7, "gas", 2, "Ford", 2222, 1200);
Ford.startRide();
Ford.finishRide();
console.log(Ford);

console.log(service.call(Mazda));
console.log(service.call(Opel));
console.log(service.call(Ford));
