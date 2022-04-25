import fetch from "node-fetch";

function obtenerData(sucursalInicio) {
    fetch("http://127.0.0.1:5500/breweries.geojson")
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

    arrayCordenadas.sort();

    let cerveceriasOrder = []
    arrayCordenadas.forEach(element => {
        cerveceriasOrder.push(buscarCerveceria(element, dataCervecerias));
    });

    let texto = "";
    cerveceriasOrder.forEach(element => {
        texto += `${element.toString()}//`
    });

    let cercOrder = texto.split("//")

    texto = "";
    arrayCordenadas.forEach(element => {
        texto += `${element.toString()}//`
    });

    let coordOrder = texto.split("//")
    for (let z = 0; z < cercOrder.length; z++) {
        console.log(`${cercOrder[z]} -- ${coordOrder[z]}`);
    }

    let pos = 0;
    for (let i = 0; i < cerveceriasOrder.length; i++) {
        if (cerveceriasOrder[i] == sucursalInicio) {
            pos = i;
        }
    }

    texto = "";
    texto += cerveceriasOrder[pos] + " -- ";

    for (let j = 0; j < cerveceriasOrder.length; j++) {
        if (j == pos) continue
        texto += `${cerveceriasOrder[j]} -- `;
    }

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