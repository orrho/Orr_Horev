// import and setup
const express = require ('express');
const path = require('path');
const app = express();
const port = 1234;
app.use(express.static(path.join(__dirname, "static")));

//routing
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get('/formHandler', (req,res)=>{
    res.send("Thank You");
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});