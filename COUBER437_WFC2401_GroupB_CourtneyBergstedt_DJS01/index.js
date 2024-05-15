
// Given Parameters: These parameters include initial velocity, acceleration, time, initial distance, initial fuel, and fuel burn rate.
const initialVelocity = 10000; // Initial velocity (km/h)
const acceleration = 3; // Acceleration (m/s^2)
const time = 3600; // Time (seconds) (1 hour)
const initialDistance = 0; // Initial distance (km)
const initialFuel = 5000; //Initial fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


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

// uses the three parameters: initial velocity, acceleration, and time.
// converts the initial velocity from kilometers per hour to meters per second
//Finally, it converts the new velocity back to kilometers per hour and returns the result.

// Calculate corrected results
const newVelocity = calculateNewVelocity(initialVelocity, acceleration, time);
const newDistance = initialDistance + (initialVelocity * (time / 3600));
const remainingFuel = initialFuel - (fuelBurnRate * time);

console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
//Output:the corrected new velocity, new distance, and remaining fuel are logged to the console.









