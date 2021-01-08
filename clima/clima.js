const axios = require('axios');

const getClima = async ( lat, lng) => {
    console.log('lat,lng :>> ', lat,lng);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cd2a96ac3c2234fdcb5cef2f29a4cfa1&units=metric`)
    
    return resp.data.main.temp; 
}

module.exports = {
    getClima
}
