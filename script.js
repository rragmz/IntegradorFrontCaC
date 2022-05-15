const VALOR_TICKET = 200;
const DCTO_ESTUDIANTE = 0.20;
const DCTO_TRAINEE = 0.50;
const DCTO_JUNIOR = 0.85;
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let total = document.getElementById('total');
let resumen = document.getElementById('resumen');
let borrar = document.getElementById('borrar');


function calcularTotal(cantidad, categoria){
    let importeTotal;
    switch(categoria){
        case 'estudiante':
            importeTotal=VALOR_TICKET*cantidad*DCTO_ESTUDIANTE;
            break;
        case 'trainee':
            importeTotal=VALOR_TICKET*cantidad*DCTO_TRAINEE;
            break;
        case 'junior':
            importeTotal=VALOR_TICKET*cantidad*DCTO_JUNIOR;
            break;
        default:
            importeTotal = VALOR_TICKET*cantidad;
    }
    return importeTotal;
}

resumen.addEventListener('click', () => {
    console.log(calcularTotal(cantidad.value, categoria.value));
    total.innerText = ("Total a Pagar: $" + calcularTotal(cantidad.value, categoria.value));
})

borrar.addEventListener('click', () => {
    total.innerText = ("Total a Pagar: $");
})

