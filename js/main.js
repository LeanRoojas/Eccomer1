const dom = document;

dom.addEventListener('DOMContentLoaded', (event)=>{
    if(window.location.pathname == '/index.html'){
        let iHeaderHome = dom.getElementById('iheader')
        if(iHeaderHome && iHeaderHome.contentWindow){
            iHeaderHome.contentWindow.postMessage(event.target.value,'*');
        }
    }else{

    }
})