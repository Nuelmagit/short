"b" + "a" + + "a" + "a" 

// is interpreted as:

"b" + "a" + (+"a") + "a"

// (+"a") is interpreted as numeric because of the starting +,
// but "a" cannot be converted to a Number, so it is NaN (not a number):

"b" + "a" + NaN + "a"

// NaN is converted to a String during concatenation, making it "NaN":

"b" + "a" + "NaN" + "a"

// String concatenation:

"baNaNa"