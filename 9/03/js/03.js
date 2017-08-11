var oItem = document.getElementById('item');
var aLi = oItem.getElementsByTagName('li');
var len = aLi.length;
var num = 0;
var timer = null;

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function doMove(obj, attr, dir, target, callback) {
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var speed1 = parseFloat(getStyle(obj, attr)) + dir;
        if (speed1 > target && dir > 0 || speed1 < target && dir < 0) {
            speed1 = target;
        }
        obj.style[attr] = speed1 + 'px';
        if (speed1 === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 50);
}


function opacity(obj, step, target, frequency, callback) {
    step = parseFloat(getStyle(obj, 'opacity')) * 100 < target ? step : -step;
    clearInterval(obj.alpha);
    obj.alpha = setInterval(function() {
        var speed = parseFloat(getStyle(obj, 'opacity')) * 100 + step;
        if (speed > target && step > 0 || speed < target && step < 0) {
            speed = target;
        }
        obj.style.opacity = speed / 100;
        obj.style.filter = 'alpha(opacity=' + speed + ')';
        if (speed === target) {
            clearInterval(obj.alpha);
            callback && callback();
        }
    }, frequency);
}

oItem.onclick = function() {
    timer = setInterval(function() {
        doMove(aLi[num], 'top', 10, -150);
        opacity(aLi[num], 10, 0, 80);
        num++;
        if (num === len) {
            clearInterval(timer);
        }
    }, 100);

};