var open = document.getElementById('open');
var nav = document.getElementById('nav');
var bottom = document.getElementById('bottom');
var tab = document.getElementById('tab');
var txt0 = document.getElementById('txt0');
var txt1 = document.getElementById('txt1');
var txt2 = document.getElementById('txt2');
var look = document.getElementById('look');
var change = document.getElementById('change');
var close = document.getElementById('close');
var win = document.getElementById('win');
var container = document.getElementById('container');
var aP = container.getElementsByTagName('p')[0];
var tabList = tab.getElementsByTagName('li');
var openUl = nav.getElementsByTagName('ul')[0];
var openList = openUl.getElementsByTagName('li');
var winDiv = bottom.getElementsByTagName('div');
var onOff = true;
var on = true;
open.onclick = function(e) {
    win.style.display = 'block';
    if (on) {
        openUl.style.display = 'block';
    } else {
        openUl.style.display = 'none';
    }
    on = !on;
    // e.stopPropagation();
};
var oldtxt = aP.innerHTML;
look.onclick = function() {
    var txt = txt0.value;
    if (!txt) {
        alert('请输入查找关键字');
    } else {
        aP.innerHTML = oldtxt.split(txt).join('<span class="hightLight">' + txt + '</span>');
    }
};
change.onclick = function() {
    var txtone = txt1.value;
    var txttwo = txt2.value;
    if (!txtone) {
        alert('请输入查找关键字');
        return;
    } else {
        aP.innerHTML = oldtxt.split(txtone).join(txttwo);
    }
};
document.onclick = function(ev) {
    var event = ev || window.event;
    var target = event.target || event.srcElement;
    while (target) {
        if (target.id && target.id.toLowerCase() == 'open') {
            return false;
        }
        // target = target.parentNode; //层层遍历上去，直到target = null; 结束while循环
        target = 0; //直接令target = 0; 结束循环
    }
    openUl.style.display = 'none';
};
close.onclick = function() {
    win.style.display = 'none';
};

for (var i = 0; i < openList.length; i++) {
    openList[i].index = i;
    openList[i].onclick = function() {
        hide(winDiv);
        isAvtive(tabList);
        isAvtive(openList);
        winDiv[this.index].style.display = 'block';
        tabList[this.index].className = 'active_nav';
        this.className = 'active_nav';
    };
}
for (var j = 0; j < tabList.length; j++) {
    tabList[j].index = j;
    tabList[j].onclick = function() {
        hide(winDiv);
        isAvtive(tabList);
        isAvtive(openList);
        winDiv[this.index].style.display = 'block';
        openList[this.index].className = 'active_nav';
        this.className = 'active_nav';
    };
}

function hide(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = 'none';
    }
}

function isAvtive(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].className = '';
    }
}

function show(obj) {
    if (onOff) {
        obj.style.display = 'block';
    } else {
        obj.style.display = 'none';
    }
    onOff = !onOff;
}