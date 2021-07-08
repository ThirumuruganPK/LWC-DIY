import { LightningElement } from 'lwc';
import createAcccountTemplate from './createAccount.html';
import modalShowHideTemplate from './modalShowHide.html';

export default class ModalShowHide extends LightningElement {
    showModal = false;
    showRenderModal = false;
    render(){
        if(this.showRenderModal == true){
            return createAcccountTemplate;

        }else{
            return modalShowHideTemplate;
        }
    }

    handleShowModalClick(){
        this.showModal = true;
    }
    handleHideModalClick(){
        this.showModal = false;
    }
    handleShowModalClick1(){
        this.showRenderModal = true;
    }
    handleHideRenderModalClick(){
        this.showRenderModal = false;
    }


    
}