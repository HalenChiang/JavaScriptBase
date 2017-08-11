var oItem = document.getElementById('item');
var aLi = oItem.getElementsByTagName('li');

function getArr() {
    var arr = [];
    for (var i = 20; i > 0; i -= 2) {
        arr.push(i, -i);
    }
    arr.push(0);
    return arr;
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function getPos(obj, attr) {
    var arrPos = [];
    for (var i = 0; i < obj.length; i++) {
        arrPos.push(parseFloat(getStyle(obj[i], attr)));
    }
    return arrPos;
}

function shake(obj, attr, pos, callback) {
    var num = 0;
    var arr = getArr();
    clearInterval(obj.style);
    obj.timer = setInterval(function() {
        obj.style[attr] = pos + arr[num] + 'px';
        num++;
        if (num == arr.length) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 50);
}


for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function() {
        var pos = getPos(this.index);
        shake(this, 'top', pos);
    };
}