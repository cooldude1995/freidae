var bgcount = 15;
function changebg() {
    var num =  Math.ceil( Math.random() * bgcount );
    document.body.style.background = 'url(/freidae/data/backgrounds/antarctic'+num+'.jpg)';
}