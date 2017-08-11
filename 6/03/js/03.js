var oMenu = document.getElementById('tab_menu');
var oContent = document.getElementById('tab_content');
var menuList = oMenu.getElementsByTagName('li');
var contentList = oContent.getElementsByTagName('ul');
var day = document.getElementById('day');
var week = document.getElementById('week');
var all = document.getElementById('all');
for (var i = 0; i < menuList.length; i++) {
    menuList[i].index = i;
    menuList[i].onclick = function() {
        var _this = this;
        for (var j = 0; j < menuList.length; j++) {
            menuList[j].className = '';
            contentList[j].style.display = 'none';
        }
        _this.className = 'active';
        contentList[_this.index].style.display = 'block';
    };
}
for (var k = 0; k < contentList.length; k++) {
    fn(contentList[k]);
}

function fn(ul) {
    var li = ul.getElementsByTagName('li');
    for (var m = 0; m < li.length; m++) {
        li[m].onmouseover = function() {
            if (this.getElementsByTagName('p').length) {
                var p = this.getElementsByTagName('p');
                p[0].style.display = 'none';
                p[1].style.display = 'block';
            }
        };
        li[m].onmouseout = function() {
            if (this.getElementsByTagName('p').length) {
                var p = this.getElementsByTagName('p');
                p[0].style.display = 'block';
                p[1].style.display = 'none';
            }
        };
    }
}