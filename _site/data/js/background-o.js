var bgcount_lg = 44;
var bgcount_sm = 13;
function changebg() {
    if(location.pathname=="/freidae/#home"||location.pathname=="/freidae/")
    {
        if(screen.width>991)
        {
            var num =  Math.ceil( Math.random() * bgcount_lg );
            document.body.style.background = 'url(/freidae/data/img/backgrounds_lg/BackgroundImage'+num+'.jpg)';
        }
        else
        {
            var num =  Math.ceil( Math.random() * bgcount_sm );
            document.body.style.background = 'url(/freidae/data/img/backgrounds_sm/BackgroundImage'+num+'.jpg)';
        }
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
    }   else if(location.pathname=="/freidae/about_us/#abts"||location.pathname=="/freidae/about_us/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = 'rgba(0,51,102,0.9)';
    }   else if(location.pathname=="/freidae/jobs/#jbs"||location.pathname=="/freidae/jobs/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#9999cc';
    }   else if(location.pathname=="/freidae/privacy/#prvcy"||location.pathname=="/freidae/privacy/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#ffff99';
    }   else if(location.pathname=="/freidae/help/#hlp"||location.pathname=="/freidae/help/"){
        document.body.style.background = 'url(#)';
         document.body.style.backgroundColor = '#3366ff';
    }
}
    $('document').ready(function(){
        changebg();
    });