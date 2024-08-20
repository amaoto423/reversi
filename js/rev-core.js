const revCore = {};

revCore.init = function () {
  revCore.data = new RevData();
  const { board, player } = this.data;
  revCore.data.activeSquare = revMid.getAllActive(board, player);
};
