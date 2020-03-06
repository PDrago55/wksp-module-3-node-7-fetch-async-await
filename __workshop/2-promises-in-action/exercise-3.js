const request = require('request-promise');

const getDadJoke = async () => {
    try{  
    let test = {
        uri: "https://icanhazdadjoke.com/",
        headers: {
            "Accept": "application/json"
        },
    }
    const joke = await request(test)
    let newJoke = JSON.parse(joke)
    console.log(newJoke.joke, "--------")
    return newJoke.joke
} catch (err){
    console.log(err)
}
}

getDadJoke()

module.exports = { getDadJoke }