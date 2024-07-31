document.addEventListener("DOMContentLoaded", async function () {
  let revData = new RevData();
  //  const gameCanvas=GameCanvas.addBgCanvas('#reversi',1200,800);
  const r = await appResouce.load();
  console.log(r);
  appView.init();
  appView.drawBoard();
});
