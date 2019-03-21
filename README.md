# ladbrokes-tech-test

This challenge will be completed using javascript & Node.

# Dependancies

Jest

# Introduction

This is a programme to navigate a drone safely through the city.
The drone will be able to take both basic and complex inputs.

My take on this challenge was to create the drone as a constructor.

Every new Drone() created will have the ability to:

    -Turn Left
    -Turn Right
    -Move Forwards
    -Move Backwards
    -Travel North
    -Travel South
    -Travel East
    -Travel West

The drone also has the ability to show information such as:

    -What direction it is facing
    -Current coordinates
    -Coordinate history.

# Instructions

Clone or download from github.
CD into folder and npm install.

To input both basic and complex problem files into the drone, type npm start into the CLI.

# Testing

Javascript unit testing using Jest.
To test all of the drones features are working type npm test into the CLI.

# Further details

I've added both of the input.txt files to this package.
Within index.js, i've imported the txt files, saved into an array & imported my Drone constructor.

When called each function within index.js (basicDroneInput() & complexDroneInput()) will loop over each item in the arrays and show the final
coordinates within the console.log

Any questions or if you need further instructions, please dont hesitate to contact me.

Kind Regards.
Jamie Davis

jamied1985@gmail.com
