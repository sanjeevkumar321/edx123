const request = require('request-promise');
const cheerio = require("cheerio");
(async()=>{
    const url ="https://www.covid19india.org/";
    const response= await request(url);

    const $ = cheerio.load(response);
    let p=$('#root > div > div > div.Home > div.home-left > div.Level.fadeInUp > div.level-item.is-cherry > h1"').text();
    Console.log(p)
})();