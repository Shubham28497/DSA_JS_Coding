// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false
function isValid(s) {
  if (s.length == 0) return null;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let currentChar=s[i]
    if (currentChar == "(") stack.push(")");
    else if (currentChar == "{") stack.push("}");
    else if (currentChar == "[") stack.push("]");
    else if (stack.pop() !== currentChar) return false;
  }
  return stack.length==0
}
s = "([]{})";
console.log(isValid(s))

//Time complexity: O(n)
