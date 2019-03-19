//Storing variabels at global level
let coordinatesX = 0;
let coordinatesY = 0;
let direction = "N";

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
  if (input.split("").charAt[0])
    //importing droneDirection function to determine what direction the drone is facing
    droneDirection(input);

  //splitting to input in to array
  let directions = input.split("");

  if (direction === "N") {
    //iterate over array to extract "-" or "+" to determine wether done goes forward of backwards
    directions.map(char => {
      if (char === "+") {
        return (coordinatesY += 1);
      }
      if (char === "-") {
        return (coordinatesY -= 1);
      }
    });
  }
  if (direction === "E") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesX += 1);
      }
      if (char === "-") {
        return (coordinatesX -= 1);
      }
    });
  }
  if (direction === "S") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesY -= 1);
      }
      if (char === "-") {
        return (coordinatesY += 1);
      }
    });
  }
  if (direction === "W") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesX -= 1);
      }
      if (char === "-") {
        return (coordinatesX += 1);
      }
    });
  }
  console.log("Drone direction: " + direction);

  //returning value as string as it appears on scenario.pdf
  return `${String(coordinatesX)},${String(coordinatesY)}`;
}
