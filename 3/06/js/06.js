document.getElementById('btn').onclick = function() {
    var con = document.getElementById('container');
    var str = '';
    var aColor = ['red', 'yellow', 'blue', 'green'];
    var corLen = aColor.length;
    for (var i = 0; i < 100; i++) {
        str += '<li class="aLi">' + i + '</li>';
    }
    con.innerHTML = str;
    var arrLi = document.getElementsByTagName('li');
    var len = arrLi.length;
    var left = 0;
    var top = 0;
    var color = 0;
    for (var j = 0; j < len; j++) {
        if (left >= 10) {
            left = 0;
            top++;
        }
        if (color >= corLen) {
            color = 0;
        }
        arrLi[j].style.left = 60 * left + 'px';
        arrLi[j].style.top = 60 * top + 'px';
        arrLi[j].style.backgroundColor = aColor[color];
        left++;
        color++;
    }
};