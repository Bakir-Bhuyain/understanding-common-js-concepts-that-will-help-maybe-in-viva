/**
 * 8 ways to get undefined:
 *
 * 1. variable that is not initialized will return undefined
 * 2. function with no return
 * 3. parameter that will not passed will be undefined.
 * 4. if return has nothing on the right side will return undefined.
 * 5. property that doesn't exist in an object that will return undefined.
 * 6. accessing array elements outside of the array range will give you undefined.
 * 7. deleting an element inside an array
 * 8. set a value to directly undefined
 */

// 1. variable that is not initialized will return undefined
let first;
//  2. function with no return
function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);
// 3. parameter that will not passed will be undefined.
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
// third(4,5) ;

// 5. property that doesn't exist in an object that will return undefined.
const fifth = {
      name:'salam',
      age:44,
}
// console.log(fifth.name,fifth.salary);
// 6. accessing array elements outside of the array range will give you undefined.
const sixth = [12, 25, 26, 14];
console.log(sixth[3],sixth[5]);
// 7. deleting an element inside an array
const seventh = [12, 25, 26, 14];
delete seventh[1];
// console.log(seventh);

// 8. set a value to directly undefined
const eight = undefined;