var datas = [{
    id: 1,
    title: '最热团购',
    type: 0,
    children: [{
        id: 1,
        title: '雅诗兰黛完美修复唇膏（蓝色花纹管管体）3.6g',
        img: '../images/smallimg.png',
        discount: 2.8,
        price: '../images/price.png',
        people: 1518
    }, {
        id: 2,
        title: '雅诗兰黛完漾唇膏#01 3.8g',
        img: '../images/smallimg.png',
        discount: 2.8,
        price: '../images/price.png',
        people: 1518
    }, {
        id: 3,
        title: '倩碧卓越润肤乳 125ml',
        img: '../images/smallimg.png',
        discount: 2.8,
        price: '../images/price.png',
        people: 1518
    }]
}, {
    id: 2,
    title: '商品特惠',
    type: 1,
    children: [{
        id: 1,
        title: '雅诗兰黛完美修复唇膏（蓝色花纹管管体）3.6g',
        img: 'images/bigimg.png'
    }, {
        id: 2,
        title: '雅诗兰黛完漾唇膏#01 3.8g',
        img: 'images/bigimg.png'
    }, {
        id: 3,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }, {
        id: 4,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }]
}, {
    id: 3,
    title: '名品推荐',
    type: 1,
    children: [{
        id: 1,
        title: '雅诗兰黛完美修复唇膏（蓝色花纹管管体）3.6g',
        img: 'images/bigimg.png'
    }, {
        id: 2,
        title: '雅诗兰黛完漾唇膏#01 3.8g',
        img: 'images/bigimg.png'
    }, {
        id: 3,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }, {
        id: 4,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }, {
        id: 5,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }]
}, {
    id: 4,
    title: '缤纷活动',
    type: 1,
    children: [{
        id: 1,
        title: '雅诗兰黛完美修复唇膏（蓝色花纹管管体）3.6g',
        img: 'images/bigimg.png'
    }, {
        id: 2,
        title: '雅诗兰黛完漾唇膏#01 3.8g',
        img: 'images/bigimg.png'
    }, {
        id: 3,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }, {
        id: 4,
        title: '倩碧卓越润肤乳 125ml',
        img: 'images/bigimg.png'
    }]
}];
var oNav = document.getElementById('nav');
var aLi = oNav.getElementsByTagName('li');
var cont = document.getElementById('top');
for (var i = 0; i < aLi.length; i++) {
    fn1(aLi[i], i);
}

function fn1(li, i) {
    var a = li.getElementsByTagName('a')[0];
    a.index = i;
    var ostr = cont.innerHTML;
    a.onclick = function() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].getElementsByTagName('a')[0].className = "";
        }
        this.className = "active";
        var str = '';
        var datalist = datas[this.index];
        if (datalist.type) {
            str += '<div class="bigimg"><img src="' + datalist.children[0].img + '"></div>';
            cont.innerHTML = str;
        } else {
            cont.innerHTML = ostr;
        }

    };
}