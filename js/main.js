document.addEventListener("DOMContentLoaded", async function () {
  let revData = new RevData();
  //  const gameCanvas=GameCanvas.addBgCanvas('#reversi',1200,800);
  revCore.init();
  console.log(revCore.data);
  const r = await appResouce.load();
  console.log(r);
  appView.init();
  appView.drawBoard();
  appView.drawToken();
  appView.drawCanPut();
  let { cobj } = appView;
  let text = "You02COM02";
  resFont.draw("main", cobj, text, cobj.w / 2, cobj.h / 2, 1, cobj.w);
});
