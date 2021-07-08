
/*
var gVar = 'GVar';
let lVar = 'LVar';
console.log(gVar);
console.log(lVar);
//console.log(constant);

function welcomeMsg(){
const constant = 4;

if(true){
var welcome = 'welcome';
let goodbye = 'Good Bye';
goodbye = 'weee'; 
console.log(welcome);
console.log(goodbye);


}
console.log(constant);

console.log(welcome);
//console.log(goodbye);   
console.log(window.gVar);
console.log(window.lVar);
}
welcomeMsg();
*/
let a = (localvar)=>{
    console.log(localvar);
let myArray=[];
let name =  document.getElementById('name').value;
if(name=='Thirumurugan'){
//console.log(name);
//console.log(myArray.length);
myArray.push(name);
//console.log(myArray.length);
//document.getElementById('heading').value = name;
}

for (const i of myArray) {
    console.log(i);    
}

/*
for(let index = 0; index<myArray.length;index++){
console.log(myArray[index]);
}
*/
}

var variable = 'thiru';
let method1 = (localvar)=>{
return `hi ${localvar}`;
}


alert(method1(variable));