var pre = document.getElementById('pre');
var next = document.getElementById('next');
var bigImg = document.getElementById('bigImg');
var smallImg = document.getElementById('smallImg');
var bigTxt = document.getElementById('bigTxt');
var smallTxt = document.getElementById('smallTxt');
var bigNum = document.getElementById('bigNum');
var smallNum = document.getElementById('smallNum');
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
    src: 'images/big1.png'
}];
var arrSmall = [{
    id: 0,
    src: 'images/small.png'
}, {
    id: 1,
    src: 'images/small2.png'
}, {
    id: 2,
    src: 'images/small1.png'
}];
var bigLen = arrBig.length;
var smallLen = arrSmall.length;
var bignum = 0;
var smallnum = 0;
var btnFlag = 'preteam';
var init = function() {
    bigImg.src = arrBig[bignum].src;
    smallImg.src = arrSmall[smallnum].src;
    bigTxt.innerText = '第一组第' + (bignum + 1) + '张';
    bigNum.innerText = (bignum + 1) + '/' + bigLen;
    smallTxt.innerText = '第二组第' + (smallnum + 1) + '张';
    smallNum.innerText = (smallnum + 1) + '/' + smallLen;
};
var btnEvent = function() {
    if (btnFlag === 'nextteam') {
        nextBigBtn();
        nextSmallBtn();
    } else if (btnFlag === 'preteam') {
        preBigBtn();
        preSmallBtn();
    } else if (btnFlag === 'nextsmall') {
        nextSmallBtn();
    } else {
        nextBigBtn();
    }
    init();
};
var nextBigBtn = function() {
    bignum++;
    if (bignum >= bigLen) {
        bignum = 0;
    }
};
var nextSmallBtn = function() {
    smallnum++;
    if (smallnum >= smallLen) {
        smallnum = 0;
    }
};
var preBigBtn = function() {
    bignum--;
    if (bignum < 0) {
        bignum = bigLen - 1;
    }
};
var preSmallBtn = function() {
    smallnum--;
    if (smallnum < 0) {
        smallnum = smallLen - 1;
    }
};
pre.onclick = function() {
    btnFlag = 'preteam';
    btnEvent();
};
next.onclick = function() {
    btnFlag = 'nextteam';
    btnEvent();
};
bigImg.onclick = function() {
    btnFlag = 'nextbig';
    btnEvent();
};
smallImg.onclick = function() {
    btnFlag = 'nextsmall';
    btnEvent();
};
init();