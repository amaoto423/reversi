const gameUtil={};
gameUtil.sleep=function(time){
    let promise=new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
    return promise;
};