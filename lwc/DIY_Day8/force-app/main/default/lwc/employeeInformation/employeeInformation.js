import { LightningElement } from 'lwc';
const columns = [
    { label: 'Id',fieldName: 'id'},
    { label: 'Name',fieldName: 'name'},
    { label: 'Salary' ,fieldName: 'salary'},
    { label: 'Role' ,fieldName: 'role'}
];

export default class EmployeeInformation extends LightningElement {
    
    employees = [
        {   
            id: 1,
            name: 'Thirumurugan',
            salary: 10000,
            role: 'Salesforce Developer'
        },
        {
            id: 2,
            name: 'Jeya',
            salary: 20000,
            role: 'Senior Salesforce Developer'
        },
        {
            id: 3,
            name: 'Manikandan',
            salary: 30000,
            role: 'Angular Developer'
        }
    ];
    columns = columns;
    //data = [];
    inputSalary;
    filterEmployeeArray;
    isFirstTime = true;
    
    handleInputSalary(event){
        let inputAmountValue;    
        inputAmountValue = event.target.value;
        console.log(inputAmountValue);
        this.inputSalary = inputAmountValue;
    }

    handleFilterEmployee(){
        let filterEmployeeArray = [];
        console.log('inside the handle fileter employee method');
        for (const i of this.employees) {
            if(i.salary > this.inputSalary){
                filterEmployeeArray.push(i);
                console.log('filetered emp array>>' + filterEmployeeArray)
            }
        }
        this.filterEmployeeArray = filterEmployeeArray;
        this.isFirstTime = false;
    }

    handleClear(){
        this.inputSalary = 0;
        this.isFirstTime = true;
    }

}