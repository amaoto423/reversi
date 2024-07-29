const appLayout = {};

appLayout.init = function () {
  this.fitSize = Math.min(window.innerHeight, window.innerWidth);
  this.unit = Math.trunc(this.fitSize * 0.1);
  const u = this.unit;
  this.rectBoard = { x: u, y: u * 1.5, w: u * 8, h: u * 8 };
  this.scoreTexts = [
    { x: u * 3.4, y: u * 0.75, w: u * 2.8 },
    { x: u * 7.4, y: u * 0.75, w: u * 2.8 },
  ];

  this.scoreImages = [
    { x: u, y: u * 0.25 },
    { x: u * 5, y: u * 0.25 },
  ];
};

appLayout.boardToPixel = function (posX, posY) {
  const { unit, rectBoard } = this;
  const x = rectBoard.x + posX * unit;
  const y = rectBoard.y + posY * unit;
  return { x, y };
};

appLayout.pixelToBoard = function (x, y) {
  const { unit, rectBoard } = this;
  if (!gameUtil.inRange(x, y, rectBoard)) return null;
  else {
    return {
      x: Math.trunc((x - rectBoard.x) / unit),
      y: Math.trunc((y - rectBoard.y) / unit),
    };
  }
};
