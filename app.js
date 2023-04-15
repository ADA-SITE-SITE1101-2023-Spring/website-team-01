function increasefont(){
    var text = document.getElementById("JavascriptImplement")
    var size =  window.getComputedStyle(text, null).getPropertyValue('font-size');
    var fontsize = parseInt(size) + 2;
    text.style.fontSize = fontsize + 'px';
}

function decreasefont(){
    var text = document.getElementById("JavascriptImplement")
    var size =  window.getComputedStyle(text, null).getPropertyValue('font-size');
    let fontsize = parseInt(size) - 2;
    text.style.fontSize = fontsize + 'px';
}


