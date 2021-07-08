import { LightningElement, wire } from 'lwc';
import getAccountInfos from '@salesforce/apex/getAccountBasedOnRatingController.getAccountInfos';


export default class GetAccountBasedOnRating extends LightningElement {

    accountData;
    ratingValue='';


    @wire(getAccountInfos,{ ratingValue:'$ratingValue'})
    getAccountInfosWire({data,error}){
        console.log('OUTPUT : wire method called');
        if(data){
            this.accountData = data;
            console.log('OUTPUT : data>>> '+ JSON.stringify(data) );
        }
        if(error){
            console.log('OUTPUT : error>>> '+ JSON.stringify(error) );
        }
    }

    get ratingOptions() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' }
        ];
    }

    handleRatingChange(event){
        if(event.target.label =='Rating'){
           this.ratingValue = event.target.value; 
           console.log('OUTPUT : rating>>'+ this.ratingValue);
        }
    }
}