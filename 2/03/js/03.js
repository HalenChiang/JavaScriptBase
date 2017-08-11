var prev = document.getElementById('prev');
var next = document.getElementById('next');
var img = document.getElementById('img');
var span1 = document.getElementById('span1');
var text = document.getElementById('text');
var loop = document.getElementById('loop');
var order = document.getElementById('order');
var choice = document.getElementById('choice');
var num = 0;
var arr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
var textArr = ['美少女战士', '机器人一号', '性感美少女', '古装美少女'];
var choiceArr = ['图片可从最后一张跳转到第一张循环切换', '图片只能到最后一张或第一张切换'];
loop.onclick = function() {
    choice.innerHTML = choiceArr[0];
    choice.className = 'loop';
};
order.onclick = function() {
    choice.innerHTML = choiceArr[1];
    choice.className = 'order';
};
var init = function() {
    span1.innerHTML = num + 1 + ' / ' + arr.length;
    text.innerHTML = textArr[num];
    img.src = arr[num];
};
prev.onclick = function() {
    var thisChoice = choice.className;
    num--;
    if (num < 0) {
        if (thisChoice == 'loop') {
            num = arr.length - 1;
        } else {
            alert('这是第一张图片！');
            num = 0;
            return false;
        }
    }
    init();
};
next.onclick = function() {
    var thisChoice = choice.className;
    num++;
    if (num >= arr.length) {
        if (thisChoice == 'loop') {
            num = 0;
        } else {
            alert('这是最后一张图片！');
            num = arr.length - 1;
            return false;
        }
    }
    init();
};
init();

////////////////////////////////////////////////////
var container = document.getElementById('container');
var timer = null;
container.onmouseover = function() {
    clearInterval(timer);
};
container.onmouseout = function() {
    autoPlay();
};

function autoPlay() {
    timer = setInterval(function() {
        init();
        num++;
        num %= arr.length;
    }, 500);
}

setTimeout(autoPlay(), 1000);



///////////////////////////////////////////////////