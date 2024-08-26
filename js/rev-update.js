const revUpdate = {};

revUpdate.reverse = function (board, x, y, player) {
  let revTokens = [];

  revLow.scan8Direction(board, x, y, (line) => {
    const tokens = revMid.getAllreverse(line, player);

    revTokens.push(...tokens);
  });

  revTokens.forEach((e) => {
    board[e.y][e.x] = player;
  });
  return revTokens;
};
