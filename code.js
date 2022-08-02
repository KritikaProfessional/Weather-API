const http  = require("http");
const fs = require("fs");
const request = require("requests");
const homepage = fs.readFileSync("weatherapp.html","utf-8");
const server = http.createServer((req,res)=>{
    if (req.url=="/"){
        request(
            "http://api.openweathermap.org/data/2.5/weather?q=pune&appid=a902f59ea769ebd548fc76f640b4b8af"
            )
        .on("data",(chunk)=>{
            const jsondata = JSON.parse(chunk);
            const arraydata = [jsondata]
            console.log(arraydata);
        })
        .on("end",(err)=>{
            if (err) return console.lo("connection closed due to error",err);
            console.log("end")
        });
    };
});
server.listen(8000,"127.0.0.1");
