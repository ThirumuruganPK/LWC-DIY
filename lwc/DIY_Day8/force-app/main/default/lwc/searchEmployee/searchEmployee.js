import { LightningElement } from 'lwc';

export default class SearchEmployee extends LightningElement {
    employees=[];
    inputName;
    searchEmployee=[];
    isEmployee =true;
    async handleGetData(){
        //alert('inside get data methos>>');
        let isEmployee = true;
        this.isEmployee = isEmployee;
        let url = "https://employee-directory-services.herokuapp.com/employees";
        try{
        let response = await fetch(url,{method:'GET'});
        let data = await response.json();
        this.employees = data;
        console.log(this.employees);
        }
        catch(e){
            console.log(e);

        }
    }

    handleClick(event){
        let myArray=[];
       let inputValue =  this.template.querySelector(".input1");
       this.inputName = inputValue.value;
       console.log('inside click >>'+inputValue.value);
       
       for (const i of this.employees) {
           if(i.firstName.toLowerCase() == this.inputName.toLowerCase() || i.lastName.toLowerCase() == this.inputName.toLowerCase() ){
            myArray.push(i);
           }
       }
       this.searchEmployee = myArray;
       this.isEmployee =false;
       console.log(myArray);
    }
}