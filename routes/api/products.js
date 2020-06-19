const route = require('express').Router();
const Product = require('../../db').Product;

route.get('/',(req,res) => {
    //Get all products
});

route.post('/',(req,res) => {
    //add new product
    
});

exports = module.exports = route;