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

appView.drawToken = function () {
  const { unit } = appLayout;
  revLow.scanBoard((posX, posY) => {
    if (revCore.data.board[posX][posY] === RevData.blank) return;
    else {
      const { x, y } = appLayout.boardToPixel(posX, posY);

      resImage.draw(
        `token-${revCore.data.board[posX][posY]}`,
        appView.cobj,
        x,
        y,
        unit,
        unit
      );
    }
  });
};

appView.drawCanPut = function () {
  const { unit } = appLayout;
    revCore.data.activeSquare.forEach(Squ => {
      const { x, y } = appLayout.boardToPixel(Squ.x, Squ.y);
      resImage.draw(
        "active",
        appView.cobj,
        x,
        y,
        unit,
        unit
      );
    });
  }