(function (doc, win) {
var docEl = doc.documentElement,//html
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth;//设备宽度
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    //720是设计图的宽度,100是一个基准宽度(html的font-size值)
  };
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);