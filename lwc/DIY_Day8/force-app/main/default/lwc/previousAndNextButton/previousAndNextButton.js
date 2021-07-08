import { LightningElement, track } from 'lwc';

export default class PreviousAndNextButton extends LightningElement {
    employees=[];
    @track defaultEmployee=[];
    currentIndex=0;

    connectedCallback(){
        this.hadleEmployeeDataFetch();
    }
    async hadleEmployeeDataFetch(){
        let firstEmployee=[];
        let url="https://employee-directory-services.herokuapp.com/employees";
        try{
        let data =await fetch(url,{method:'GET'});
        let jsonData = await data.json();
        console.log(jsonData);
        this.employees = jsonData;
        //firstEmployee = this.employees.slice(0,1);
        //console.log('FJIrst employee vlaue' +firstEmployee);
        //this.firstEmployee = firstEmployee;


           this.defaultEmployee.push(this.employees[0]);
           console.log(this.defaultEmployee);
        }
        catch(e){

        }
    }


    handlePrev(){
        console.log('inside the prevous metho');
        
        this.defaultEmployee = [];     
           let previousIndex =  1 - this.employees.length ;
           this.defaultEmployee.push(this.employees[previousIndex]);
           //this.currentIndex = previousIndex;
    }
}