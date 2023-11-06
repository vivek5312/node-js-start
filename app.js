const http=require('http');

const server=http.createServer((req, resp)=>{
    resp.write('Vivek');
    resp.end();
})

server.listen(4000);
