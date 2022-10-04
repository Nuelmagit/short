Comparison of three numbers
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
So how it works:

1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false