const http = require('http');
const axios = require('axios');

const server = http.createServer((req, res) => {
  const phone = req.url.split("=")[1];


  axios.post('http://192.168.10.24/api/v1/callctrl/dial', {
    "data": {
      "Dest": phone
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('Polycom:963')}`
    }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});