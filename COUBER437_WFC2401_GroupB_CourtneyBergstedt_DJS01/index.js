
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






