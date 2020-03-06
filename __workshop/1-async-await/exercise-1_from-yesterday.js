// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        const getApi = await request('http://api.open-notify.org/iss-now.json')
        const position = JSON.parse(getApi);
        const data = {
            lat: position.iss_position.latitude,
            lng: position.iss_position.longitude
        }
            console.log(data, "-------------")
            return data
    } catch (err) {
        console.log(err)
    }
}

getIssPosition();