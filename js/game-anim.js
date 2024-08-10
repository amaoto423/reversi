const gameAnim = { holder: [], time: { old: 0, now: 0, diff: 0, sum: 0 } };

gameAnim.start = function () {
  this.time.old = Date.now();
  const func = () => {
    this.update();
    requestAnimationFrame(func);
  };
  func();
};

gameAnim.update = function () {
  this.time.now = Date.now();
  this.time.diff = this.time.now - this.time.old;
  this.time.sum += this.time.diff;
  this.time.old = this.time.now;
  this.holder.forEach((x) => x.func());
};

gameAnim.add = function (id, func) {
  this.holder.push({ id, func });
};
gameAnim.remove = function (id) {
  this.holder=this.holder.filter((x) => x.id !== id);
};
