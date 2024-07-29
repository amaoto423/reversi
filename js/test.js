document.addEventListener('DOMContentLoaded',async function(){
    let holder={};
    let load=function(id,url){
        let promise=new Promise(resolve=>{
            let img=new Image();
            holder[id]=img;
            img.src=url;
            img.onload=function(){
                resolve(img);
            }
        })
        
        return promise;

    }
    
    const cobj=GameCanvas.addBgCanvas('#reversi',1200,800);
    let arr=[];
    arr.push( load("black-token","image/token0.png"));
    arr.push(load("white-token","image/token1.png"));
    arr.push(load("square","image/square.png"));
    await Promise.all(arr);
    cobj.context.drawImage(holder["black-token"],0,0);
    cobj.context.drawImage(holder["white-token"],150,0);
    cobj.context.drawImage(holder["square"],300,0);
    
})