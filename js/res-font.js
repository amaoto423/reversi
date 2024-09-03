const resFont = { holder: {} };

resFont.load = async function (id, fontName) {
  this.holder[id] = fontName;
  const dummy = document.createElement("div");
  dummy.style.fontFamily = fontName;
  dummy.style.opacity = 0;
  dummy.textContent = "dummy";
  document.body.append(dummy);
  await document.fonts.ready;
  dummy.remove();
};
resFont.draw = function (id, cobj, text, x, y, rate, maxW) {
  const { context, w } = cobj;
  const fontSize = w * 0.09 * rate;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#000000";
  context.strokeStyle = "#ffffff";
  context.lineWidth = fontSize * 0.1;
  context.font = `${fontSize}px ${this.holder[id]}`;
  context.strokeText(text, x, y, maxW);
  context.fillText(text, x, y, maxW);
};

resFont.drawMessage = function (id, cobj, texts, x, y, rate, maxW) {
  const { context, w } = cobj;
  const fontSize = w * 0.055 * rate;
  const lineHeight = fontSize * 1.2;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#000000";
  context.strokeStyle = "#ffffff";
  context.lineWidth = fontSize * 0.03;
  context.font = `${fontSize}px ${this.holder[id]}`;
  texts.forEach((text, i) => {
    context.strokeText(text, x, y + i * lineHeight, maxW);
    context.fillText(text, x, y + i * lineHeight, maxW);
  });
};
