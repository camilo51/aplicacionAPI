import {IS} from "./inicio_sesion.js";

const tarjeta = document.querySelector('.tarjetas');
const paginacion = document.querySelector('.paginacion');

let api = 'https://rickandmortyapi.com/api/character'
paginacion.addEventListener('click', (e) => {
    console.log(api);
    if (e.target.tagName == 'DIV') {
        let pagina = e.target.innerHTML
        
        api = `https://rickandmortyapi.com/api/character/?page=${pagina}`

        console.log(api);
    }

})
fetch(api)
    .then(respuesta => respuesta.json())
    .then(entry => {
        let cantidad;
        const entrada = entry.results;
        const informacion = entry.info;

        (IS === 'true') ? cantidad = entrada.length : cantidad = 6;
        
        for (let i = 1; i <= informacion.pages; i++) {
            paginacion.innerHTML += `<div class="paginacion__num">${i}</div>`;
        }
        for (let i = 0; i < cantidad; i++) {
            tarjeta.innerHTML += `
                                 <div class="tarjeta">
                                    <img class="w-50" src='${entrada[i].image}'>
                                    <div class="tarjeta__cuerpo">
                                        <h2 class="tarjeta__nombre">${entrada[i].name}</h2>
                                        <ul>
                                            <li>Genero: ${entrada[i].gender}</li>
                                            <li>Estado: ${entrada[i].status}</li>
                                            <li>Especie: ${entrada[i].species}</li>
                                            <li>Origen: ${entrada[i].origin.name}</li>
                                            <li>Locacion: ${entrada[i].location.name}</li>
                                        </ul>
                                    </div>
                                 </div>`;  
        }
        console.log(entrada[1]);
})
