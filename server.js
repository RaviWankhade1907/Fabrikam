var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/aboutus",(req, res)=>{
    res.sendFile(path.join(__dirname, '/aboutus.html'));
});


app.get("/contact",(req, res)=>{
    res.sendFile(path.join(__dirname, '/contact.html'));
});

var server=app.listen(3000);
console.log("server started at 3000");
