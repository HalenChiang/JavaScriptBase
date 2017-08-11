var oProList = document.getElementById('pro_list');
var aItem = oProList.getElementsByTagName('div');
var itemCon = document.getElementById('itemCon');
var total = document.getElementById('total');
for (var i = 0; i < aItem.length; i++) {
    btnEvent(aItem[i]);
}

function btnEvent(obj) {
    var a = obj.getElementsByTagName('a')[0];
    var remain = obj.getElementsByTagName('p')[1];
    var target = parseFloat(getStyle(obj, 'width'));
    var future = '',
        now = null,
        t = null,
        str = '';
    a.onclick = function() {
        clearInterval(obj.timer);
        future = new Date(obj.getElementsByTagName('input')[0].value);
        obj.timer = setInterval(function() {
            now = new Date();
            t = Math.floor((future - now) / 1000);
            if (t < 0) {
                clearInterval(obj.timer);
                shake(obj, 'left', 50, function() {
                    doMove(obj, 'top', 10, 100, target);
                    changeOpa(obj, 10, 0, 200, function() {
                        var ob = getTxt(obj);
                        var st = itemCon.innerHTML;
                        var totalM = parseFloat(total.getElementsByTagName('span')[0].innerText);
                        totalM += parseFloat(ob.price.split('￥')[1]);
                        st += '<tr><td>' + ob.name + '</td><td class="bold">' + ob.price + '</td><td><img src="' + ob.img + '"></td></tr>';
                        itemCon.innerHTML = st;
                        total.getElementsByTagName('span')[0].innerText = totalM;
                    });
                });
                return false;
            }
            str = '剩余' + getTime(t);
            remain.innerText = str;
        }, 1000);
    };
}

function getTxt(obj) {
    var aP = obj.getElementsByTagName('p');
    var ob = {};
    ob.img = aP[2].getElementsByTagName('img')[0].src;
    ob.name = aP[3].innerText;
    ob.price = aP[4].getElementsByTagName('span')[0].innerText;
    return ob;
}
console.log(parseFloat(getTxt(aItem[1]).price.split('￥')[1]));

function shake(obj, attr, frequency, callback) {
    clearInterval(obj.shake);
    var arr = getArr(20);
    var num = 0;
    var currentAttr = parseFloat(getStyle(obj, attr));
    obj.shake = setInterval(function() {
        obj.style[attr] = currentAttr + arr[num] + 'px';
        num++;
        if (num >= arr.length) {
            clearInterval(obj.shake);
            callback && callback();
        }
    }, frequency);
}

function changeOpa(obj, dir, target, frequency, callback) {
    clearInterval(obj.opa);
    dir = (getStyle(obj, 'opacity') * 100) < target ? dir : -dir;
    obj.opa = setInterval(function() {
        var currentAttr = (getStyle(obj, 'opacity') * 100);
        var speed = currentAttr + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style.opacity = speed / 100;
        obj.style.filter = 'alpha(opacity = ' + speed + ')';
        if (speed === target) {
            clearInterval(obj.opa);
            callback && callback();
        }
    }, frequency);
}

function doMove(obj, attr, dir, frequency, target, callback) {
    clearInterval(obj.move);
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir;
    obj.move = setInterval(function() {
        var currentAttr = parseFloat(getStyle(obj, attr));
        var speed = currentAttr + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed === target) {
            clearInterval(obj.move);
            callback && callback();
        }
    }, frequency);
}

function getArr(len) {
    var arr = [];
    for (var i = len; i >= 1; i--) {
        arr.push(i, -i);
    }
    arr.push(0);
    return arr;
}

function getTime(t) {
    return (Math.floor(t / 86400) < 10 ? '0' + Math.floor(t / 86400) : Math.floor(t / 86400)) + '天' +
        (Math.floor(t % 86400 / 3600) < 10 ? '0' + Math.floor(t % 86400 / 3600) : Math.floor(t % 86400 / 3600)) + '小时' +
        (Math.floor(t % 86400 % 3600 / 60) < 10 ? '0' + Math.floor(t % 86400 % 3600 / 60) : Math.floor(t % 86400 % 3600 / 60)) + '分' +
        (Math.floor(t % 60) < 10 ? '0' + Math.floor(t % 60) : Math.floor(t % 60)) + '秒';
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}