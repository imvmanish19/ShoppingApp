const User = require('../../db').User;
const route = require('express').Router();

route.get('/',(req,res) => {
    //Aim: To send an array of all users from database

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((e) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
});

route.post('/',(req,res) => {
    User.create({
        name: req.body.name
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((e) => {
            res.status(501).send({
                error: "Could not add new user"
            })
        })
});

exports = module.exports = route;