const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const request = require('request');
const cheerio = require("cheerio");

app.get('/india', (req, res) =>
request("https://www.google.com/", function (error, response, body) {
    if (error) {
        res.send(response.statusCode);
    }
   
   
	res.send(body);
   
})

    

),
app.get('/odisha', (req, res) =>
request("https://www.gmail.com/", function (error, response, body) {
    if (error) {
        res.send(response.statusCode);
    }
    
    
	res.send(body);


   
})

    

);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))