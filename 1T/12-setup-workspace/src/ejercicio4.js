const youShouldNeverUseVar = `This is my very long line that eslint   
  should check as an error
  ............................................`;

function myFunction(used) {
  if (used) {
    // eslint-disable-next-line no-console
    console.log(used, youShouldNeverUseVar);
  }
}

module.exports = myFunction;
