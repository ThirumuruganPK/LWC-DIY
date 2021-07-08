import { LightningElement , track} from 'lwc';

const columns = [
    { label: 'Name',fieldName: 'name'},
    { label: 'Price' ,fieldName: 'price'},
    { label: 'Stock' ,fieldName: 'stock'}
];

export default class StockAvailabilityChecker extends LightningElement {
    isShow = true;
    tempStockValue;
   // clearValue=20;
    @track product={
        name : 'Hamam Soap',
        price : 24.5,
        stock : 10
    }
    data = [{
        name : 'Hamam Soap',
        price : 24.5,
        stock : 10
    }];
    columns = columns;
    

    handleInput1(event){
            let input1 = event.target.value;
            let afterParsing = parseInt(input1);
            if(isNaN(afterParsing)){
                alert('please enter number value');
                afterParsing = '';
                //alert(afterParsing);
                this.tempStockValue = afterParsing;
                //alert(this.tempStockValue); 
            }else{
                this.tempStockValue = afterParsing;
                //this.tempStockValue  = stockvalue;
                console.log(this.tempStockValue);
    
                this.product.stock =  this.product.stock - this.tempStockValue;
                console.log(this.product.stock);
                if(this.product.stock <= 0){
                    this.isShow =  false;
                }
            }

            
    }

    handleClear(){
        
        this.isShow = true;
        this.product.stock = 10;
        this.tempStockValue  = 0;
    }
}

/* how to get the all the input value from the single click button 
    clear value not goes to 0, why?
    How to loop my variable
    i use getter method, inside can i get the all the value
    where i have to use the getter name
*/