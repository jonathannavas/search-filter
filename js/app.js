const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 30;

//eventos

document.addEventListener('DOMContentLoaded',()=>{
    
    mostrarAutos();

    llenarSelect();

});

//functions
function mostrarAutos(){

    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
           Marca:  ${marca} / Modelo: ${modelo} / Año: ${year} / Precio: $ ${precio} / Numero de puertas: ${puertas} / Color: ${color} / Transmision: ${transmision}
        `;

        resultado.appendChild(autoHTML);
    });


}

function llenarSelect(){

    for(let i = max; i >= min; i--){
    
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    
    }

}