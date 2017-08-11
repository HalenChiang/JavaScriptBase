var oStar = document.getElementById('star');
var aLi = oStar.getElementsByTagName('li');
var oTips = document.getElementById('tips');
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    moveBtn(aLi[i]);
}

var num = -1;

function moveBtn(li) {
    li.onmouseover = function() {
        for (var j = 0; j < aLi.length; j++) {
            var aImg = aLi[j].getElementsByTagName('img')[0];
            aImg.src = 'images/darkstar.png';
        }
        for (var i = 0; i <= this.index; i++) {
            var aImg = aLi[i].getElementsByTagName('img')[0];
            if (this.index < 2) {
                aImg.src = 'images/dark.png';
            } else {
                aImg.src = 'images/light.png';
            }
        }
        txt(this.index);
    };
    li.onmouseout = function() {
        for (var i = 0; i < aLi.length; i++) {
            var img = aLi[i].getElementsByTagName('img')[0];
            img.src = 'images/darkstar.png';
        }
        for (var j = 0; j <= num; j++) {
            var aImg = aLi[j].getElementsByTagName('img')[0];
            if (num < 2) {
                aImg.src = 'images/dark.png';
            } else {
                aImg.src = 'images/light.png';
            }
        }
        num !== -1 ? num : 0;
        txt(num);
    };
    li.onclick = function() {
        for (var i = 0; i <= this.index; i++) {
            var aImg = aLi[i].getElementsByTagName('img')[0];
            if (this.index < 2) {
                aImg.src = 'images/dark.png';
            } else {
                aImg.src = 'images/light.png';
            }
        }
        num = this.index;
        txt(num);
    };
    var txt = function(n) {
        var str = '';
        switch (n) {
            case 0:
                str = '很差';
                break;
            case 1:
                str = '较差';
                break;
            case 2:
                str = '还行';
                break;
            case 3:
                str = '推荐';
                break;
            case 4:
                str = '力荐';
                break;
            default:
                str = '<img src="images/tips.png">';
        }
        oTips.innerHTML = str;
    };
}