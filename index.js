//Storing variabels at global level
let coordinatesX = 0;
let coordinatesY = 0;
let direction = "N"; //drone starts off facing north.
let coordinateHistory = [];

//function to work out which direction drone is facing
function droneDirection(input) {
  //splitting to input in to array
  let directions = input.split("");

  //Might convert into a switch statement
  //Clockwise direction
  if (direction === "N" && directions[0].toUpperCase() === "R") {
    return (direction = "E");
  }
  if (direction === "E" && directions[0].toUpperCase() === "R") {
    return (direction = "S");
  }
  if (direction === "S" && directions[0].toUpperCase() === "R") {
    return (direction = "W");
  }
  if (direction === "W" && directions[0].toUpperCase() === "R") {
    return (direction = "N");
  }
  //Anticlockwise direction
  if (direction === "N" && directions[0].toUpperCase() === "L") {
    return (direction = "W");
  }
  if (direction === "W" && directions[0].toUpperCase() === "L") {
    return (direction = "S");
  }
  if (direction === "S" && directions[0].toUpperCase() === "L") {
    return (direction = "E");
  }
  if (direction === "E" && directions[0].toUpperCase() === "L") {
    return (direction = "N");
  }
  //might but else clause in here for anything which doesnt contain R or L
}

function droneInput(input) {
  //importing droneDirection function to determine what direction the drone is facing
  droneDirection(input);
  //splitting to input in to array
  let directions = input.split("");

  //complex North // East // South // West
  if (directions[0].toUpperCase() === "N") {
    //iterate over array to extract "-" or "+" to determine wether done goes forward of backwards
    directions.map(char => {
      if (char === "+") {
        return (coordinatesY += 1);
      }
      if (char === "-") {
        return (coordinatesY -= 1);
      }
      return;
    });
  }
  if (directions[0].toUpperCase() === "E") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesX += 1);
      }
      if (char === "-") {
        return (coordinatesX -= 1);
      }
    });
  }
  if (directions[0].toUpperCase() === "S") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesY -= 1);
      }
      if (char === "-") {
        return (coordinatesY += 1);
      }
    });
  }
  if (directions[0].toUpperCase() === "W") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesX -= 1);
      }
      if (char === "-") {
        return (coordinatesX += 1);
      }
    });
  }
  if (direction === "N") {
    if (
      directions[0].toUpperCase() === "R" ||
      directions[0].toUpperCase() === "L"
    ) {
      directions.map(char => {
        if (char === "+") {
          return (coordinatesY += 1);
        }
        if (char === "-") {
          return (coordinatesY -= 1);
        }
      });
    }
  }
  if (direction === "E") {
    if (
      directions[0].toUpperCase() === "R" ||
      directions[0].toUpperCase() === "L"
    ) {
      directions.map(char => {
        if (char === "+") {
          return (coordinatesX += 1);
        }
        if (char === "-") {
          return (coordinatesX -= 1);
        }
      });
    }
  }
  if (direction === "S") {
    if (
      directions[0].toUpperCase() === "R" ||
      directions[0].toUpperCase() === "L"
    ) {
      directions.map(char => {
        if (char === "+") {
          return (coordinatesY -= 1);
        }
        if (char === "-") {
          return (coordinatesY += 1);
        }
      });
    }
  }
  if (direction === "W") {
    if (
      directions[0].toUpperCase() === "R" ||
      directions[0].toUpperCase() === "L"
    ) {
      directions.map(char => {
        if (char === "+") {
          return (coordinatesX -= 1);
        }
        if (char === "-") {
          return (coordinatesX += 1);
        }
      });
    }
  }
  console.log("Drone direction: " + direction);

  //push coordinateHistory into array.
  coordinateHistory = [
    ...coordinateHistory,
    `${String(coordinatesX)},${String(coordinatesY)}`
  ];

  //returning value as string as it appears on scenario.pdf
  return `${String(coordinatesX)},${String(coordinatesY)}`;
}
