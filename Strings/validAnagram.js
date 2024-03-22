// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

function anagram(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s == t;
}

console.log(anagram("anagram", "nagaram"));