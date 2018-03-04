const mongoose = require('../db.js'),
    Schema = mongoose.Schema;

let news = new Schema({          
    title : { type: String },                    
    img: {type: String},                        
    date: { type: String}                
});
module.exports = mongoose.model('news',news);