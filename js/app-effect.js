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

appEffect.updateBoard=async function(){
    
    await appEffect.effectPromise("update",1000,rate=>{
        const {context}=appView.cobj;
        const {unit}=appLayout;
        context.lineWidth=unit*0.15;
        context.strokeStyle='#9fffff';
        const putToken= revCore.data.putToken;
        const putTokenPos=appLayout.boardToPixel(putToken.x,putToken.y);
        const revTokens=revCore.data.revTokens;
        const revTokensPos=revTokens.map(token=>
            appLayout.boardToPixel(token.x,token.y)
        )
        context.strokeRect(putTokenPos.x,putTokenPos.y,unit,unit);
        
        revTokensPos.forEach(tokenPos => {
            context.save()
            context.translate(tokenPos.x+unit/2,tokenPos.y+unit/2);
            context.rotate(10*rate);
            context.strokeRect(-unit/2,-unit/2,unit,unit);
            context.restore();
        });


    })

}