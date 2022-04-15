/*
// JSON
// literal notation to create an object
const car = {
    age : 18,
    brand : "Mercedes",
   
    getBrand: function() { console.log(this.brand)}
}
// console.log(temp.age)
// console.log(temp['brand'])


// 
car.getBrand()
*/
/*
console.log(window.innerWidth)
// window.alert("this is alert")
console.log(typeof console)
console.warn("i'm console.log" )
console.error("i'm console.log" )

*/
// let arr = [1,2,3,4,5, "hi","john", "sheldon"]
let arr=[1,2,3]

// const callback = function (e,i) {
   
//     console.log(e,i)
// }
// arr.forEach((e,i) => console.log(e,i))
/*
for (let i=0; i<=arr.length; i++) {
console.log(arr[i])
}

let j =0
while( j<arr.length) {
    console.log(arr[j])
    j++
}
*/ 
/*
const pushedElement = arr.push('hi')
console.log(pushedElement)
console.log(arr)
*/

const callback = (ele,i) => { 
    return ele = 10

}
const new_arr = arr.map(callback)
console.log(new_arr)
console.log(arr)