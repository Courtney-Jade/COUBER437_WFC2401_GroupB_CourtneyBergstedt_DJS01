# Mars Climate Orbiter Solution
 This code addresses issues related to readability, calculation errors, and robustness. Error handling mechanisms have been implemented to ensure that incorrect parameter types or units of measurement trigger error messages.

 ## Original Code Structure
The original code consisted of:

1. Declaration of given parameters such as initial velocity, acceleration, time, initial distance, initial fuel, and fuel burn rate.
2. A function calcNewVel was declared after parameter declaration, but it was assigned after being used, causing a reference error.
3. There were incorrect calculations made directly based on the given parameters without considering units or potential errors.
4. The output statements printed results without considering the need for proper unit conversions or error handling.

## Expected Corrected Results
After correction, the expected results are as follows:

1. New Velocity: Approximately 48880 km/h
2. New Distance: Approximately 10000 km
3. Remaining Fuel: Approximately 3,200 kg

## My Task
My task is to enhance the code's readability, identify and correct calculation errors, and improve the robustness of calculations. If incorrect units are used or other errors are detected, the code should notify the user instead of producing an incorrect result.


 ## Changes Made :
 1. Descriptive variable names were used for code clarity.
 2. There is proper indentation and formatting for better  readability.
 3. Corrected a calculation error in the calculation of new velocity.
 4. Robust error handling mechanisims to prevent silent failures was implemented.
 5. Validation checks were added to ensure that all input parameters are the correct type(numbers).

## In Progress
None