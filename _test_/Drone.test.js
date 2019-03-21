const Drone = require("../src/Drone");

describe("Basic drone functions", () => {
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
});

describe("Drone basic inputs", () => {
  it("Follow basic directions from scenario.pdf - Example 1", () => {
    const drone = new Drone();

    drone.droneInput("R++");
    drone.droneInput("L+++");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "2,3"
    );
  });
  it("Follow basic directions from scenario.pdf - Example 2", () => {
    const drone = new Drone();

    drone.droneInput("L++");
    drone.droneInput("R--");
    drone.droneInput("L+");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "-3,-2"
    );
  });
  it("Follow basic directions from scenario.pdf - Further example 1", () => {
    const drone = new Drone();

    drone.droneInput("R+");
    drone.droneInput("L--");
    drone.droneInput("R+");
    drone.droneInput("R--");
    drone.droneInput("L++");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "4,0"
    );
  });
  it("Follow basic directions from scenario.pdf - Further example 2", () => {
    const drone = new Drone();

    drone.droneInput("L-++");
    drone.droneInput("L+");
    drone.droneInput("R+");
    drone.droneInput("R-");
    drone.droneInput("L-++");
    drone.droneInput("R--");
    drone.droneInput("R-+-");
    drone.droneInput("L+");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "-4,-3"
    );
  });
});

describe("Drone complex inputs", () => {
  it("Follow complex directions from scenario.pdf - Example 1", () => {
    const drone = new Drone();

    drone.droneInput("L+");
    drone.droneInput("E-");
    drone.droneInput("R+");
    drone.droneInput("R+++");
    drone.droneInput("W-");
    drone.droneInput("S+");
    drone.droneInput("N+");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "2,1"
    );
  });
  it("Follow complex directions from scenario.pdf - Example 2", () => {
    const drone = new Drone();

    drone.droneInput("S-");
    drone.droneInput("L-");
    drone.droneInput("S-");
    drone.droneInput("L+");
    drone.droneInput("R--+");
    drone.droneInput("W+");
    drone.droneInput("L+-+-");
    drone.droneInput("N+");

    expect(`${String(drone.coordinatesX)},${String(drone.coordinatesY)}`).toBe(
      "1,2"
    );
  });
});
