!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false
// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true