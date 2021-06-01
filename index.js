async function runAPIQuery(){
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    //Test at least 3 different Api's

    const initObject = {
        method: 'GET'
    }

    const resp = await fetch(url, initObject)
        .then(response => response.json())
    
    $('#body').append(`
        <p class="NiceText">${resp.time.updated}</p>
        <p class="NiceText">BitCoin Price Index USD: ${resp.bpi.USD.rate}</p>
    `)
}
