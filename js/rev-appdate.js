const revUpdate = {};

revUpdate.reverse = function (board, x, y, player) {
  let revTokens = [];
  board[y][x] = player;
  revLow.scan8Direction(board, x, y, (line) => {
    const tokens = revMid.getAllreverse(line, player);

    revTokens.push(...tokens);
  });

  revTokens.forEach((e) => {
    board[e.y][e.x] = player;
  });
  return revTokens;
};

revUpdate.changePlayer = function (player) {
  revCore.data.player = 1 - player;
  console.log(revCore.data.player);
  return;
};
