var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
       index.html
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
       aboutus.html
    );
});


app.get("/contact",(req, res)=>{
    res.send(
       contact.html
    );
});

var server=app.listen(3000);
console.log("server started at 3000");
