var pre = document.getElementById('pre');
var next = document.getElementById('next');
var bigImg = document.getElementById('bigImg');
var small = document.getElementById('small');
var aLi = document.getElementsByTagName('li');
var aP = small.getElementsByTagName('p');
var len = aP.length;
var arrImg = [];
var arrBig = [{
    id: 0,
    src: 'images/big.png'
}, {
    id: 1,
    src: 'images/big2.png'
}, {
    id: 2,
    src: 'images/big3.png'
}, {
    id: 3,
    src: 'images/big4.png'
}, {
    id: 4,
    src: 'images/big5.png'
}, ];
var arrSmall = [{
    id: 0,
    src: 'images/small.png'
}, {
    id: 1,
    src: 'images/small2.png'
}, {
    id: 2,
    src: 'images/small3.png'
}, {
    id: 3,
    src: 'images/small4.png'
}, {
    id: 4,
    src: 'images/small5.png'
}, ];
var num = 0;
var init = function() {
    bigImg.src = arrBig[num].src;
};
init();
pre.onclick = function() {
    num--;
    if (num < 0) {
        num = 0;
        return false;
    } else {
        init();
    }
};
next.onclick = function() {
    num++;
    if (num >= arrBig.length) {
        num = arrBig.length - 1;
        return false;
    } else {
        init();
    }
};
for (var i = 0; i < len; i++) {
    arrImg.push(aP[i].getElementsByTagName('img')[0]);
}
for (var j = 0; j < aLi.length; j++) {
    aLi[j].index = j;
    aLi[j].onmouseover = function() {
        var _index = this.index;
        arrImg[_index].src = arrSmall[_index].src;
    };
    aLi[j].onmouseout = function() {
        arrImg[this.index].src = "";
    };
    aLi[j].onclick = function() {
        num = this.index;
        init();
    };
}