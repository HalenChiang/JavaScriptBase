var arrUrl = ['images/big1.png', 'images/big.png', 'images/big1.png', 'images/big.png', 'images/big1.png', 'images/big.png',
    'images/big1.png', 'images/big.png', 'images/big1.png', 'images/big.png', 'images/big1.png', 'images/big.png',
    'images/big1.png', 'images/big.png'
];
var num = 0;
var aLi = document.getElementsByTagName('li');
var img = document.getElementById('img');
var timer = null;
var n = 0;
var m = 0;
var clearAll = function() {
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].className = '';
    }
};

function autoPlay() {
    timer = setInterval(function() {
        clearAll();
        aLi[n].className = 'active';
        img.src = arrUrl[m];
        m++;
        m %= arrUrl.length;
        n++;
        n %= aLi.length;
    }, 500);
}
autoPlay();

for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function() {
        var _this = this;
        clearInterval(timer);
        clearAll();
        _this.className = 'active';
        img.src = arrUrl[_this.index];
    };
    aLi[i].onmouseout = function() {
        n = this.index; //从当前位置重新开始循环
        m = this.index;
        autoPlay();
    };
}
img.onmouseover = function() {
    clearInterval(timer);
};
img.onmouseout = function() {
    autoPlay();
};