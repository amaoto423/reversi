const appResouce={};
appResouce.load=async function(){
let arr=[];

arr.push( resImage.load("black-token","image/token0.png"));
arr.push(resImage.load("white-token","image/token1.png"));
arr.push(resImage.load("square","image/square.png"));
arr.push(resImage.load("active","image/active.png"));
await Promise.all(arr);
}