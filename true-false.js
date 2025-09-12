/**
 * 1 => Truthy 
 * 1. True
 * 2. any number is (-,+) is truthy value
 * 3. ' 'is truthy
 * 4. any string is truthy other then '' this
 * 5. empty object{} is truthy 
 * 6. empty array[] is truthy 
*/
/**
 * 2 => falsy
 * 1. false 
 * 2. '' is falsy
 * 3. 0 is a falsy value
 * 4. null is falsy 
 * 5.undefined is falsy
 */

let x = undefined;
console.log(x);
if (x){
      console.log('value of x is truthy');
}else{
      console.log('value of x is falsy')
}

//optional falsy checker
const y = null;
if(!y){
      console.log('value is falsy')
}
//truthy checker
const z = {class:9};
if(!!z){
      console.log('value is truthy');
}