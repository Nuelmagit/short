[] is equal ![]
Array is equal not array:

[] == ![]; // -> true
+[] == +![]; // -> true
The equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons.

[] == ![]; // -> 0 == 0 -> true



// los transforma a numerrooop