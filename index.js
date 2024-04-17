const http = require("http");
const database = require("./data");
const cors= require("cors");
http.createServer(async (req,res)=> {
    
    res.setHeader("Access-Control-Allow-Origin", '*'); / @dev First, read about security */
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000); 
    if(req.url == "/api/SampleData"){
        try {
            res.writeHead(200, {"Content-Type":"application/json"});
            const dataset = await database.SampleData(); 
            res.write(dataset); 
        }
        finally {
            res.end(); 
        }
    }
}).listen(8768);