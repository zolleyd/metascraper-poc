var metascraper = require('metascraper');

const scrape = async function () {
    const result = await metascraper
        .scrapeUrl('https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99');

    return result;

};

scrape().then(value => console.log(value));


