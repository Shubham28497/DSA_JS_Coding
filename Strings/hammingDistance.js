// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑
function hammingDistance(x, y) {
  if (x.length !== y.length) {
    throw new Error("Strings must be of same length");
  }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }

  return distance;
}
console.log(hammingDistance("hello", "hwllr"));
