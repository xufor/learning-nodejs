const http = require('https');

const req = http.request('https://www.google.com', res => {
    res.on('data', chunk => {
        console.log(`#### CHUNK STARTS ####\n${chunk}\n#### CHUNK ENDS ####\n`);
    });

    res.on('end', () => {
        console.log('No more data');
    });
});

req.end();