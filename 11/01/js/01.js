var searchTxt = document.getElementById('searchTxt');
var changeTxt = document.getElementById('changeTxt');
var change = document.getElementById('change');
var con = document.getElementById('con');

change.onclick = function() {
    var sTxt = searchTxt.value;
    var cTxt = changeTxt.value;
    var conTxt = con.innerHTML;
    if (!sTxt) return;
    var newTxt = conTxt.split(sTxt).join('<span class="hightLight">' + cTxt + '</span>');
    con.innerHTML = newTxt;
};

$(document).bind('click', function(e) {
    var e = e || window.event; //浏览器兼容性
    var elem = e.target || e.srcElement;
    while (elem) { //循环判断至跟节点，防止点击的是div子元素
        if (elem.id && elem.id == 'test') {
            return;
        }
        elem = elem.parentNode;
    }

    $('#test').css('display', 'none'); //点击的不是div或其子元素
});