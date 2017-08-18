var left = document.getElementById('left');
var right = document.getElementById('right');
var page = document.getElementById('page');
var scroll = document.getElementById('scroll');
var change = document.getElementById('change');
var leftP = left.getElementsByTagName('p')[0];
var rightP = right.getElementsByTagName('p')[0];
var aLi = scroll.getElementsByTagName('li');
var total = 0;
var ind = 0;
var timer = null;
change.onclick = function() {
    var num = 0;
    clearInterval(timer);
    var text = leftP.innerText;
    var newTxt = '';
    total = text.split('').length;
    if (total) {
        rightP.innerText = '';
        timer = setInterval(function() {
            clearColor(aLi, '#e7a521');
            aLi[num % aLi.length].style.backgroundColor = 'red';
            leftP.innerText = text.substring(num + 1);
            rightP.innerText = text.substring(0, num + 1);
            page.innerText = (num + 1) + '/' + total;
            num++;
            if (num === total) {
                clearColor(aLi, '#e7a521');
                clearInterval(timer);
            }
        }, 50);
        opacity(this, 10, 500, 20);
    }
};

function clearColor(obj, color) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = color;
    }
}

function opacity(obj, dir, frequency, target) {
    dir = getStyle(obj, 'opacity') * 100 < target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var speed = (getStyle(obj, 'opacity') * 100) + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style.opacity = speed / 100;
        obj.style.filter = 'alpha(opacity=' + speed + ')';
        if (speed === target) {
            clearInterval(obj.timer);
        }
    }, frequency);
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr];
}