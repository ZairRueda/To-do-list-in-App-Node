const fs = require('fs')
// Importamos fileSistem

// Globales
const archivo = './db/data.json'


const guardarDB = (data) => {
    // JSON.stringify : Comvierte un objeto a su vercion string
    fs.writeFileSync(archivo, JSON.stringify(data))
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null
    }

    // encoding : por defecto regresaria con bites, 
    // y para evitar eso encodificamos
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'})
    // Estamos reciviendo un string y necesitamos nuestro objeto
    // Tenemos que parcearlo
    const data = JSON.parse(info)

    // console.log(info);

    return data
}

module.exports = {
    guardarDB,
    leerDB
}