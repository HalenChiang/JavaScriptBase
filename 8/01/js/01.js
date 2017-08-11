var oItem = document.getElementById('item');
var aLi = oItem.getElementsByTagName('li');
var arrLi = [];
// var itemList = [];
// var timer = null;
for (var i = 0; i < aLi.length; i++) {
    if (aLi[i].className === 'list') {
        arrLi.push(aLi[i]);
        // itemList.push(aLi[i].getElementsByTagName('ul')[0]);
    }
}


// for (var k = 0; k < itemList.length; k++) {
// itemList[k].onmouseover = function() {
//     clearTimeout(itemList[k].timer);
//     this.style.display = 'block';
// };
// itemList[k].onmouseoout = function() {
//     clearTimeout(timer);
//     this.style.display = 'none';
// };
// }

for (var i = 0; i < arrLi.length; i++) {
    arrLi[i].onmouseover = function() {
        var oUl = this.getElementsByTagName('ul')[0];
        clearTimeout(oUl.timer); //由于冒泡，会触发li的onmouseout事件，此时清除onmouseout的定时器（display:none的作用就不会再出现）
        oUl.style.display = 'block';
    };
    arrLi[i].onmouseout = function() {
        var oUl = this.getElementsByTagName('ul')[0];
        //timer需要区分，多个DOM对象，不能共用一个timer，不然会出现从一个li移到另一个li时timer无法清除
        clearTimeout(oUl.timer);
        oUl.timer = setTimeout(function() {
            oUl.style.display = 'none';
        }, 100);
        // oUl.onmouseover = function() {
        //     clearTimeout(oUl.timer); // 这里清楚定时器就不好使，这是为什么？？？求解
        // };
    };
}