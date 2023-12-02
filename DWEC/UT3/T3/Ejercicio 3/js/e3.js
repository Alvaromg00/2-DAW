function cambiarATwitter(){
    const nodoA=document.querySelector("a");
    nodoA.id="aTwitter";
    nodoA.href="https://www.twitter.com";
    nodoA.textContent="Twitter";
    
    if(nodoA.hasAttribute('title')){
        nodoA.setAttribute('title', 'Ir a Twitter');
    }
}

cambiarATwitter();
