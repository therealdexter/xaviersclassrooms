/*
This is the main server entry point file.
*/

//Modules added in dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

//Start a connection with the database
mongoose.connect(config.database);

//To run if connection is successful
mongoose.connection.on('connected',() => {
    console.log("Connected to database "+config.database);
});

//To run if connection failed
mongoose.connection.on('error',(err)=>{
    console.log("Connection to "+config.database+" failed");
    console.log(err);
});

//Routes
const users = require('./routes/users');

//app variable
const app = express();

//Set static folder for the Angular app file

app.use(express.static(path.join(__dirname,'public')));

//All middleware

//Cors middleware
app.use(cors());

//Body parser
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//User routes
app.use('/users',users);

//port to listen on
const port = process.env.PORT || 8000

//Index route
app.get('/',(req,res) =>{
    res.send("Invalid end point");
    console.log("Going to homepage");
});

//start server
app.listen(port, ()=> {
    console.log("Server started on port "+3000)
});