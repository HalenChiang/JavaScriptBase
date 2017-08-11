var imgUrl = ['images/big.png', 'images/big2.png', 'images/big.png', 'images/big2.png', 'images/big.png', 'images/big2.png', ];
var tab_container = document.getElementById('tab_container');
var tab = document.getElementById('tab');
var aTabLi = tab.getElementsByTagName('li');
var aLi = tab_container.getElementsByTagName('li');
var tab_div = tab_container.getElementsByTagName('div');
var img = document.getElementById('img');
var len = aLi.length;
var num = 0;
var timer = null;
var n = 0;

var clearAll = function(ele) {
    for (var i = 0; i < ele.length; i++) {
        ele[i].className = '';
    }
};

function autoPlay() {
    timer = setInterval(function() {
        clearAll(aLi);
        if (n >= len / 2) {
            tab_div[0].className = 'tab_list';
            tab_div[1].className = 'active';
            aTabLi[0].className = '';
            aTabLi[1].className = 'blue';
        } else {
            tab_div[0].className = 'active';
            tab_div[1].className = 'tab_list';
            aTabLi[0].className = 'blue';
            aTabLi[1].className = '';
        }
        aLi[n].className = 'blue';
        img.src = imgUrl[n];
        n++;
        n %= len;
    }, 500);
}
autoPlay();