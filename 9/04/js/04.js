var oImg = document.getElementById('img');
var oIntro = document.getElementById('intro');
var aImg = oImg.getElementsByTagName('li');
var num = 0;
var n = 0;
var timer = null;
var arrIntro = [{
    id: 1,
    title: '《金蝉脱壳11》曝终极预告片 影片五大看点全揭秘',
    content: '史泰龙1说：“我和施瓦辛格两个人在私下反复研究我和施瓦辛格两我和施瓦辛格两个人在私下反究我和施瓦辛格两个人在私下反复研究”'
}, {
    id: 1,
    title: '《金蝉脱壳22》曝终极预告片 影片五大看点全揭秘',
    content: '史泰龙1说：“我和施瓦辛格两个人在私下反复研究我和施瓦辛格两我和施瓦辛格两个人在私下反究我和施瓦辛格两个人在私下反复研究”'
}, {
    id: 1,
    title: '《金蝉脱壳33》曝终极预告片 影片五大看点全揭秘',
    content: '史泰龙1说：“我和施瓦辛格两个人在私下反复研究我和施瓦辛格两我和施瓦辛格两个人在私下反究我和施瓦辛格两个人在私下反复研究”'
}];

doMove(oIntro, 'bottom', 20, 50, -80, function() { //隐藏介绍
    timer = setInterval(function() {
        var target = -500 * (num + 1);
        doMove(oImg, 'left', 20, 50, target, function() { //在图片切完的显示图片的4s内完成介绍的显示和隐藏切换
            doMove(oIntro, 'bottom', 10, 50, 0, function() { //显示介绍
                setTimeout(function() {
                    doMove(oIntro, 'bottom', 10, 50, -80); //隐藏介绍
                    if (num == aImg.length - 1) {
                        oImg.style.left = 0;
                        num = 0;
                    }
                }, 1000);
            });
        });
        num++;
    }, 4000);
});



function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function doMove(obj, attr, dir, frequency, target, callback) {
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
    }, frequency);
}