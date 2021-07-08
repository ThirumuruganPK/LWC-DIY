import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    input1;
    input2;
    Result;

    getInput1(event){
        this.input1 = parseInt(event.target.value);
        console.log(this.input1); 
    }
    getInput2(event){
        this.input2 = parseInt(event.target.value);
        console.log(this.input2); 
    }

    addition(){
        //alert('inside addition');
                this.Result =   this.input1 + this.input2;
                console.log(this.Result); 
    }

    subtraction(){
        //alert('inside subtraction');
      this.Result =   this.input1 - this.input2;
      console.log(this.Result); 
    }

    multiplication(){
        //alert('inside multiplication');
      this.Result =   this.input1 * this.input2;
      console.log(this.Result); 
    }

    division(){
       //alert('inside division');
      this.Result =   this.input1 / this.input2;
      console.log(this.Result); 
    }

    clear(){
        //alert('inside clear');
        this.input1 = null;
        this.input2 = null;
        this.Result = null;
    }

    /*
    when i enter any word inside the input it will return 'NaN', Why it is return like?    */
}