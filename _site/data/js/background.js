var bgcount = 57;
function changebg() {
    if(location.pathname=="/freidae/#home"||location.pathname=="/freidae/")
    {var num =  Math.ceil( Math.random() * bgcount );
    document.body.style.background = 'url(/freidae/data/backgrounds/BackgroundImage'+num+'.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundOrigin = 'border-box';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
    }   else if(location.pathname=="/freidae/products/#prdct"||location.pathname=="/freidae/products/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#C9B199';
        
    }   else if(location.pathname=="/freidae/reach_us/#rchus"||location.pathname=="/freidae/reach_us/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#986665';
    }   else if(location.pathname=="/freidae/pricing/#prcng"||location.pathname=="/freidae/pricing/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#cccccc';
    }
}