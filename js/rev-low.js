const revLow = {};

revLow.scanBoard = function (func) {
  for (let y = 0; y < RevData.h; y++) {
    for (let x = 0; x < RevData.w; x++) {
      func(x, y);
    }
  }
};
