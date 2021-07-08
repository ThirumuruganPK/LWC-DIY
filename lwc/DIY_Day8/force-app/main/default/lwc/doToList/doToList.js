import { LightningElement, track } from 'lwc';

export default class DoToList extends LightningElement {
     @track tasks=[];
     inputTask;
     handleInput(event){
        let inputTask = event.target.value;
        this.inputTask = inputTask;
        console.log(this.inputTask);

     }
     handleClick(){

        if(this.inputTask == ""){
            alert('Please Type Your Task Name !');
        }else{
            this.tasks.push(this.inputTask);
            this.inputTask ="";
        }
            console.log(this.tasks);
     }
     handleDelete(event){
         //alert('inside delete mothod>>');
         let labelname = event.target.name;
         let indexPosition;
         console.log(labelname);
         console.log(this.tasks);

         for (const i of this.tasks) {
             if(i == labelname){
                indexPosition = this.tasks.indexOf(i);
             }
         }
         this.tasks.splice(indexPosition,1);
         console.log(this.tasks);
     }
}