import fetch from "node-fetch";

function obtenerData(sucursalInicio) {
    fetch("http://127.0.0.1:8080/breweries.geojson")
    .then(response =>{ return response.json() })
    .then(data => { armarCamino(data, sucursalInicio) })
}

function armarCamino(data, sucursalInicio) {
    let arrayCordenadas = [];
    let dataCervecerias = [];

    data.features.forEach(element => {
        let obj = {
            name: element.properties.name,
            cordX: element.geometry.coordinates[0]
        }
        dataCervecerias.push(obj);

        arrayCordenadas.push(element.geometry.coordinates[0])
    });

    //Ordeno el array de coordenadas
    arrayCordenadas.sort();

    // Armo un array con las cervecerias ordenadas por las coordenadas
    // que se ordenaron con el sort
    let cerveceriasOrder = []
    arrayCordenadas.forEach(element => {
        cerveceriasOrder.push(buscarCerveceria(element, dataCervecerias));
    });

    // Muestro en pantalla, las cervecerias ya ordenadas por coordenadas
    for (let z = 0; z < cerveceriasOrder.length; z++) {
        console.log(`${cerveceriasOrder[z]} -- ${arrayCordenadas[z]}`);
    }

    // Guardo la posicion de la cerveceria elegida como incial
    let pos = cerveceriasOrder.indexOf(sucursalInicio);

    // Guardo en la variable a mostrar por pantalla, la primera cerveceria
    // elegida como comienzo
    let texto = cerveceriasOrder[pos] + " -- ";

    // Recorro las cervecerias desde la primera e ignoro la ya elegida
    // porque ya estuvo ahi
    for (let j = 0; j < cerveceriasOrder.length; j++) {
        if (j == pos) continue
        texto += `${cerveceriasOrder[j]} -- `;
    }

    // Muestro en pantalla el orden de las cervecerias a recorrer
    console.log("");
    console.log(`Orden de las cervecerias a visitar, siendo la primera: ${sucursalInicio}`);
    console.log(texto);
}

function buscarCerveceria(cord, dataCervecerias) {
    for (let i = 0; i < dataCervecerias.length; i++) {
        if (dataCervecerias[i].cordX == cord) return dataCervecerias[i].name;
    }
}

obtenerData("Maldita Malta Belgrano");