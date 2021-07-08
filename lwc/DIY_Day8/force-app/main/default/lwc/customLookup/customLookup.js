import { LightningElement, api, track, wire} from 'lwc';
import fetchRecords from '@salesforce/apex/CustomLookupController.fetchRecords';
import createNewDumpster from '@salesforce/apex/CustomLookupDumpsterController.createNewDumpster';
import newAccountTemplate from './newAccountTemplate.html';
import customLookupTemplate from './customLookup.html';
import showSuccessMessageTemplate from './showSuccessMessageTemplate.html';
import { createRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


/**
 * import UiRecordApi
 * import all the fields and object
 * create an imperative method
 * get the id from the response once after created account
 * hide the account creation modal
 * set the value of the input field of the account --try the passibilities  
 */
/*
// ACCOUNT OBJECT FIELDS
import Account_Object from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Contact_Name from '@salesforce/schema/Account.Contact_Name__c';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Email_1 from '@salesforce/schema/Account.Email_1__c';
import Account_Email_2 from '@salesforce/schema/Account.Email_2__c';
import Account_Haulbrooke_Regional_Base from '@salesforce/schema/Account.Haulbrooke_Account__c';
import Account_Card_Number from '@salesforce/schema/Account.Card_Number__c';
import Account_Expiration_Date from '@salesforce/schema/Account.Expiration_Date__c';
import Account_Expiration_Year from '@salesforce/schema/Account.Expiration_Year__c';
import Account_Security_Code  from '@salesforce/schema/Account.Security_Code__c';
import Account_Billing_Zip_Code from '@salesforce/schema/Account.Billing_Zip_Code__c';
import Account_Comments from '@salesforce/schema/Account.Comments__c';
*/

export default class CustomLookup extends LightningElement{

    @api objectName='Account';
    @api fieldName='Name';
    @api value;
    @api iconName='standard:account';
    @api label="Account Name";
    @api placeholder='Type Your Account Name';
    @api className;
    @api required = false;
    @track searchString;
    @track selectedRecord;

    @track recordsList;
    @track message;
    @track showPill = false;
    @track showSpinner = false;
    @track showDropdown = false;
    showNewAccountTemplate =false;
    //objectApiName = 'Account';
    //fieldList = [Account_Name,Account_Contact_Name,Account_Phone,Account_Email_1,Account_Email_2,Account_Haulbrooke_Regional_Base,Account_Card_Number,Account_Expiration_Date,Account_Expiration_Year,Account_Security_Code,Account_Billing_Zip_Code,Account_Comments];
    accName;
    accContactName;
    accPhone;
    accEmail1;
    accEmail2;
    accCardNumber;
    accCardNumberAlt=0;
    accExpireMonth;
    accExpireMonthAlt=0;
    accExpireYear;
    accExpireYearAlt=0;
    accSecurityCode;
    accSecurityCodeAlt=0;
    accBillingZipCode;
    accBillingZipCodeAlt=0;
    accDescription;
    accHaulbrookeRegion = '';

    

    accountName='';
    address='';
    dumpsterSizevalue = '';
    dateValue='';
    timeValue = '';
    comments='';
    phone='';
    po='';
    cardDetailsValue = 'Use Existing';
    cardOption='Use Existing';
    isShowNewCardDetails;
    showAlert=false;
    showAlertAccountName;
    dumpsterId='';

    @api recordId;//Inherits Account Record Id from Account Record Page
    showSuccessMessage;

    handleDumpsterCreate(){

        if((this.cardOption === 'New Card' && this.accountName != '' && this.address != '' && this.dumpsterSizevalue != '' && this.dateValue != '' && this.timeValue != '' && this.accCardNumberAlt != '' && this.accExpireMonthAlt != '' && this.accExpireYearAlt != '' && this.accSecurityCodeAlt != '' && this.accBillingZipCodeAlt != '' ) || (this.cardOption === 'Use Existing' && this.accountName != '' && this.address != '' && this.dumpsterSizevalue != '' && this.dateValue != '' && this.timeValue != '')){
            
        console.log('OUTPUT accountNmae: '+ this.accountName);
        console.log('OUTPUT address: '+ this.address);
        console.log('OUTPUT dumpstersize vlue: '+this.dumpsterSizevalue);
        console.log('OUTPUT date value: '+ this.dateValue);
        console.log('OUTPUT time value: '+  this.timeValue);
        console.log('OUTPUT commetns: '+ this.comments);
        console.log('OUTPUT phone: '+ this.phone);
        console.log('OUTPUT po: '+ this.po);
        console.log('OUTPUT card number alt: '+ this.accCardNumberAlt);
        console.log('OUTPUT expire month alt: '+ this.accExpireMonthAlt);
        console.log('OUTPUT expire year alt: '+ this.accExpireYearAlt);
        console.log('OUTPUT security code alt: '+ this.accSecurityCodeAlt);
        console.log('OUTPUT Billing zip code alt: '+ this.accBillingZipCodeAlt);

                //Returns a promise
                createNewDumpster(
                    {
                        accountName: this.accountName,
                        address: this.address,
                        dumpsterSizevalue:this.dumpsterSizevalue,
                        dateValue:this.dateValue,
                        timeValue:this.timeValue,
                        comments:this.comments,
                        phone:this.phone,
                        po:this.po,
                        accCardNumberAlt:this.accCardNumberAlt,
                        accExpireMonthAlt:this.accExpireMonthAlt,
                        accExpireYearAlt:this.accExpireYearAlt,
                        accSecurityCodeAlt:this.accSecurityCodeAlt,
                        accBillingZipCodeAlt:this.accBillingZipCodeAlt,
                        cardOption:this.cardOption

                    })
                .then(results=>{
                    console.log('results>> : '+ JSON.stringify(results));
                    //alert('New Delivery Created Successfully – Thank you for your business!');
                    this.showSuccessMessage = true;
                    //reset the account
                    this.removeItem();

                    /*
                    //reset the address
                    this.resetStreet = '';
                    this.resetCity = '';
                    this.resetProvince ='';
                    this.resetPostalCode ='';
                    this.resetCountry ='';

                    //reset the other fields
                    this.dumpsterSizevalue='';
                    this.timeValue='';
                    
                    this.resetDateValue ='';
                    this.resetComments ='';
                    this.resetPhone ='';
                    this.resetPo ='';
                    */
                    //this.data=results;
                // this.isError=false;
                })
                .catch(error=>{
                    console.log('error>> : '+ error);
                    console.log(JSON.stringify(error));

                    //this.isError=true;
                    //this.errorMessage=error.body.message;    
                });
        }
        else{
            alert('Please Fill All the Mandatory Fields');
        }
    }
    /*
    handleDumpsterCancel(){

            //reset the account
            this.removeItem();
            //reset the address
            this.resetStreet = '';
            this.resetCity = '';
            this.resetProvince ='';
            this.resetPostalCode ='';
            this.resetCountry ='';

            //reset the other fields
            this.dumpsterSizevalue='';
            this.timeValue='';

            this.resetDateValue ='';
            this.resetComments ='';
            this.resetPhone ='';
            this.resetPo ='';
    }
    */

    handleAccountCreateValues(event){

        if(event.target.label=="Account Name"){
            this.accName = event.target.value;
            console.log('OUTPUT : account name>>' + this.accName);
        }

        if(event.target.label=="Contact Name"){
            this.accContactName = event.target.value;
            console.log('OUTPUT : contact name>>' + this.accContactName);
        }

        if(event.target.label=="Phone"){
            this.accPhone = event.target.value;
            console.log('OUTPUT : phone>> '+ this.accPhone);
        }

        if(event.target.label=="Email 1"){
            this.accEmail1 = event.target.value;
            console.log('OUTPUT : email 1>> ' + this.accEmail1);
        }

        if(event.target.label=="Email 2"){
            this.accEmail2 = event.target.value;
            console.log('OUTPUT : email 2>>'+ this.accEmail2);
        }

        if(event.target.label=="Card Number"){
            this.accCardNumber = event.target.value;
            console.log('OUTPUT : card number>>'+ this.accCardNumber);
        }

        if(event.target.label=="Expiration Month"){
            this.accExpireMonth = event.target.value;
            console.log('OUTPUT : expire month>>'+ this.accExpireMonth);
        }

        if(event.target.label=="Expiration Year"){
            this.accExpireYear = event.target.value;
            console.log('OUTPUT : expire year'+ this.accExpireYear);
        }

        if(event.target.label=="Security Code"){
            this.accSecurityCode = event.target.value;
            console.log('OUTPUT : security code>> '+ this.accSecurityCode);
        }

        if(event.target.label=="Billing Zip Code"){
            this.accBillingZipCode = event.target.value;
            console.log('OUTPUT : zip code>>'+ this.accBillingZipCode);
        }

        if(event.target.label=="Description"){
            this.accDescription = event.target.value;
            console.log('OUTPUT : description '+ this.accDescription);
        }

    }

    handleAccountCreate(){

    if(this.accName != '' && this.accPhone != '' && this.accEmail1 != '' && this.accHaulbrookeRegion != '' && this.accCardNumber != '' && this.accExpireMonth != '' && this.accExpireYear != '' && this.accSecurityCode != '' && this.accBillingZipCode != ''){
        // Creating mapping of fields of Account with values
        var fields = {
                        'Name' : this.accName,
                        'Contact_Name__c' : this.accContactName,
                        'Phone' : this.accPhone,
                        'Email_1__c' : this.accEmail1,
                        'Email_2__c' : this.accEmail2,
                        'Haulbrooke_Account__c' : this.accHaulbrookeRegion,
                        'Card_Number__c' : this.accCardNumber,
                        'Expiration_Month__c' : this.accExpireMonth,
                        'Expiration_Year__c' : this.accExpireYear,
                        'Security_Code__c' : this.accSecurityCode,
                        'Billing_Zip_Code__c' : this.accBillingZipCode,
                        'Description' : this.accDescription,
                        'Name_on_the_Card__c' : 'Alternative Cards:'
                    };

        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Account', fields};

        // LDS method to create record.
        createRecord(objRecordInput).then(response => {
            //alert('Account created with Id: ' +response.id);
            //alert( ' Account '+ '"' + response.fields.Name.value + '"'  + ' Created Successfully !');
            //alert('Account '+ response.fields.Name.value + ' Created Successfully !');

            console.log('OUTPUT : response ' + JSON.stringify(response));
            
            //Hide the New Account Creation Modal
            this.showNewAccountTemplate = false;
            
            //this.showAlert = true;
            //this.showAlertAccountName = response.fields.Name.value;
            alert('Account was created Successfully !');
            //Redirect to the new delivery page & Pre-populate with recently created value 
            //this.handlePrePopulateFromNewAccountCreation=response.fields.Name.value;
            //this.value = this.selectedRecord.value;
            //this.accountName = this.selectedRecord.value;
            let newlyCreatedAccount = [
                            {
                                "label": response.fields.Name.value,
                                "value": response.id
                            }
                        ]
            console.log('OUTPUT : newlyCreated Account>>'+ JSON.stringify(newlyCreatedAccount));    
            this.selectedRecord =   newlyCreatedAccount[0];  
            console.log('OUTPUT : selectedRecord >> ' + JSON.stringify(this.selectedRecord));
            this.value = this.selectedRecord.value;
            console.log('OUTPUT : selectedRecord id >> this.value ' + this.value);
            this.accountName = this.selectedRecord.value;
            console.log('OUTPUT : selectedRecord id >> this.accountName' + this.accountName);
            this.showDropdown = false;
            this.showPill = true;

            


        }).catch(error => {
           /* alert('Error: ' +JSON.stringify(error)); */
            console.log('OUTPUT : error' + JSON.stringify(error));
        });

    }else{
        alert('Please Fill All the Mandatory Fields');
    }
}


    



    genericInputChange(event){
        
        console.log('Street => ' , event.target.street);
        console.log('City => ' , event.target.city);
        console.log('Province => ' , event.target.province);
        console.log('Country => ' , event.target.country);
        console.log('postal Code => ' , event.target.postalCode);
        this.address = event.target.street +','+ event.target.city +','+ event.target.province +','+ event.target.country +','+ event.target.postalCode;
    console.log('OUTPUT : combine address>>'+ this.address);
    }

    handleChange(event){
        
        if(event.target.label=="Card Details"){
                this.cardOption = event.target.value;
                console.log('card Option >>>' + this.cardOption);
                if(this.cardOption == 'New Card'){
                    this.isShowNewCardDetails = true;
                }else{
                    this.isShowNewCardDetails = false;
                }
        }
        if(event.target.label=="Delivery Date"){
            this.dateValue = event.target.value;
            console.log('delivery date>>' + this.dateValue);
        }
        if(event.target.label=="Comments"){
            this.comments = event.target.value;
            console.log('comments>>>' + this.comments);
        }
        if(event.target.label=="Phone"){
            this.phone = event.target.value;
            console.log('phone>>' +  this.phone);
        }
        if(event.target.label=="Purchase Order"){
            this.po = event.target.value;
            console.log('po>>>' + this.po);
        }
        
        if(event.target.label=="Card Number"){
            this.accCardNumberAlt = event.target.value;
            console.log('OUTPUT : card number Alt>>'+ this.accCardNumberAlt);
        }

        if(event.target.label=="Expiration Month"){
            this.accExpireMonthAlt = event.target.value;
            console.log('OUTPUT : expire month alt>>'+ this.accExpireMonthAlt);
        }

        if(event.target.label=="Expiration Year"){
            this.accExpireYearAlt = event.target.value;
            console.log('OUTPUT : expire year alt'+ this.accExpireYearAlt);
        }

        if(event.target.label=="Security Code"){
            this.accSecurityCodeAlt = event.target.value;
            console.log('OUTPUT : security code alt>> '+ this.accSecurityCodeAlt);
        }

        if(event.target.label=="Billing Zip Code"){
            this.accBillingZipCodeAlt = event.target.value;
            console.log('OUTPUT : zip code alt>>'+ this.accBillingZipCodeAlt);
        }


    }

    get cardDetailsOptions() {
        return [
            { label: 'Use Existing', value: 'Use Existing' },
            { label: 'New Card', value: 'New Card' },
        ];
    }

    get options() {
        return [
            { label: '20 Yard', value: '20yd' },
            { label: '30 Yard', value: '30yd' },
            { label: '40 Yard', value: '40yd' },
            { label: '20yd - Concrete only', value: '20yd - Concrete only' },
        ];
    }

    get haulbrookeRegions() {
        return [
            { label: 'Houston', value: 'Houston' },
            { label: 'San Antonio', value: 'San Antonio' },
         ];
    }

       get timeoptions() {
        return [
            { label: 'AM', value: '9am' },
            { label: 'PM', value: '2pm' },
         ];
    }

    handleDumpsterSizeChange(event) {
        this.dumpsterSizevalue = event.detail.value;
        console.log('dumpster size>>'+ this.dumpsterSizevalue);
    }

    handleTimeChange(event) {
        this.timeValue = event.detail.value;
        console.log('time valeu>>' + this.timeValue);
    }

    handlehaulbrookeRegions(event) {
        this.accHaulbrookeRegion = event.detail.value;
        console.log('regional value>>' + this.accHaulbrookeRegion);
    }

    /*
    handleAccountCreate(){
        alert('Account is Created Successfully');
        console.log('handle account create method called>>');
        
    }
    */
    handleNewAccountCreation(){
        this.showNewAccountTemplate = true;
    }


    handleCancel(){
        this.accName ='';
        this.accContactName='';
        this.accPhone='';
        this.accEmail1='';
        this.accEmail2='';
        this.accCardNumber='';
        this.accExpireMonth='';
        this.accExpireYear='';
        this.accSecurityCode='';
        this.accBillingZipCode='';
        this.accDescription='';
        this.accHaulbrookeRegion = '';
        this.showNewAccountTemplate = false;
    }
    handleAlertCancel(){
        this.showAlert=false;
    }
    connectedCallback() {
        if(this.value){
            this.fetchData();
            console.log('fetch data' + this.fetchData());
        }
    }
    
    render(){
        if(this.showNewAccountTemplate == true){
            return newAccountTemplate; 
        }else if(this.showSuccessMessage == true){
            return showSuccessMessageTemplate;
        }
        else{
           return customLookupTemplate;
        }
    }
    
    searchRecords(event) {
        this.searchString = event.target.value;
        if(this.searchString) {
            this.fetchData();
        } else {
            this.showDropdown = false;
        }
    }

    selectItem(event) {
        if(event.currentTarget.dataset.key) {
    		var index = this.recordsList.findIndex(x => x.value === event.currentTarget.dataset.key)
            if(index != -1) {
                this.selectedRecord = this.recordsList[index];
                console.log('selected items>>'+ this.selectedRecord);

                this.value = this.selectedRecord.value;
                console.log('selected items vale>>'+ this.value);

                this.accountName = this.selectedRecord.value;
                console.log('selected accnt name >>'+ this.accountName);

                this.showDropdown = false;
                this.showPill = true;
            }
        }
    }

    removeItem() {
        this.showPill = false;
        this.value = '';
        this.selectedRecord = '';
        this.searchString = '';
    }

    showRecords() {
        if(this.recordsList && this.searchString) {
            console.log('show records metthod called>>');
            this.showDropdown = true;
        }
    }

    blurEvent() {
        this.showDropdown = false;
    }

    fetchData() {
        this.showSpinner = true;
        this.message = '';
        this.recordsList = [];
        fetchRecords({
            objectName : this.objectName,
            filterField : this.fieldName,
            searchString : this.searchString,
            value : this.value
        })
        .then(result => {
            if(result && result.length > 0) {
                if(this.value) {
                    this.selectedRecord = result[0];
                    this.showPill = true;
                } else {
                    this.recordsList = result;
                    console.log('OUTPUT : fetch record result ' + result);
                    console.log('OUTPUT : fetch record result ' + JSON.stringify(result));
                    
                }
            } else {
                this.message = "No Records Found for '" + this.searchString + "'";
            }
            this.showSpinner = false;
        }).catch(error => {
            this.message = error.message;
            this.showSpinner = false;
        })
        if(!this.value) {
            this.showDropdown = true;
        }
    }
}
