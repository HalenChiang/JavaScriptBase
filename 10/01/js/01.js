var time = document.getElementById('time');
var aItem = time.getElementsByTagName('div');
var aImg = time.getElementsByTagName('img');


var item = deleteArr(aItem, [2, 5]);
initContent();

function initContent() {
    //初始化时间
    var openDate = getTime();
    for (var k = 0; k < openDate.length; k++) {
        item[k].getElementsByTagName('img')[0].src = 'images/' + openDate[k] + '.jpg';
    }
    for (var i = 0; i < item.length; i++) {
        item[i].timer = setInterval(function() {
            var lastTime = getTime(); //上一秒
            var flag = 1;
            setTimeout(function() {
                var currentDate = getTime();
                for (var j = 0; j < currentDate.length; j++) {
                    item.index = j;
                    if (currentDate[j] !== lastTime[j]) {
                        item[j].getElementsByTagName('img')[1].src = 'images/' + currentDate[j] + '.jpg';
                        doMove(item[j], 'top', 10, 50, -70, function(obj) {
                            obj.getElementsByTagName('img')[0].src = obj.getElementsByTagName('img')[1].src;
                            obj.style.top = 0 + 'px';
                        });
                    }
                }
            }, 1000);
        }, 1000);
    }

}

function getTime() {
    var date = new Date();
    return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + '' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '' +
        (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
}

function doMove(obj, attr, dir, frequency, target, callback) {
    clearInterval(obj.timer);
    dir = parseFloat(getStyle(obj, attr)) < target ? dir : -dir;
    obj.timer = setInterval(function() {
        var speed = parseFloat(getStyle(obj, attr)) + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed === target) {
            clearInterval(obj.timer);
            callback && callback(obj);
        }
    }, frequency);
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function deleteArr(arr, aIndex) {
    var array = [];
    var flag = 1;
    for (var i = 0; i < arr.length; i++) {
        flag = 1;
        for (var j = 0; j < aIndex.length; j++) {
            if (i === aIndex[j]) {
                flag = 0;
            }
        }
        if (flag) {
            array.push(arr[i]);
        }
    }
    return array;
}