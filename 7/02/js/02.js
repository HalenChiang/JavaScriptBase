var oItem = document.getElementById('item');
var oItem_Btn = document.getElementById('item_btn');
var aBtn = oItem_Btn.getElementsByTagName('a');
var aCheck = oItem.getElementsByTagName('input');
var oAll = document.getElementById('all');
oAll.onclick = function() {
    if (this.checked) {
        for (var i = 0; i < aCheck.length; i++) {
            aCheck[i].checked = true;
        }
        BtnActive(1);
    } else {
        for (var j = 0; j < aCheck.length; j++) {
            aCheck[j].checked = false;
        }
        BtnActive(0);
    }
};
var aCheckFn = function() {
    for (var i = 0; i < aCheck.length; i++) {
        aCheck[i].onclick = function() {
            var disableFlag = 0;
            var allchoose = 0;
            if (!this.checked) {
                oAll.checked = false;
            }
            for (var j = 0; j < aCheck.length; j++) {
                if (aCheck[j].checked) {
                    allchoose++;
                } else {
                    disableFlag++;
                }
            }
            if (allchoose) {
                BtnActive(1);
                if (allchoose === aCheck.length) {
                    oAll.checked = true;
                }
            }
            if (disableFlag === aCheck.length) {
                BtnActive(0);
            }
        };
    }

};
var BtnActive = function(flagBtn) {
    if (flagBtn) {
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].className = 'active';
        }
    } else {
        for (var j = 0; j < aBtn.length; j++) {
            aBtn[j].className = '';
        }
    }

};
aCheckFn();