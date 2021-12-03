# **Currency exchange**
This is a js-responsive widget for currency exchange widget. The widget
is composed of a web user interface backed by an API.

# Installation

You need to write the following commands on the terminal screen so that you can run the project locally.

```sh
1. https://github.com/tekintopuz/exchange.git
2. cd exchange
3. npm install
4. npm start
```

The application is running on [localhost](http://localhost:3000).

Sample usage on [localhost](http://localhost:3000/exchange).
# How To Use
Place this script in your html.
 `<script src="../static/js/exchange.js"></script>`

## API request interface
### GET /quote
#### Query parameter Description
|Parameter      | Type            | Description       |
| -----------   | --------------- | --------- |
| baseCurrency  | String          | 3 letters ISO currency code. Currency to convert from.      
| quoteCurrency | String          | List dogs 
| baseAmount    | Integer         | The amount to convert in cents.Example: 100 (1 USD)

Example Url: http://localhost:3000/quote?baseCurrency=USD&quoteCurrency=EUR&baseAmount=100
Supported currencies are USD, EUR, GBP and ILS. API calculates the total amount expected
in the quoteCurrency accordingly to the exchange rate provided by the 3rd party service.
#### Response body:
    {
        "quoteAmount": 88.4,
        "exchangeRate": 0.884,
        "timestamp": 1638403201
    }

#### API response interface
Response body: JSON with the following properties
Property Description
exchangeRate Decimal, the offered exchange rate. Up to 3 decimal digits.
quoteAmount Integer, the expected amount in cents.
You can choose the rounding policy.

| Property      | Description   | Description                                         | 
| -----------   | --------------| --------------------------------------------------- |
| exchangeRate  | Decimal       | the offered exchange rate. Up to 3 decimal digits.  |
| quoteAmount   | Integer       | the expected amount in cents.                       |
| baseAmount    | Integer       | The amount to convert in cents.Example: 100 (1 USD) |
| timestamp     | Integer       | unix timestamp in seconds                           |

## 3rd Party Exchange Provider
Exchange rates are fetched from https://exchangerate-api.com. Issuing a GET request to the
following URL will return the latest exchange rates for several currencies when the base
currency USD: https://api.exchangerate-api.com/v4/latest/USD

## Caching
For performance and cost reasons exchange rates are to be cached. Please implement a LRU
Cache algorithm. For the purpose of the exercise use in memory storage.

## Exchange UI widget
### Layout

Rate section:
* Base currency dropdown
* Quote currency dropdown
* Base amount input

Results section:
* Conversion rate
* Expected amount

## Functionality
* At first, only the rate section is visible.
* The user can select from Base and Quote currency dropdowns and enter Base amount.
* Once all fields are populated and valid, a request to get the quote is made.
* When results are returned, the results section is shown. The conversion rate and the
  expected amount are presented to the user.
*The user can update any input in the rate section and get the updated results section
  with the new rate and amount.

***Note: The UI is developed in simple way to work as compatible for both desktop and mobile.***