var oMain = document.getElementById('main');
var aDiv = oMain.getElementsByTagName('div');
var len = aDiv.length;
var timer = null;
var flag = 1;
var finished = 1;
var num = 0;

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function doMove(obj, attr, dir, target, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var speed = parseFloat(getStyle(obj, attr)) + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}

document.onclick = function() {
    if (!finished) {
        return false;
    }
    finished = 0;
    clearInterval(timer);
    timer = setInterval(function() {
        doMove(aDiv[num], 'top', 10, flag ? 500 : 0, num == len - 1 ? function() {
            finished = 1;
            flag = !flag;
        } : null);
        num++;
        if (num === len) {
            clearInterval(timer);
            num = 0;
        }
    }, 100);
};