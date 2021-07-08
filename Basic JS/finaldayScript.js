/*
//Object array 
let lead=[
{
    name: 'Thiru',
    city: 'NY',
    LeadSource: 'Web'   
},
{
    name: 'Thiru',
    city: 'LA',
    LeadSource: 'Phone'   
    },
    {
    name: 'Thiru',
    city: 'TX',
    LeadSource: 'Referal'   
    }
];

//callback function
let getWebLead = ()=>{
    let count = 0;
    for (const i of lead) {
        if(i.LeadSource =='Web'){
            count++;
        }
    }
    console.log('Lead from Web >>' + count);
}

//callback function
let getLeadfromNY = ()=>{
    let leadNameArray =[];
    for (const i of lead) {
        if(i.city =='NY'){
            leadNameArray.push(i.name);      
        }
    }
    for (const i of leadNameArray) {
        console.log(i);
    }
}

//higerorder function
let higherorderfun = (getWebLead,getLeadfromNY)=>{

    console.log('inside higher order fucntion>>');
    getWebLead();
    getLeadfromNY();

}
higherorderfun(getWebLead,getLeadfromNY);

let obj = {
    name:'thiru',
    walk: function() {
        console.log('Stright walk');        
    }
}
*/

class TestClass{

    //Object Array
    studentList = [
        {
            Name:'Student1',
            Total:300,
            Result:'Pass'
        },
        {
            Name:'Student2',
            Total:200,
            Result:'Fail'
        },
        {
            Name:'Student3',
            Total:400,
            Result:'Pass'
        },
        {
            Name:'Student4',
            Total:100,
            Result:'Fail'
        },
        {
            Name:'Student5',
            Total:450,
            Result:'Pass'
        },        {
            Name:'Student6',
            Total:350,
            Result:'Pass'
        }
    ];   
    passedStudent = [];


    constructor(){

        // console.log('constructor cllaed');
        // this.studentList;
        //console.log(this.studentList);

        // this.passedStudent;
        // console.log(this.passedStudent);
        }


    //method
    displayStudentDetails(){

        //object array
        for (const i of this.studentList) {
            if(i.Result =='Pass'){
                this.passedStudent.push(i);
            }
        }

        for (const i of this.passedStudent) {
            //sort the name using the mark in descending
           // console.log(i.sort((a,b)=>a - b));
           console.log(i.Total);

        }
    }

}

let obj = new TestClass();
obj.displayStudentDetails();