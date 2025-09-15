function name (a, b, c){
      console.log(arguments);
      const fullName = a+b+c;
      const args = [...arguments];
      console.log(args);
      return fullName
}
const result = name(52, 55, 24, 36, 45);
console.log(result);
console.log(name.length)