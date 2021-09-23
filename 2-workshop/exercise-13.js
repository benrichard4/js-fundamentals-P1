function exercise13() {
  // Exercise 13
  //
  // The Fibonacci sequence is a sequence of numbers where every value is the sum
  // of the previous 2 values.
  // It looks like this:
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  //
  // Why?
  // 13 + 21 = 34
  // 8 + 13 = 21
  // 5 + 8 = 13
  //
  // Every number in the sequence is the result of adding the two numbers to
  // the left. The sequence starts with "0, 1", and every number beyond that
  // can be calculated by adding the previous 2 numbers.
  //
  // Write a program which calculates the 50th number in the fibonacci sequence
  // (The numbers get big quickly!)
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  let numToCalc = 50;
  let sumCurrent = 1;
  let sumOldCurrent;
  let sumPrev = 0;
    //i has to reach "numToCalc-3" because the first 3 (0,1,1) are taken into account when all the variables are initially set. 
  //Otherwise it'd loop through 0=0+0 a bunch of times.
  //It also assumes that "0" is the first number in the fibonaci sequence, as opposed to "1".
  
  for(let i = 0; i <= numToCalc-3; i++){
    sumOldCurrent = sumCurrent;
    sumCurrent = sumCurrent + sumPrev;
    sumPrev = sumOldCurrent;
    console.log(sumPrev+' '+sumCurrent);
  }
  console.log(sumCurrent);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-13
exercise13()
module.exports = exercise13;
