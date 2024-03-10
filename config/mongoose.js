const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect("mongodb+srv://ataur3895:Ataur123@cluster0.kxhsixd.mongodb.net/EcommerAPI");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
