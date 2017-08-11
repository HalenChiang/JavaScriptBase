var oSend = document.getElementById('send'),
    oDiaText = document.getElementById('diaText'),
    oDiaImg = document.getElementById('diaImg'),
    oDia = document.getElementById('content');
oSend.onclick = function() {
    var belongs = oDiaImg.getAttribute('data-belongs'),
        diaImg = oDiaImg.src,
        diaText = oDiaText.value,
        str = oDia.innerHTML;
    if (belongs === 'one') {
        str += '<div class="dialogA dia"><span>' + diaText + '</span><img src="' + diaImg + '" /></div>';
    } else {
        str += '<div class="dialogB dia"><img src="' + diaImg + '" /><span>' + diaText + '</span></div>';
    }
    if (diaText == '') {
        alert('请输入内容~');
    } else {
        oDia.innerHTML = str;
        oDiaText.value = '';
        oDia.scrollTop = oDia.scrollHeight;
    }
};
oDiaImg.onclick = function() {
    var thisBelongs = this.getAttribute('data-belongs');
    if (thisBelongs === 'one') {
        this.src = 'images/stars2.png';
        this.setAttribute('data-belongs', 'two');
    } else {
        this.src = 'images/stars1.png';
        this.setAttribute('data-belongs', 'one');
    }
};