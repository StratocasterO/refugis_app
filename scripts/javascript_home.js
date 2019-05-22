const pulsarMenu=_=>{
    const cajaRoja = document.querySelector('#menu');
    const cajaGrande = document.querySelector('#m_contenedor');
    cajaGrande.classList.toggle('invisible');
}

window.addEventListener('click', function(e){ 
    const m_contenedor = document.querySelector('#m_contenedor'); 
    const menu = document.querySelector('#menu2');

    if ( !m_contenedor.contains(e.target)){
        m_contenedor.classList.remove('invisible');
    }
});

document.querySelector('#menu2').addEventListener('click',pulsarMenu);