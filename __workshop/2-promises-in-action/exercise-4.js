const request = require('request-promise');

const getTronaldDump = async () => {
try{
    let test = {
        uri: "https://api.tronalddump.io/random/quote",
        headers: {
            "Accept": "application/json"
        }
    }
    const drumpf = await request(test)
    let dumbAss = JSON.parse(drumpf)
    console.log(dumbAss.value, "------------")
    return dumbAss.value
} catch (err){
    console.log(err)
}
}

getTronaldDump()
module.exports = {getTronaldDump}