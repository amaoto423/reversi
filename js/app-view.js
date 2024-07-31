const appView = {};

appView.init = function () {
  appLayout.init();
  const size = appLayout.fitSize;
  this.cobjBg = GameCanvas.addBgCanvas("#reversi", size, size);
  this.cobj = GameCanvas.addCanvas("#reversi", size, size);
  this.drawBoard;
};
appView.drawBoard = function () {
  const { unit } = appLayout;
  for (let posX = 0; posX < 8; posX++) {
    for (let posY = 0; posY < 8; posY++) {
      const { x, y } = appLayout.boardToPixel(posX, posY);
      resImage.draw("square", this.cobjBg, x, y, unit, unit);
    }
  }
};
