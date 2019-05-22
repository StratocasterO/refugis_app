let registrar = document.querySelector('.login2')
let entrar = document.querySelector('#btnEntrar')
let primerFormulario=document.querySelector('.login');
let logo=document.querySelector('#logo');
//variable para hacer un delay dentro de la pagina principal y mostrar el menu de registro
const delay=_=>{
	console.log('llego')

	logo.style.opacity = 0;
	logo.style.transition = "opacity 2s";


}
setTimeout(delay,1000)
//Variable para mostrar los formularios
const primerMenu=_=>{
	logo.style.display = 'none';
	primerFormulario.style.opacity = 1;
	primerFormulario.style.transition = "opacity 1s";

}
setTimeout(primerMenu,3000)


//boton en el cual si tus credenciales coinciden entras dentro de la aplicación.
const clickEntrar=_=>{
//si los datos son correctos el clickar en entrar te envia a la siguiente pagina
location.href='mapa.html';
console.log('entro');
}
if (entrar != 
	null) entrar.addEventListener('click',clickEntrar);
//Boton para ir a la pantalla de registrarte.
const clickRegistrarse=_=>{
	console.log('me clickas en registrate');
	primerFormulario.style.display = 'none';
	primerFormulario.style.transition = "opacity 1s";

	registrar.style.opacity = 1;
	registrar.style.transition = "opacity 1s";
	registrar.style.display='flex';

}
document.querySelector('input[value="Registrarse"]').addEventListener('click',clickRegistrarse);


//Hacer click en el boton de 'ME REGISTRO'dentro de la opción de registrarse y despues de rellenar todo.
/*const registrarse=_=>{
	console.log('click en registrarse');




}
registrate = document.querySelector('input[value="Registrarse"]')addEventListener('click',registrarse);*/

//if (registrate != null) 

