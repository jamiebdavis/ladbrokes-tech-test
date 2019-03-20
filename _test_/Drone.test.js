const Drone = require("../src/Drone");

describe("Drone", () => {
  //drone properties
  it("Can be instanced", () => {
    expect(new Drone()).toBeInstanceOf(Object);
  });
  it("Has a starting direction of North", () => {
    const drone = new Drone();
    expect(drone.direction).toBe("N");
  });
  it("Has a starting X co-ordinates of 0", () => {
    const drone = new Drone();
    expect(drone.coordinatesX).toEqual(0);
  });
  it("Has a starting Y co-ordinates of 0", () => {
    const drone = new Drone();
    expect(drone.coordinatesY).toEqual(0);
  });

  //drone movement
  it("can make a right turn", () => {
    const drone = new Drone();
    drone.droneInput("R");
    expect(drone.direction).toBe("E");
  });

  it("can make a left turn", () => {
    const drone = new Drone();
    drone.droneInput("L");
    expect(drone.direction).toBe("W");
  });

  it("can rotate clockwise 360 degrees", () => {
    const drone = new Drone();

    drone.droneInput("R");
    drone.droneInput("R");
    drone.droneInput("R");
    drone.droneInput("R");

    expect(drone.direction).toBe("N");
  });
  it("can rotate anti clockwise 360 degrees", () => {
    const drone = new Drone();

    drone.droneInput("L");
    drone.droneInput("L");
    drone.droneInput("L");
    drone.droneInput("L");

    expect(drone.direction).toBe("N");
  });

  it("Can travel North", () => {
    const drone = new Drone();
    drone.droneInput("N+");

    expect(drone.coordinatesY).toEqual(1);
  });
  it("Can travel East", () => {
    const drone = new Drone();
    drone.droneInput("E+");

    expect(drone.coordinatesX).toEqual(1);
  });
  it("Can travel South", () => {
    const drone = new Drone();
    drone.droneInput("S+");

    expect(drone.coordinatesY).toEqual(-1);
  });
  it("Can travel West", () => {
    const drone = new Drone();
    drone.droneInput("W+");

    expect(drone.coordinatesX).toEqual(-1);
  });

  //add basic input test One
  //add basic input test Two

  //add complex input test One
  //add complex input test Two
});
