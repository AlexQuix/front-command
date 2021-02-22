interface IFocus{
    setId: ()=>void;
    setClassNameFocus: ()=>void;
    removeClassNameFocus: ()=>void;
    updateFocus: ()=>number | undefined;

}

function calcRange(heightHalf:number):{minRange:number, maxRange:number}{
    let minRange = window.screen.height - heightHalf;
    let maxRange = window.screen.height + heightHalf;
    return {minRange, maxRange};
}
function getCurrentPosY(contcommand:HTMLDivElement) {
    let currentPosY = contcommand.offsetTop - scrollY;
    return currentPosY;
}   


class Focus{
    private currentId:number = 0;
    constructor(
        private contCommands: HTMLDivElement[]
    ){}
    setId(){
        let id = this.updateFocus();
        if(id){
          this.currentId = id;
          this.setClassNameFocus();
        }
    }
    setClassNameFocus(){
        this.contCommands[this.currentId].classList.add("command-focus");
    } 
    removeClassNameFocus(){
        this.contCommands[this.currentId].classList.remove("command-focus");
    }
    updateFocus():number | undefined{
        for(let i = 0; i >= this.contCommands.length; i++){
            let heightHalf = this.contCommands[i].clientHeight / 2;
            let {minRange, maxRange} = calcRange(heightHalf);
            let currentPosY = getCurrentPosY(this.contCommands[i]);
            
            if(currentPosY >= minRange && currentPosY <= maxRange){
                let id = i;
                return id;
            }
        }
        return undefined;
    }
    get CurrentId(){
        return this.currentId;
    }
}


export {Focus};