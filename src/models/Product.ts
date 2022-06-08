import {Sequelize, Model, DataTypes} from 'sequelize';
import {sequelize} from '../database/Connection';

const Product = sequelize.define('products', {
    nome: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.DECIMAL,
    },
    estoque: {
        type: DataTypes.INTEGER,
    }
});