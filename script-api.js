const api_url = "";

function generateNumbers() {
    for (var i =0; i<10000; i++) {
        fetch(api_url + 'GenerateRandomNumber', {
            method: 'GET',
            mode: 'no-cors'
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => reject(error));
    }
}