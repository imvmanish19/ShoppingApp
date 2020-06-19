const route = require('express').Router();
const Product = require('../../db').Product;

route.get('/',(req,res) => {
    //Get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((e) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        });
});

route.post('/',(req,res) => {
    //add new product\
    if(isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch(() => {
            res.status(501).send({
                error: "Could not add product"
            })
        });
});

exports = module.exports = route;