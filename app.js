const http = require('http');
const hostname = '127.0.0.1';
const fs = require('fs');
const port = 3001;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('JSON date in terminal');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {

        fs.writeFile('./file.json', JSON.stringify({ data: jsonObj }), (err) => {
            if (err) throw err;
            // console.log('The file has been saved!');
        });

        fs.readFile('./file.json', "utf8", (err, obj) => {
            JSON.parse(obj).map(i => console.log(i.id))
        })

    })

