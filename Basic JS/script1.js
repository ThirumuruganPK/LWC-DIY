//Used to find the OddorEven from single value
var a=5;
var myArray = [2,5,4,8,101];
var myArray1 = [-2,5,-4,-8,101];

let OddOrEven =(a)=>{
     // true if num is perfectly divisible by 2 
 if (a%2 ==0) {
     console.log('even');
 }else{
    console.log('odd');
 }
}
OddOrEven(a);

//used to find the OddorEven from List of values
let OddOrEvenList=(myArray)=>{
console.log(myArray);   
for (const i of myArray) {
    if (i%2 == 0) {
        console.log('even');
    }else{
       console.log('odd');
    }
}
}
OddOrEvenList(myArray);

/*
function getOddorEven(OddOrEvenList) {
    //set of statement
    alert('this is call back function');
    OddOrEvenList(myArray);
}
getOddorEven(OddOrEvenList);
*/

let getOddorEven1 = (OddOrEvenList,OddOrEven)=> {
    //set of statement
    //alert('this is call back function getOddorEven1');
    OddOrEvenList(myArray);
    OddOrEven(a);
}
getOddorEven1(OddOrEvenList,OddOrEven);


//method to use separate only positive numbers
let onlyPositiveValues = (myArray1)=>{
    console.log(myArray1.filter( (value)=> value>0));
}

onlyPositiveValues(myArray1);

//method to use get only numbers 
let data = [10,20,true,'abc',false,60];
//let dataAfterRemove = [];
let getOnlyNumbers = (data)=>{
    
    // data.filter((value)=>value ==);
}
getOnlyNumbers(data);