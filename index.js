const express = require('express')
const app = express()
const port = 3000
const request = require('request');
const cheerio = require("cheerio");

app.get('/coronaviruses', (req, res) =>

   
request("https://www.worldometers.info/coronavirus/", function (error, response, body) {
    if (error) {
        res.send(response.statusCode);
    }
    var country = [];
    var $ = cheerio.load(body);
    $('tbody>tr').each(function (index, element) {
        country[index] = {};
        country[index]['country'] = $(element).find('td:nth-child(1)').text().trim();
        country[index]['totalCases'] = $(element).find('td:nth-child(2)').text().trim();
        country[index]['totalDeaths'] = $(element).find('td:nth-child(3)').text().trim();
        country[index]['newDeath'] = $(element).find('td:nth-child(4)').text().trim();
        country[index]['totalRecovered'] = $(element).find('td:nth-child(5)').text().trim();
        country[index]['activeCases'] = $(element).find('td:nth-child(6)').text().trim();
        country[index]['seriousCases'] = $(element).find('td:nth-child(7)').text().trim();
        country[index]['totalCasesperOneMillionPopulation'] = $(element).find('td:nth-child(8)').text().trim();
    });

    res.json(country);
})


);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))