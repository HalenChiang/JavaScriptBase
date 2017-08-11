var arr = ['600', '100px', 'abc' - 6, [], -98765, 34, -2, 0, '300', , function() {
    alert(1);
}, null, document, [], true, '200px' - 30, '23.45元', 5, Number('abc'), function() {
    alert(3);
}, 'xyz' - 90];

var numtext = document.getElementById('numtext');
var num = document.getElementById('num');
var cannum = document.getElementById('cannum');
var maxnum = document.getElementById('maxnum');
var nanIndex = document.getElementById('nanIndex');
var judge = document.getElementById('judge');
var text = document.getElementById('text');
var str = '';
var arrnum = [];
num.onclick = function() {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            if (!isNaN(arr[i]) && typeof arr[i] === 'number') {
                str += arr[i] + '\n';
            }
        }
    }
    numtext.innerHTML = str;
};

cannum.onclick = function() {
    str = '';
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) || parseInt(arr[i]) === 0) {
            str += arr[i] + '\n';
        }
    }
    numtext.innerHTML = str;
};
var max = -99999999999999999;
maxnum.onclick = function() {
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i])) {
            arrnum.push(parseFloat(arr[i]));
        }
    }
    for (var j = 0; j < arrnum.length; j++) {
        if (max < arrnum[j]) {
            max = arrnum[j];
        }
    }
    numtext.innerHTML = max;
};

nanIndex.onclick = function() {
    str = '';
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            str += i + '\n';
        }
    }
    numtext.innerHTML = str;
};

judge.onclick = function() {
    var txt = text.value;
    if (txt === '') {
        alert('1');
    }
    if (!txt.match('^[0-9]*$')) {
        alert('2');
    }
    var reg = '^[1-9][0-9]*$';
    if (!txt.match(reg)) {
        alert('3');
    }
    if (parseInt(txt) !== parseFloat(txt)) {
        alert(4);
    }
    if (!txt.match('^[1-9][0-9]{4,8}$')) {
        alert(5);
    }
};


/*
    1、找到arr里所有的数字：-98765, 34, -2, 0, 5
    2、找到可以转成数字的：'100px', -98765, 34, -2, 0, '300', '23.45元',  5 
    3、把转成数字以后，最大值判断出来：300
    4、把 NaN 所在的位置找出来：1 14 17  19
*/

/*
<br />
1、有没有输入<br />
2、输入的是不是数字<br />
3、不能有0在前面<br />
4、不能是小数<br />
5、输入的数字必须在5位以上、10位以内<br />
 */