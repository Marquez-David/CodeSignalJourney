function solution(inputString) {
  const stack = [];
  for (let char of inputString) {
    if (char === ')') {
      let nested = '';
      while (stack[stack.length - 1] !== '(') {
        nested += stack.pop();
      }
      stack.pop();
      for (let ch of nested) {
        stack.push(ch);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}