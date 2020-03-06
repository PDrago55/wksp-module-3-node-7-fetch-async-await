const request = require('request-promise');

const getGeekJoke = async () => {
try{
    let test = {
        url: "https://geek-jokes.sameerkumar.website/api",
        headers: {
            "Accept": "application/json"
        }
    }
    const joke = await request(test)
    const geekJoke = JSON.parse(joke)
    console.log(geekJoke, "-----------")
    return geekJoke
} catch (err) {
    console.log(err)
}
}


getGeekJoke()

module.exports = {getGeekJoke}