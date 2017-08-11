document.getElementById('btn').onclick = function() {
    var con = document.getElementById('container');
    var conClass = con.className;
    var str = '';
    for (var i = 0; i < 5; i++) {
        str += '<li class="aLi">' + i + '</li>';
    }
    con.innerHTML = str;
    var arrLi = document.getElementsByTagName('li');
    var len = arrLi.length;
    var left = 0;
    var top = 0;
    if (conClass === 'one') {
        left = 0;
        top = 2;
        for (var j = 0; j < len; j++) {
            arrLi[j].style.left = 50 * left + 'px';
            arrLi[j].style.top = 50 * top + 'px';
            left++;
            if (left <= 2) {
                top--;
            } else {
                top++;
            }
        }
        con.className = 'two';
    } else if (conClass === 'two') {
        for (var j = 0; j < len; j++) {
            arrLi[j].style.left = 50 * left + 'px';
            arrLi[j].style.top = 50 * top + 'px';
            top++;
            if (top > 2) {
                left--;
            } else {
                left++;
            }
        }
        con.className = 'three';
    } else if (conClass === 'three') {
        for (var j = 0; j < len; j++) {
            arrLi[j].style.left = 50 * left + 'px';
            arrLi[j].style.top = 50 * top + 'px';
            left++;
            if (left <= 2) {
                top++;
            } else {
                top--;
            }
        }
        con.className = 'four';
    } else {
        left = 2;
        top = 0;
        for (var j = 0; j < len; j++) {
            arrLi[j].style.left = 50 * left + 'px';
            arrLi[j].style.top = 50 * top + 'px';
            top++;
            if (top <= 2) {
                left--;
            } else {
                left++;
            }
        }
        con.className = 'one';
    }
};