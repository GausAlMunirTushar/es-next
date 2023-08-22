// map
let myMap = new Map ()
myMap.set('key1', 'Bangladesh')
myMap.set('key2', 'India')
myMap.set('key3', 'Pakistan')
myMap.set('key4', 'Nepal')

// myMap.delete('key1')
// myMap.clear();
console.log(myMap.get('key4'))

/* for (let myKeys of myMap.keys()){
   console.log(myKeys)
}
for(let myValue of myMap.values()){
    console.log(myValue)
} */

if(myMap.has('key1')){
    console.log('Yes')
}
else{
    console.log('NO')
}