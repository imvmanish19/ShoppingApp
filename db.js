const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('shopdb','shopper',process.env.password,{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
});

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

const Product = db.define('products',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING(20)
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.00
    }
});

db.sync()
    .then(() => console.log("Database synced successfully"))
    .catch((e) => console.log("Error In syncing Database"))

exports = module.exports = {
    User,Product
}