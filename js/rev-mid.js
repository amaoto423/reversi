const revMid = {};
revMid.getAllreverse = function (line, player) {
  const enemy = 1 - player;
  if (line.length < 2) return [];
  if (line[0].state !== enemy) {
    return [];
  }
  const revToken = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i].state === player) return revToken;
    if (line[i].state === RevData.blank) return [];
    if (line[i].state === enemy) revToken.push(line[i]);
  }
  return [];
};

revMid.isActive = function (board, x, y, player) {
  let res = false;
  if (board[y][x] !== RevData.blank) return res;
  revLow.scan8Direction(board, x, y, (line) => {
    const tokens = revMid.getAllreverse(line, player);
    if (tokens.length) res = true;
  });

  return res;
};

revMid.getAllActive = function (board, player) {
  const res = [];
  revLow.scanBoard((x, y) => {
    if (this.isActive(board, x, y, player)) {
      res.push({ x, y });
    }
  });
  return res;
};
