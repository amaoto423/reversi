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
  if (this.data.isEnd) {
    this.end();
  }
};

revCore.end = async function () {
  const { cobj } = appView;
  await appEffect.popupMessage("END");
  const x = cobj.w / 2;
  const y = cobj.s / 2;

  const text = "END";
  //////////////////////バグってる助けて/////////////////////////////
  gameAnim.add("end", () => {
    resFont.draw("end", cobj, text, x, y, 2);
  });
  ///////////////////////////////////////////////////

  document.addEventListener("keydown", this.handleSpace);
};
revCore.restart = async function () {
  document.removeEventListener("keydown", this.handleSpace);
  revCore.init();
  appView.init();
  appView.update();
  await appEffect.popupMessage("start");
};

revCore.handleSpace = function (e) {
  if (e.code === "Space") {
    e.preventDefault(); // デフォルトのスペースキー動作を無効化（スクロールなど）
    revCore.restart();
  }
};
