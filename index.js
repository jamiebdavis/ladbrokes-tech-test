//Storing variabels at global level
let coordinatesR = 0;
let coordinatesL = 0;

function droneMovement(input) {
  //splitting to input in to array
  let directions = input.split("");

  //depending on first character in array, will iterate over each value and update in correct coordinates

  if (directions[0] === "R") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesR += 1);
      }
      if (char === "-") {
        return (coordinatesR -= 1);
      }
    });
  }

  if (directions[0] === "L") {
    directions.map(char => {
      if (char === "+") {
        return (coordinatesL += 1);
      }
      if (char === "-") {
        return (coordinatesL -= 1);
      }
    });
  }

  //returning value as string
  return `${String(coordinatesR)},${String(coordinatesL)}`;
}

droneMovement("L--");
