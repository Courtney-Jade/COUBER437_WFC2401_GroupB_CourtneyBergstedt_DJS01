
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

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity(velocity, acceleration, time) { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid parameter type. All parameters must be numbers.');
  }
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






