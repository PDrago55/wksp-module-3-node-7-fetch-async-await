const didIt = document.createElement('div')
didIt.classList.add('didIt')

// nothing here yet...
const newPost = post => {
    const data = document.getElementById('type').value
    console.log(data)
    const toSend = {type: data}
    const options = {
        method: 'POST',
        body: JSON.stringify(toSend),
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
    }
    fetch('/joke', options)
        .then (res => {
            console.log(res);
                return res.json()})
        .then (res => {
            console.log(res, "-----------")
            didIt.innerHTML = res.data;
            document.body.appendChild(didIt)
        }
            )
        .catch(error => console.error(`${error}`))
}

