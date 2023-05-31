// import and linit
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.static(path.join(__dirname, "static")))

//routing
app.get('/',(req,res)=> {
    console.log('This Is The Body:    ', req.body);
    res.send("hi express")
});

app.get('/page2', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get('/page3', (req,res)=> {
    res.sendFile(path.join(__dirname, "views/page3.html"))
})

app.get('/page4', (req,res)=> {
    console.log('This Is The Body:    ', req.query);
    res.sendFile(path.join(__dirname, "views/page4.html"))
})

app.get('/formHandler', (req,res)=>{
    var x = req.query;
    res.send(x);
})

// set up listen
app.listen(port, ()=> {
    console.log("server is running on port", port);
})
