const express = require('express');

const mongodb = require('./data/database');


const app = express();


app.use('/', require("./routes"));
const port = process.env.port || 3000;


mongodb.intDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
});





