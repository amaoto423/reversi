class GameCanvas{
    static genCanvas(w,h){
        const canvas=document.createElement("canvas");
        canvas.height=h;
        canvas.width=w;
        const context=canvas.getContext("2d");
        return {canvas,context,w,h};
    };
    static addCanvas(selector,w,h){
        const cobj=this.genCanvas(w,h);
        const element=document.querySelector(selector);
        element.append(cobj.canvas);
        return cobj;
    };
    static addBgCanvas(selector,w,h){
        const cobj=this.addCanvas(selector,w,h);
        cobj.canvas.style.background="url(image/bg.png)";
        return cobj;
    };

}