var oTab = document.getElementById('tabs');
var aTab = oTab.getElementsByTagName('p');
var newPro = document.getElementById('newPro');
var left = document.getElementById('left');
var right = document.getElementById('right');
var bigImg = left.getElementsByTagName('img')[0];
var bigP = left.getElementsByTagName('p')[0];
var oImg = document.getElementById('images');
var page = document.getElementById('page');
var aLi = oImg.getElementsByTagName('li');
var pre = null;
var next = null;

var datas = [{
    id: 1,
    src: 'images/big1.png',
    content: '图赏图赏图赏图赏',
    list: [{
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small3.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small4.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small1.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small4.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small1.png'
    }, ],
    length: 9
}, {
    id: 2,
    src: 'images/big2.png',
    content: '三星S5570/I559图赏',
    list: [{
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small3.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small4.png'
    }, {
        title: '宾得推RS1500超级英雄限量版',
        content: '日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司日本宾得公司',
        src: 'images/small2.png'
    }],
    length: 4
}];


function initPages(id, datas, pageNums) {
    var st = '<li><a id="pre" href="javascript:;" class="pre"></a></li>';
    var nums = Math.ceil(datas.length / pageNums);
    for (var i = 0; i < nums; i++) {
        st += '<li><a href="javascript:;" class="dot"></a></li>';
    }
    st += '<li><a id="next" href="javascript:;" class="next"></a></li>';
    id.innerHTML = st;
    id.getElementsByTagName('li')[1].getElementsByTagName('a')[0].className = 'dot activedot';
    pre = document.getElementById('pre');
    next = document.getElementById('next');
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

function initContent(id, datas, pageNums) {
    var st = '';
    var width = parseFloat(getStyle(right, 'width'));
    id.style.width = Math.ceil(datas.length / pageNums) * width + 'px';
    var lists = datas.list;
    for (var i = 0; i < datas.length; i++) {
        st += '<li>';
        st += '<img src="' + lists[i].src + '">';
        st += '<p class="title">' + lists[i].title + '</p>';
        st += '<p class="intro">' + lists[i].content + '</p>';
        st += '</li>';
    }
    bigImg.src = datas.src;
    bigP.innerText = datas.content;
    id.innerHTML = st;
    doMove(id, 'left', 500, 14, 0);
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
            callback && callback();
        }
    }, frequency);
}

function btnEvent() {
    var num = 0;
    var maxLeft = parseFloat(getStyle(right, 'width')) - parseFloat(getStyle(oImg, 'width'));
    var dis = parseFloat(getStyle(right, 'width'));
    pre.onclick = function() {
        var currentLeft = parseFloat(getStyle(oImg, 'left'));
        if (currentLeft >= 0) {
            alert('已经是第一条！');
            num = 0;
            return false;
        }
        console.log(dis * (num + 1));
        doMove(oImg, 'left', 100, 50, dis * (num + 1));
        num++;
    };
    next.onclick = function() {
        var currentLeft = parseFloat(getStyle(oImg, 'left'));
        if (currentLeft <= maxLeft) {
            alert('已经是第最后一条！');
            num = maxLeft / dis;
            return false;
        }
        doMove(oImg, 'left', 100, 50, dis * (num - 1));
        num--;
    };
}

function initBtn() {
    var datalist = null;
    for (var i = 0; i < aTab.length; i++) {
        aTab[i].index = i;
        aTab[i].onclick = function() {
            clearClass();
            this.className = 'btn active';
            datalist = datas[this.index];
            initPages(page, datalist, 3);
            initContent(oImg, datalist, 3);
            btnEvent();
        };
    }
}

function clearClass() {
    for (var i = 0; i < aTab.length; i++) {
        aTab[i].className = 'btn';
    }
}

function init() {
    initPages(page, datas[0], 3);
    initContent(oImg, datas[0], 3);
    initBtn();
    btnEvent();
}
init();