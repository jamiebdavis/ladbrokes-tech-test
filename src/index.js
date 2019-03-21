const Drone = require("../src/Drone"); //import drone contructor
const fs = require("fs");
const problemBasic = fs.readFileSync("../problem-basic-input.txt", "utf-8");
const problemComplex = fs.readFileSync("../problem-complex-input.txt", "utf-8");

function basicDroneInput() {
  const basicDrone = new Drone();
  const basicArr = problemBasic.split(" ");

  for (let i = 0; i < basicArr.length; i++) {
    basicDrone.droneInput(basicArr[i]);
  }
  //returning value as string as it appears on scenario.pdf
  return basicDrone.showLocation();
}
console.log("Problem - Basic Input:");
basicDroneInput();

function complexDroneInput() {
  const complexDrone = new Drone();
  const complexArr = problemComplex.split(" ");

  for (let i = 0; i < complexArr.length; i++) {
    complexDrone.droneInput(complexArr[i]);
  }

  //returning value as string as it appears on scenario.pdf
  return complexDrone.showLocation();
}
console.log("Problem - Complex Input:");
complexDroneInput();
