const express = require('express');
const favicon = require('serve-favicon');
const axios = require('axios');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname,'public','images','favicon.png')));

// GET method route
/*
* Supported currencies are USD, EUR, GBP and ILS. API calculates the total amount expected
in the quoteCurrency accordingly to the exchange rate provided by the 3rd party service
* baseAmount Integer. The amount to convert in cents.
Example: 100 (1 USD)

* */
app.get('/quote', function (req, res) {
    let exchange_api_url = "https://api.exchangerate-api.com/v4/latest/" + req.query.baseCurrency

    axios.get(exchange_api_url).then(response => {
        console.log(response.data);
        let exchangeRate =   response.data.rates[req.query.quoteCurrency] /  response.data.rates[req.query.baseCurrency];
        let quoteAmount = exchangeRate * req.query.baseAmount;
        res.json({
            quoteAmount: quoteAmount,
            exchangeRate: exchangeRate,
            timestamp: response.data.time_last_updated
        });
    }).catch(error => {
        console.log(error);
    });
})
app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/templates/index.html'));
});
app.get('/exchange', function (req, res) {
    res.sendFile(path.join(__dirname, '/templates/exchange.html'));
})

app.listen(3000);