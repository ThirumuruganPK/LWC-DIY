import { LightningElement,wire, api } from 'lwc';
import getAccountDetails from './getAccountDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import ACCOUNT_OBJECT from '@salesforce/schema/Account';
//import NAME_FIELD from '@salesforce/schema/Account.Name';
//import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

 //const FIELDS = ['NAME_FIELD','INDUSTRY_FIELD'];

import { getRecord, createRecord, updateRecord, deleteRecord, getRecordUi, getFieldValue, getFieldDisplayValue, getRecordCreateDefaults, createRecordInputFilteredByEditedFields, generateRecordInputForCreate, generateRecordInputForUpdate } from 'lightning/uiRecordApi';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */

export default class GetAccountDetails extends LightningElement {

    @api recordId;
    @api name;
    constructor() {
        super();
        //code
        console.log('OUTPUT : constructor called');
    }   

    accountData;
    // if we want to execute dynamic '$recordId'
    @wire(getRecord,{recordId:'$recordId',fields:['Account.Name','Account.Industry']}) //when this will automatically execute again and again
    getAccountRecord({data,error}){
        if(data){
            console.log('OUTPUT : data>> '+ data);
            console.log('OUTPUT : data>> '+ JSON.stringify(data));
            this.accountData=data;          

        }
        if(error){
            console.log('OUTPUT : error>> '+ JSON.stringify(error));
            this.dispatchEvent(new ShowToastEvent({
            title: 'Error',
            message: error.message,
            variant: 'error'
        }));
        }
    }
    connectedCallback(){
        console.log('OUTPUT :connected call back called ');
        
    }
    /*
    render(){
        console.log('OUTPUT : render called');
        return  getAccountDetails;
    }
    */
    renderedCallback(){
        //code
                console.log('OUTPUT : render callback called');

    }
}

/**
 *  when this executed (order of executinon) constructor, connected callback, render, re-render callback, 
 *  how many times executed
 *  
 */