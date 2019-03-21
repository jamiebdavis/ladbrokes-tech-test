function Drone() {
  this.coordinatesX = 0;
  this.coordinatesY = 0;
  this.direction = "N"; //drone starts off facing north.
  this.coordinateHistory = [];

  this.droneDirection = input => {
    //splitting to input in to array
    let directions = input.split("");

    //Clockwise direction
    if (this.direction === "N" && directions[0].toUpperCase() === "R") {
      return (this.direction = "E");
    }
    if (this.direction === "E" && directions[0].toUpperCase() === "R") {
      return (this.direction = "S");
    }
    if (this.direction === "S" && directions[0].toUpperCase() === "R") {
      return (this.direction = "W");
    }
    if (this.direction === "W" && directions[0].toUpperCase() === "R") {
      return (this.direction = "N");
    }
    //Anticlockwise direction
    if (this.direction === "N" && directions[0].toUpperCase() === "L") {
      return (this.direction = "W");
    }
    if (this.direction === "W" && directions[0].toUpperCase() === "L") {
      return (this.direction = "S");
    }
    if (this.direction === "S" && directions[0].toUpperCase() === "L") {
      return (this.direction = "E");
    }
    if (this.direction === "E" && directions[0].toUpperCase() === "L") {
      return (this.direction = "N");
    }
  };

  this.droneInput = input => {
    //importing droneDirection function to determine what direction the drone is facing
    this.droneDirection(input);
    //splitting to input in to array
    let directions = input.split("");

    //complex North // East // South // West
    if (directions[0].toUpperCase() === "N") {
      //iterate over array to extract "-" or "+" to determine wether done goes forward or backwards
      directions.map(char => {
        if (char === "+") {
          return this.coordinatesY++;
        }
        if (char === "-") {
          return this.coordinatesY--;
        }
        return;
      });
    }
    if (directions[0].toUpperCase() === "E") {
      directions.map(char => {
        if (char === "+") {
          return this.coordinatesX++;
        }
        if (char === "-") {
          return this.coordinatesX--;
        }
      });
    }
    if (directions[0].toUpperCase() === "S") {
      directions.map(char => {
        if (char === "+") {
          return this.coordinatesY--;
        }
        if (char === "-") {
          return this.coordinatesY++;
        }
      });
    }
    if (directions[0].toUpperCase() === "W") {
      directions.map(char => {
        if (char === "+") {
          return this.coordinatesX--;
        }
        if (char === "-") {
          return this.coordinatesX++;
        }
      });
    }
    if (this.direction === "N") {
      if (
        directions[0].toUpperCase() === "R" ||
        directions[0].toUpperCase() === "L"
      ) {
        directions.map(char => {
          if (char === "+") {
            return this.coordinatesY++;
          }
          if (char === "-") {
            return this.coordinatesY--;
          }
        });
      }
    }
    if (this.direction === "E") {
      if (
        directions[0].toUpperCase() === "R" ||
        directions[0].toUpperCase() === "L"
      ) {
        directions.map(char => {
          if (char === "+") {
            return this.coordinatesX++;
          }
          if (char === "-") {
            return this.coordinatesX--;
          }
        });
      }
    }
    if (this.direction === "S") {
      if (
        directions[0].toUpperCase() === "R" ||
        directions[0].toUpperCase() === "L"
      ) {
        directions.map(char => {
          if (char === "+") {
            return this.coordinatesY--;
          }
          if (char === "-") {
            return this.coordinatesY++;
          }
        });
      }
    }
    if (this.direction === "W") {
      if (
        directions[0].toUpperCase() === "R" ||
        directions[0].toUpperCase() === "L"
      ) {
        directions.map(char => {
          if (char === "+") {
            return this.coordinatesX--;
          }
          if (char === "-") {
            return this.coordinatesX++;
          }
        });
      }
    }
    //push coordinateHistory into array.
    this.coordinateHistory = [
      ...this.coordinateHistory,
      `${String(this.coordinatesX)},${String(this.coordinatesY)}`
    ];

    //this.showLocation();  // removed so it doesn't spam console.log
    //this.showDirection();
  };

  this.showDirection = () => {
    switch (this.direction) {
      case "N":
        console.log("The drone is currently facing North");
        break;
      case "E":
        console.log("The drone is currently facing East");
        break;
      case "S":
        console.log("The drone is currently facing South");
        break;
      case "W":
        console.log("The drone is currently facing West");
        break;
      default:
        console.log("Something has gone wrong!");
    }
  };

  this.showLocation = () =>
    console.log(
      `Drone Coordinates: ${String(this.coordinatesX)},${String(
        this.coordinatesY
      )}`
    );

  this.showLocationHistory = () =>
    console.log(`Drone previous coordinates: ${this.coordinateHistory}`);
}

module.exports = Drone;
