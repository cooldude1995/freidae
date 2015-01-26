var bgcount = 57;
function changebg() {
    if(document.URL=="http://localhost:4000/freidae/#home")
    {var num =  Math.ceil( Math.random() * bgcount );
    document.body.style.background = 'url(/freidae/data/backgrounds/BackgroundImage'+num+'.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundOrigin = 'border-box';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
    }   else if(document.URL=="http://localhost:4000/freidae/products/#prdct"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#C9B199';
        
    }   else if(document.URL=="http://localhost:4000/freidae/reach_us/#rchus"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#986665';
    }
}