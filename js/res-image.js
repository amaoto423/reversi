const resImage = { holder: {} };

resImage.load = function (id, url) {
  let promise = new Promise((resolve) => {
    let img = new Image();
    this.holder[id] = img;
    img.src = url;
    img.onload = function () {
      resolve(img);
    };
  });

  return promise;
};
resImage.draw = function (id, cobj, x, y, w, h) {
  cobj.context.drawImage(this.holder[id], x, y, w, h);
};
