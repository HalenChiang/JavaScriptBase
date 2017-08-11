var aLi = document.getElementsByTagName('li');
var len = aLi.length;
for(var i = 0; i < len; i++){
    aLi[i].onmouseover = function(){
        this.getElementsByTagName('div')[1].style.display = 'block';
    };
    aLi[i].onmouseout = function(){
        this.getElementsByTagName('div')[1].style.display = 'none';
    };
}