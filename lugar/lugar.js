const axios = require('axios');

const getLugarLatLng = async ( dir) => {
    
    const encodeUrl = encodeURI(dir)
    
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: {'x-rapidapi-key':'2627886c2amsh31c387cf35de3f8p192d23jsn91f616ee4c2d'}
    });
    
   const resp = await instance.get()

   if(resp.data.data.length === 0){
       throw new Error (`No hay resultados para ${dir}`);
   }

   const data = resp.data.data[0]
   const direccion = data.name;
   const lat = data.latitude;
   const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
