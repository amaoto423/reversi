const revCore = {};

revCore.init = function () {
  revCore.data = new RevData();
  console.log(this.data);

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
revCore.changePlayer = function (player) {
  revCore.data.player = 1 - player;
  return;
};
revCore.putToken = function (board, Square, player) {
  if (!revMid.isActive(board, Square.x, Square.y, player)) return;
  board[Square.y][Square.x] = player;
  this.data.putToken = Square;
  this.data.revTokens = revUpdate.reverse(board, Square.x, Square.y, player);
  appEffect.updateBoard();
  revCore.changePlayer(player);
  revCore.update();
};
