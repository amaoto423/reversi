const appView = {};

appView.init = function () {
  appLayout.init();
  const size = appLayout.fitSize;
  this.cobjBg = GameCanvas.addBgCanvas("#reversi", size, size);
  this.cobj = GameCanvas.addCanvas("#reversi", size, size);
  appView.drawBoard();
  appView.drawToken();
  appView.drawCanPut();
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
  revCore.data.activeSquare.forEach((Squ) => {
    const { x, y } = appLayout.boardToPixel(Squ.x, Squ.y);
    resImage.draw("active", appView.cobj, x, y, unit, unit);
  });
};

appView.drawScoreImage = function () {
  const { unit, scoreImages } = appLayout;
  scoreImages.forEach((e, i) => {
    resImage.draw(`token-${i}`, this.cobj, e.x, e.y, unit, unit);
  });
};
appView.drawScoreText = function () {
  const { unit, scoreTexts } = appLayout;
  scoreTexts.forEach((pos, i) => {
    const name = ["YOU", "COM"][i];
    const score = revCore.data.scores[i];
    const scoreText = `${score}`.padStart(2, "0");
    const text = `${name}${scoreText}`;
    resFont.draw("main", this.cobj, text, pos.x, pos.y, 1, pos.w);
  });
};
appView.update = function () {
  const { context, w, h } = this.cobj;
  context.clearRect(0, 0, w, h);

  this.drawToken();
  this.drawScoreImage();
  this.drawScoreText();
  this.drawCanPut();
};


