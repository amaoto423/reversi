const appView = {};

appView.init = function () {
  appLayout.init();
  const size = appLayout.fitSize;
  this.cobjBg = GameCanvas.addBgCanvas("#reversi", size, size);
  this.cobj = GameCanvas.addCanvas("#reversi", size, size);
};
appView.drawSquare = function (posX, posY) {
  const { unit } = appLayout;
  const { x, y } = appLayout.boardToPixel(posX, posY);

  resImage.draw("square", appView.cobjBg, x, y, unit, unit);
};
appView.drawBoard = function () {
  revLow.scanBoard(this.drawSquare);
};
