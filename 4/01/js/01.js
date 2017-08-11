var item = document.getElementById('item');
var title = item.getElementsByTagName('h2');
var secItem = item.getElementsByTagName('ul');
var aLi = null;
var arrLi = [];
var openItem = -1;
var clickLi = -1;
for (var i = 0; i < title.length; i++) {
    title[i].index = i;
    title[i].onclick = function() {
        if (this.className === '') {
            this.className = 'active';
            secItem[this.index].style.display = 'block';
        } else {
            this.className = '';
            secItem[this.index].style.display = 'none';
        }
        if (openItem !== -1 && openItem !== this.index) {
            title[openItem].className = '';
            secItem[openItem].style.display = 'none';
        }
        openItem = this.index;
    };
}
for (var j = 0; j < secItem.length; j++) {
    aLi = secItem[j].getElementsByTagName('li');
    for (var k = 0; k < aLi.length; k++) {
        arrLi.push(aLi[k]);
    }
}
for (var l = 0; l < arrLi.length; l++) {
    arrLi[l].index = l;
    arrLi[l].onclick = function() {
        if (this.className === '') {
            this.className = 'activeLi';
        } else {
            this.className = '';
        }
        if (clickLi !== -1 && clickLi !== this.index) {
            arrLi[clickLi].className = '';
        }
        clickLi = this.index;
    };
}