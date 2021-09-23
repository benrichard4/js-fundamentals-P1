function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // 'i' keeping track of the row and 'j' is keeping track of the columns
  let checkerboard = '';
  for(let i = 1; i <= 8; i++){
    for(let k = 1; k <=8; k++){
      if(i % 2 !== 0){
        if(k % 2 !== 0){
          checkerboard = checkerboard +'#';
        }else{
          checkerboard = checkerboard +'_';
        }
      }else {
        if(k % 2 !== 0){
          checkerboard = checkerboard +'_';
        }else{
          checkerboard = checkerboard +'#';
        }
      }
    }
    console.log(checkerboard);
    checkerboard = ''
  }
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
// yarn test exercise-11

module.exports = exercise11;
