document.addEventListener("DOMContentLoaded", async function () {
  let revData = new RevData();
  //  const gameCanvas=GameCanvas.addBgCanvas('#reversi',1200,800);
  revCore.init();
  const r = await appResouce.load();

  appView.init();
  appView.update();

  gameAnim.add("main", () => {
    appView.update();
  });
  gameAnim.start();
  await appEffect.popupMessage("start");
  await appEffect.updateBoard();

  //PUTTOKEN
  //BOARDUPDATE
  //CHANGEPLAYER

  gameClick.add(appView.cobj.canvas, "setToken", (eX, eY) => {
    const Square = appLayout.pixelToBoard(eX, eY);
    const { board, player } = revCore.data;

    if (!Square) return;
    if (!revMid.isActive(board, Square.x, Square.y, player)) return;
    revUpdate.reverse(board, Square.x, Square.y, player);
    revUpdate.changePlayer(player);
    revCore.update();
    revCore.data.activeSquares = revMid.getAllActive(
      board,
      revCore.data.player
    );
  });
});
