document.addEventListener("DOMContentLoaded", async function () {
  let revData = new RevData();
  //  const gameCanvas=GameCanvas.addBgCanvas('#reversi',1200,800);
  revCore.init();
  console.log(revCore.data);
  const r = await appResouce.load();
  console.log(r);
  appView.init();
  appView.update();

  gameAnim.add("main", () => {
    appView.update();
  });

  gameAnim.start();
  console.log(revData.blank);
  await gameUtil.sleep(1000);
  revCore.data.board[3][3] = RevData.blank;

  await gameUtil.sleep(1000);

  revCore.data.board[4][4] = RevData.blank;
});
