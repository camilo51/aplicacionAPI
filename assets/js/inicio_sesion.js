const username = document.querySelector('#nombre'),
    password = document.querySelector('#contrasenia'),
    btn = document.querySelector('.enviar'),
    formulario = document.querySelector('.formulario');
if (!!formulario) {

    localStorage.setItem('user', 'Admin');
    localStorage.setItem('pass', 'Admin');
    const nombre = localStorage.getItem('user')
    const contra = localStorage.getItem('pass')

    function validacion(e) {
        if (username.value === nombre && password.value === contra) {
            localStorage.setItem('sesion', 'true')
            location.href = '/';
        }else{localStorage.setItem('sesion', 'false')}
        e.preventDefault();
    }
    formulario.addEventListener('keypress', e => {if (e.key === 'Enter') {validacion(e)}})
    btn.addEventListener('click', e => validacion(e))
}
const IS = localStorage.getItem('sesion')

export {IS};

    

