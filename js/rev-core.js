const revCore = {};

revCore.init = function () {
  revCore.data = new RevData();

  testRev.set(this.data);
  this.update();
};

revCore.update = function () {
  const { board, player } = this.data;
  this.data.activeSquares = revMid.getAllActive(board, player);
  this.data.isEnd = revInfo.getIsend(board, player);
  this.data.scores = revInfo.getScores(board);
  return;
};
