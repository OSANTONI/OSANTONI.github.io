
let $departemento = document.getElementById('departamento')
let $provincia = document.getElementById('provincia')
let $distrito = document.getElementById('distrito')
let $cash = document.getElementById('cash')

let departamentos = ['El norte', 'San Cristobal', 'Sancor Seguros', 'Seguros Rivadavia', 'Río Uruguay']
let provincias = ['Motocicleta', 'Auto', 'Camioneta', 'Móvil', 'Hogar', 'Bicicleta']
let distritos = ['Todo riesgo', 'Terceros', 'Robo e incendio', 'Granizo']
let cash = [1500, 2500, 4000, 7000, 10000, 15000]

function mostrarLugares(arreglo, lugar) {
    let elementos = '<option selected disables>--Seleccione--</option>'

    for (let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
    }

    lugar.innerHTML = elementos
}

mostrarLugares(departamentos, $departemento)

function recortar(array, inicio, fin, lugar) {
    let recortar = array.slice(inicio, fin)
    mostrarLugares(recortar, lugar)
}

$departemento.addEventListener('change', function () {
    let valor = $departemento.value

    switch (valor) {
        case 'El norte':
            recortar(provincias, 0, 3, $provincia)
            break
        case 'San Cristobal':
            recortar(provincias, 1, 4, $provincia)
            break
        case 'Sancor Seguros':
            recortar(provincias, 2, 5, $provincia)
            break
        case 'Seguros Rivadavia':
            recortar(provincias, 3, 5, $provincia)
            break
        case 'Río Uruguay':
            recortar(provincias, 2, 5, $provincia)
            break
    }

    $distrito.innerHTML = ''
    $cash.innerHTML = ''
})

$provincia.addEventListener('change', function () {
    let valor = $provincia.value

    if (valor == 'Motocicleta') {
        recortar(distritos, 0, 2, $distrito)
    } else if (valor == 'Auto') {
        recortar(distritos, 1, 2, $distrito)
    } else if (valor == 'Camioneta') {
        recortar(distritos, 2, 4, $distrito)
    } else if (valor == 'Móvil') {
        recortar(distritos, 2, 3, $distrito)
    } else if (valor == 'Hogar') {
        recortar(distritos, 3, 4, $distrito)
    } else {
        recortar(distritos, 0, 4, $distrito)
    }



})

$distrito.addEventListener('change', function () {
    let valor = $distrito.value
    if (valor == 'Todo riesgo') {
        recortar(cash, 4, 5, $cash)
    } else if (valor == 'Terceros') {
        recortar(cash, 1, 2, $cash)
    } else if (valor == 'Robo e incendio') {
        recortar(cash, 3, 4, $cash)
    } else if (valor == 'Granizo') {
        recortar(cash, 2, 3, $cash)
    } 
})