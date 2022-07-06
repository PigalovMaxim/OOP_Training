class Airport {
  constructor() {
    this.parkingPlanes = [];
    this.readyPlanes = [];
  }
  acceptPlane(plane) {
    console.log(`Самолёт ${plane.name} принят`);
  }
  parkPlane(plane) {
    this.parkingPlanes.push(plane);
    console.log(`Самолёт ${plane.name} ушёл на стоянку`);
  }
  readyPlane(plane) {
    if (this.parkingPlanes.indexOf(plane) !== -1)
      this.parkingPlanes.splice(this.parkingPlanes.indexOf(plane));
    this.readyPlanes(plane);
    console.log(`Самолёт ${plane.name} готов`);
  }
  takeoffPlane(plane) {
    if (this.parkingPlanes.indexOf(plane) !== -1)
      this.parkingPlanes.splice(this.parkingPlanes.indexOf(plane));
    if (this.readyPlanes.indexOf(plane) !== -1)
      this.readyPlanes.splice(this.readyPlanes.indexOf(plane));
    console.log(`Самолёт ${plane.name} взлетел`);
  }
  cleanPlane(plane) {
    console.log(`Самолёт ${plane.name} помыт`);
  }
  fixPlane(plane) {
    console.log(`Самолёт ${plane.name} исправлен`);
  }
}
class Plane {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.status = "Самолёт находится на земле";
  }
  takeoff() {
    console.log("Самолёт взлетел");
    this.status = "Самолёт находится в воздухе";
  }
  landing() {
    console.log("Самолёт приземлился");
    this.status = "Самолёт находится на земле";
  }
  getStatus() {
    console.log(this.status);
  }
}
class MIG extends Plane {
  constructor(name, maxSpeed) {
    super(name, maxSpeed);
  }
  attack() {
    console.log("Самолёт атаковал");
  }
}
class TU extends Plane {
  constructor(name, maxSpeed) {
    super(name, maxSpeed);
  }
}

const airPort = new Airport();
const mig = new MIG("МИГ", 100);
const tu = new TU("ТУ-154", 80);
airPort.acceptPlane(mig);
airPort.cleanPlane(tu);

//Ассоциация заключается в том, что аэропорт связан с классом самолёта и взаимодействует с ним (помыть, починить, принять и т.д)
//Находясь в массиве parkingPlanes или readyPlanes, самолёт является частью аэропорта, что является агрегацией, а так как самолёт не может 
//находиться в двух и более аэропортах, то это так же композиция
