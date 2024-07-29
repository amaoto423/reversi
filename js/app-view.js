const appView = {};

appView.init = function () {
  appLayout.init();
  const size = appLayout.fitSize;
  this.cobjBg = GameCanvas.addBgCanvas("reversi", size, size);
  this.cobj = GameCanvas.addCanvas("reversi", size, size);
  this.drawBoard;
};
appView.drawBoard = function () {};
