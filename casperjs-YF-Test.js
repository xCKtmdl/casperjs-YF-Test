/*
I had a hell of a time trying to get casperjs to download a simple csv
from Yahoo Finance.

After alot of playing around with phantomjs and casperjs, I am beginning to have
some idea of how to accomplish my goal.

For anyone else that might be having the same problem as me trying to get casperjs to download
a simple file, here is the code I finally got it to do it with.

run command: casperjs --ignore-ssl-errors=true --ssl-protocol=any --web-security=no  new3.
*/

var casper = require('casper').create();

var headers = {

    method: 'get',

    headers: {

        'Host': 'finance.yahoo.com',

        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0',

        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',

        'Accept-Language': 'en-US,en;q=0.5',

        'Accept-Encoding': 'gzip, deflate',

        'Cookie': 'B=a5vs7hpadttla&b=3&s=ir; ywandp=1000911397279%3A2124295925; fpc=1000911397279%3AZU-P9wHW%7C%7C; ypcdb=a9fa538faacf373610a9f3ca6cf7b73d; PRF=&t=ALKM+JAH+AXL+ARDM',

        'Connection': 'keep-alive'

    }

};

casper.start();


casper.open('http://finance.yahoo.com/q/hp?s=ALKM+Historical+Prices', headers).then(function(response) {

    casper.download('http://real-chart.finance.yahoo.com/table.csv?s=ALKM&d=1&e=16&f=2015&g=d&a=2&b=27&c=2013&ignore=.csv', 'nice.csv');

});


casper.run();