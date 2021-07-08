import { LightningElement } from 'lwc';
import defaultTemplate from './dynamicTemplateRender.html';
import accountTemplate from './accountTemplate.html';
import contactTemplate from './contactTemplate.html';

export default class DynamicTemplateRender extends LightningElement {
    showAccount;
    showContact;
    value = 'Pudukottai';

    get options() {
        return [
            { label: 'Aranthangi', value: 'Aranthangi' },
            { label: 'Chennai', value: 'Chennai' },
            { label: 'Trichy', value: 'Trichy' },
            { label: 'Pudukottai', value: 'Pudukottai' },
        ];
    }

    render(){
        if(this.showAccount == true){
            return accountTemplate;

        }
        else if(this.showContact == true){
            return contactTemplate;
        }
        else{
            return defaultTemplate;
        }
    }

    handleAccount(){
        console.log('handle aaccount called');
        this.showAccount = true;
    }
    
    handleContact(){
        console.log('handle contact cllaed');
        this.showContact = true;
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleCanceContact(){
        this.showContact = false;
    }
    handleCanceAccount(){
        this.showAccount = false;
    }
}