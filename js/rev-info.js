const revInfo = {};

revInfo.getIsend = function (board, player) {
  const enemy = 1 - player;
  const a0 = revMid.getAllActive(board, player);
  const a1 = revMid.getAllActive(board, enemy);
  if (a0.length === 0 && a1.length === 0) {
    return true;
  }
  return false;
};

revInfo.getScores = function (board) {
  let scoreX = 0;
  let scoreY = 0;
  revLow.scanBoard((x, y) => {
    if (board[y][x] === 0) scoreX++;
    if (board[y][x] === 1) scoreY++;
  });
  revCore.data.scores = [scoreX, scoreY];
  console.log(revCore.data.scores);
};
