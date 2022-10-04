
const num = 3

OBJ insteand of switch case
// LONGER FORM
switch (num) {
  case 1:
    someFunction();
    break;
  case 2:
    someOtherFunction();
    break;
  case 3:
    yetAnotherFunction();
    break;
}

// SHORTHAND
var cases = {
  1: someFunction,
  2: someOtherFunction,
  3: yetAnotherFunction,
};

cases[num]();