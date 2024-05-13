
// Given Parameters
const initialVelocity = 10000; // Initial velocity (km/h)
const acceleration = 3; // Acceleration (m/s^2)
const time = 3600; // Time (seconds) (1 hour)
const initialDistance = 0; // Initial distance (km)
const initialFuel = 5000; //Initial fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Function to calculate new velocity
function calculateNewVelocity(velocity, acceleration, time) { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid parameter type. All parameters must be numbers.');
}

   // Convert initial velocity from km/h to m/s
   const initialVelocityInMetersPerSecond = velocity * (1000 / 3600);

   // Calculate new velocity using the formula: v = u + at
   const newVelocity  = initialVelocityInMetersPerSecond + (acceleration * time);
 
   // Convert new velocity from m/s to km/h
   const newVelocityInKmPerHour = newVelocity * (3600 / 1000);
 
   return newVelocityInKmPerHour;
 }

// Calculate corrected results
const newVelocity = calculateNewVelocity(initialVelocity, acceleration, time);
const newDistance = initialDistance + (initialVelocity * (time / 3600));
const remainingFuel = initialFuel - (fuelBurnRate * time);

console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);




//Given Parameters: Start by explaining the parameters provided at the beginning of the code. These parameters include initial velocity, acceleration, time, initial distance, initial fuel, and fuel burn rate.
//Function to Calculate New Velocity:the calculateNewVelocity function:
//This function will use the three parameters: initial velocity, acceleration, and time.
// It first converts the initial velocity from kilometers per hour to meters per second, then calculates the new velocity using the formula v = u + at (where v is the final velocity, u is the initial velocity, a is acceleration, and t is time). 
//Finally, it converts the new velocity back to kilometers per hour and returns the result.

//Corrected Results Calculation: the corrected results are calculated using the given parameters and the calculateNewVelocity function. The corrected new velocity is computed by calling the calculateNewVelocity function with the initial velocity, acceleration, and time. The corrected new distance is calculated by adding the initial distance to the product of the initial velocity (converted to meters per second) and time (converted to hours). The corrected remaining fuel is determined by subtracting the product of the fuel burn rate and time from the initial fuel.
//Output:the corrected new velocity, new distance, and remaining fuel are logged to the console.






