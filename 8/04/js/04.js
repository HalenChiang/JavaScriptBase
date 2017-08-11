var oTop = document.getElementById('top');
var oBottom = document.getElementById('bottom');
var oItem = document.getElementById('item');
var oContent = document.getElementById('content');
var num = 0;

function getStyle(id, attr) {
    return window.getComputedStyle ? window.getComputedStyle(id, null)[attr] : id.currentStyle[attr];
}
var max = getStyle(oItem, 'height');
var min = getStyle(oContent, 'height');
var n = parseFloat(min) - parseFloat(max);

function autoPlay(obj, speed, flag, max, min) {
    obj.timer = setInterval(function() {
        if (flag) {
            num -= speed;
            if (num <= max) {
                alert('到底部了');
                clearInterval(obj.timer);
                return false;
            }
        } else {
            num += speed;
            if (num > min) {
                alert('到顶部了');
                clearInterval(obj.timer);
                return false;
            }
        }
        obj.style.top = num + 'px';
    }, 40);
}
oTop.onmousedown = function() {
    autoPlay(oItem, 10, 1, n, 0);
};
oTop.onmouseup = function() {
    clearInterval(oItem.timer);
};
oBottom.onmousedown = function() {
    autoPlay(oItem, 10, 0, n, 0);
};
oBottom.onmouseup = function() {
    clearInterval(oItem.timer);
};