const gameClick={holder:{}};

gameClick.add=function(element,id,funcClick){
    const func=e=>{
        let eX=e.clientX;
        let eY=e.clientY;
        if(e.changedTouches){
            
        eX=e.changedTouches[0].clientX;
        eY=e.changedTouches[0].clientY;
        }
        const rect=element.getBoundingClientRect();
        eX=eX-rect.left;
        eY=eY-rect.top;
        funcClick(eX,eY);
    }
    document.addEventListener("click",func);
    this.holder[id]={element,func};
}

gameClick.remove=function(id){
    const obj=this.holder[id];
    if(!obj)return;
    document.removeEventListener("click",obj.func);
    delete this.holder[id];
}