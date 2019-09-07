function joinStrings(n, f) {
  let s = '';
  for (let i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

const digits = joinStrings(10, (i) => i);
console.log(digits);
const randomChars = joinStrings(8, (i) => String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)));
console.log(randomChars);
