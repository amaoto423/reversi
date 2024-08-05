const appResouce = {};
appResouce.load = async function () {
  let arr = [];

  arr.push(resImage.load("token-0", "image/token0.png"));
  arr.push(resImage.load("token-1", "image/token1.png"));
  arr.push(resImage.load("square", "image/square.png"));
  arr.push(resImage.load("active", "image/active.png"));
  arr.push(resFont.load("main", "ArchivoBlack"));
  await Promise.all(arr);

  return "success";
};
