const gameUtil = {};
gameUtil.sleep = function (time) {
  let promise = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return promise;
};

gameUtil.inRange = function (x, y, rect) {
  if (x < rect.x) {
    return false;
  }
  if (y < rect.y) {
    return false;
  }
  if (x > rect.x + rect.w) {
    return false;
  }
  if (y > rect.y + rect.h) {
    return false;
  }
  return true;
};
