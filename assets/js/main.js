import {IS} from "./inicio_sesion.js";
const menu = document.querySelector('.header__navegacion');
const aviso = document.querySelector('.aviso');

const sesionIniciada = () => {
    menu.innerHTML = `<a href="#">Inicio</a>
                    <a href="#">Categoria</a>
                    <a href="#">Perfil</a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Cerrar Sesion</a>
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Cerrar Sesion</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ¿Esta Seguro Que Quiere Cerrar La Sesion?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-success cerrarSesion">Continuar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    `

    const btnCerrar = document.querySelector('.cerrarSesion');

    btnCerrar.addEventListener('click', ()=>{
        localStorage.setItem('sesion', 'false')
        location.href = '/'
    })

    aviso.remove()
}
const sesionCerrada = () => {
    menu.innerHTML = `<a href="./views/inicio_sesion.html">Iniciar Sesion</a>
    <a href="#">Registrarse</a>`;

    aviso.innerHTML = 'Inicia sesion para ver todo el contenido'
    aviso.classList.add('bg-danger', 'text-white', 'py-2', 'fs-2')
}


  
(IS === 'true') ? sesionIniciada() : sesionCerrada()

