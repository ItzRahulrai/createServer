const http = require('http');
const name = 'Rahul Rai'

const server = http.createServer((req,res)=>{
    console.log(name);
});


  server.listen(4000);