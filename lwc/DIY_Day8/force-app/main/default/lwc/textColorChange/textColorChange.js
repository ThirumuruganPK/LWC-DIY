import { LightningElement } from 'lwc';

export default class TextColorChange extends LightningElement {

    name = "Thiru Murugan";
    colorCss;

    handleChangeRed(){

        this.colorCss= 'red';

    }

    handleChangeBlue(){
        
        this.colorCss= 'blue';

    }
}