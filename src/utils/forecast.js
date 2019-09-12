const request = require('request')


const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/d1858ac07c640d02a9536dffe30593d3/' + encodeURIComponent(long) + ',' + encodeURIComponent(lat)
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature 
            + ' degrees out. There is a ' + body.currently.precipProbability 
            + '% chance of rain. The temperature high = ' + body.daily.data[0].temperatureHigh
            + ' and temperature low = ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast