const pulsarRojo=_=>{
    console.log('llego');
    const cajaRoja = document.querySelector('#menu');
    const cajaGrande = document.querySelector('#m_contenedor');
    const menuDespl = document.querySelector('#menu2');
    
    cajaGrande.classList.toggle('invisible');
    menuDespl.style.display='none';
}

window.addEventListener('click', function(e){ 
    const m_contenedor = document.querySelector('#m_contenedor'); 
    const menu = document.querySelector('#menu2');
    
    if ( !m_contenedor.contains(e.target)){
        m_contenedor.classList.remove('invisible');
        menu.style.display='block';
    }
});


document.querySelector('.menu2').addEventListener('click',pulsarRojo);

const pulsarMas=_=>{
    console.log('llego');
    const cajaGrande = document.querySelector('#añadir');
    
    location.href="nuevo.html"
}
document.querySelector('#añadir').addEventListener('click',pulsarMas);