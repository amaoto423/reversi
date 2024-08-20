const revLow = {};

revLow.scanBoard = function (func) {
  for (let y = 0; y < RevData.h; y++) {
    for (let x = 0; x < RevData.w; x++) {
      func(x, y);
    }
  }
};

revLow.scan8Direction = function (board, x, y, func) {
  const direction = [
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: -1, y: 0 },
    ,
    { x: 1, y: 0 },
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
  ];
  direction.forEach((dir) => {
    const line = this.getLine(board, x, y, dir.x, dir.y);
    func(line);
  });
};

revLow.getLine = function (board, startX, startY, dirX, dirY) {
  const SquareList = [];
  let nowX = startX + dirX;
  let nowY = startY + dirY;
  while (nowX >= 0 && nowX <= 7 && nowY <= 7 && nowY >= 0) {
    SquareList.push({ x: nowX, y: nowY, state: board[nowY][nowX] });
    nowX += dirX;
    nowY += dirY;
  }
  return SquareList;
};
