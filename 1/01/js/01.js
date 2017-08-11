var set = document.getElementById('set'),
    bgColor = document.getElementById('bgColor'),
    wid = document.getElementById('wid'),
    hei = document.getElementById('hei'),
    box = document.getElementById('box'),
    reset = document.getElementById('reset'),
    submit = document.getElementById('submit'),
    modal = document.getElementById('modal');
set.onclick = function() {
    modal.style.visibility = 'visible';
};
bgColor.onclick = function(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == 'a') {
        var color = target.getAttribute('data-color');
        box.style.background = color;
    }
};
wid.onclick = function(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == 'a') {
        var width = target.getAttribute('data-width');
        box.style.width = width + 'px';
    }
};
hei.onclick = function(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == 'a') {
        var height = target.getAttribute('data-height');
        box.style.height = height + 'px';
    }
};
reset.onclick = function() {
    box.style.height = '100px';
    box.style.width = '100px';
    box.style.background = 'transparent';
};
submit.onclick = function() {
    modal.style.visibility = 'hidden';
};