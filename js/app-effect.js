const appEffect={};

appEffect.effectPromise=function(ID,MAX,func){
    return new Promise(resolve=>{
        const id=ID;
        const max=MAX;
        const start=gameAnim.time.sum;
        gameAnim.add(id,()=>{
            const diff=gameAnim.time.sum-start;
            if(diff<max){func(diff/max)}
            else{
                gameAnim.remove(id);
                resolve();
            }
        });

    })
}
appEffect.popupMessage=async function(text){
                    
         await appEffect.effectPromise("message",750,(RATE)=>{
            const rate=RATE
            const {cobj}=appView;
            const x=cobj.w/2;
            const y=cobj.h*Math.max(1.5-rate*3,0.5);           
            resFont.draw("main",cobj,text,x,y,2)
             
        })
}