var item = document.getElementById('item');
var aLi = item.getElementsByTagName('li');
for (var i = 0; i < aLi.length; i++) {
    fn1(aLi[i]);
}

function fn1(aLi) {
    var a = aLi.getElementsByTagName('a')[0];
    var aInput = aLi.getElementsByTagName('input')[0];
    var cancel = document.createElement('a');
    cancel.className = 'cancel';
    cancel.innerText = '取消';
    var flag = 1;
    var cancelflag = 1;
    var text = '';
    a.onclick = function() {
        if (flag) {
            _this = this;
            aInput.disabled = false;
            if (cancelflag === 2) {
                aInput.value = text;
            }
            text = aInput.value;
            aInput.className = 'editTxt';
            _this.innerText = '保存';
            _this.className = 'save';
            aLi.appendChild(cancel);
            flag = 0;
        } else {
            _this = this;
            aInput.disabled = true;
            aInput.className = '';
            _this.innerText = '';
            _this.className = 'pan';
            aLi.removeChild(cancel);
            flag = 1;
            cancelflag = 1;
        }
    };
    cancel.onclick = function() {
        if (cancelflag) {
            _this = this;
            aInput.val = text;
            aInput.disabled = true;
            aInput.className = '';
            a.innerText = '';
            a.className = 'pan';
            aLi.removeChild(cancel);
            flag = 1;
            cancelflag = 2;
        }
    };
}