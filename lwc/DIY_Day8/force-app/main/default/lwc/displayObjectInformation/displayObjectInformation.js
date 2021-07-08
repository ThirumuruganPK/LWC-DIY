import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Account from '@salesforce/schema/Account';
//import FIELD_NAME from '@salesforce/schema/object.fieldApiName';

export default class DisplayObjectInformation extends LightningElement {

    accountData;

    constructor() {
        super();
        //code
        console.log('OUTPUT : constructor cllaed');
    }

    @wire(getObjectInfo, { objectApiName: Account })
    getAccountInfo({data,error}){
        //console.log('OUTPUT : response >>' + response);
        //console.log('OUTPUT : respose'+ JSON.stringify(response));
        if(data){
            console.log('OUTPUT : data'+ JSON.stringify(data));
            this.accountData = data;
        }
        if(error){
            console.log('OUTPUT : error'+ JSON.stringify(error));
        }
    }
    
    connectedCallback() {
        console.log('OUTPUT : connected callback called');
    }

    renderedCallback(){
        console.log('OUTPUT : rendered callback called');
    }

}