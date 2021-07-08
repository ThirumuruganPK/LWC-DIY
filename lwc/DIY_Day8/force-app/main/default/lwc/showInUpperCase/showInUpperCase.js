import { LightningElement } from 'lwc';

export default class ShowInUpperCase extends LightningElement {
    input1;

    getInput1(event){
        let value = event.target.value;
        this.input1 = value.toUpperCase();
    }
}