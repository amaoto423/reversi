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

  revCore.data.putToken = { x: 2, y: 2 };
  revCore.data.revTokens = [
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
  ];
  await appEffect.updateBoard();

  gameClick.add(appView.cobj.canvas, "setToken", (eX, eY) => {
    const Square = appLayout.pixelToBoard(eX, eY);
    const { board, player } = revCore.data;

    if (!Square) return;
    if (!revMid.isActive(board, Square.x, Square.y, player)) return;
    revUpdate.reverse(board, Square.x, Square.y, player);
    revUpdate.changePlayer(player);

    revCore.data.activeSquare = revMid.getAllActive(board, revCore.data.player);
  });
});
