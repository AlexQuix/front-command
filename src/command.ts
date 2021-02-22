import {Focus} from "./utils/focus";
import {queryDocument} from "./utils/index";



function core(){
    const wrapperCards = queryDocument(".comands-wrapper-cards");
    const cards = queryDocument(".comands-card");
    const wrapperListening = queryDocument(".comands-listening");
}

interface ICommand{
    start: ()=>void;
}

class Command{
    private contCommands: HTMLDivElement[];
    private Focus: Focus;
    constructor(){
        let containers:unknown = queryDocument(".container-command");
        this.contCommands = containers as HTMLDivElement[];
        this.Focus = new Focus(this.contCommands);
    }
    start(){
        this.Focus.setId();
    }
}




function parsedFocus() {
    const command = new Command();
    command.start();
    window.onscroll = handleScroll;
    function handleScroll(e:Event) {
        
    }
}

export {parsedFocus};