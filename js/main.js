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
  await appEffect.popupMessage("start");

  revCore.data.putToken={x:2,y:2};
  revCore.data.revTokens=[{x:3,y:3},{x:4,y:4},{x:5,y:5},];
  await appEffect.updateBoard();
  
});
