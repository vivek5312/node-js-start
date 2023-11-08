const http=require("http");
const fs=require("fs")
const url=require("url")
const myServer=http.createServer((req,res)=>{

    const log=`${Date.now()}: ${req.url} New rquest recieved \n`

    const myUrl=url.parse(req.url,true)
    console.log(myUrl)

    fs.appendFile("./HTTP/log.txt", log, (err)=>{
        if(req.url== "/favicon.ico"){
            return res.end();
        }

        switch (myUrl.pathname){
            case '/' :  res.end("Home page");
            break;

            case '/about': 
            const username=myUrl.query.name;
            res.end(`Hi,${username}`)
            break;
            default: res.end("404 Not found")

        }
       
    })
    
   

}).listen(3500, ()=>console.log("server is started"))