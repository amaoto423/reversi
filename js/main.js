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

  //PUTTOKEN
  //CHANGEPLAYER
  //BOARDUPDATE

  gameClick.add(appView.cobj.canvas, "setToken", (eX, eY) => {
    const { board, player } = revCore.data;
    const Square = appLayout.pixelToBoard(eX, eY);
    if (!Square) return;
    revCore.putToken(board, Square, player);
  });
});
