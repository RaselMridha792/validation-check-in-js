// check the number type 
const x = '33';
if(typeof x === 'number'){
    console.log('its a number');
}
else{
    console.log('its not a number');
}

// checking array 
const numbers = [33, 44, 22, 456, 2];
if(Array.isArray(numbers)){
    console.log('yes, this is an array');
}
else{
    console.log('its not an array');
}