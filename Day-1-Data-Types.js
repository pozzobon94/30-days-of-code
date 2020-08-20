/* Task
Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:

Declare  variables: one of type int, one of type double, and one of type String.
Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
Use the  operator to perform the following operations:
Print the sum of  plus your int variable on a new line.
Print the sum of  plus your double variable to a scale of one decimal place on a new line.
Concatenate  with the string you read as input and print the result on a new line.
*/

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    // Declare second integer, double, and String variables.
    var int = 12;
    var double = 4.0;
    var string = "is the best place to learn and practice coding";
    
    // Read and save an integer, double, and String to your variables.
    console.log(int);
    console.log(double);
    console.log(string);
    
    // Print the sum of both integer variables on a new line.
    console.log(int + i);
    
    // Print the sum of the double variables on a new line.
    console.log(double + d);
    
    // Concatenate and print the String variables on a new line
    console.log(s + string);
    
    // The 's' variable above should be printed first.
}
