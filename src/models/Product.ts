import {Sequelize, Model, DataTypes} from 'sequelize';
import {sequelize} from '../database/Connection';

// export const Product = sequelize.define('products', {
//     nome: {
//         type: DataTypes.STRING,
//     },
//     preco: {
//         type: DataTypes.DECIMAL,
//     },
//     estoque: {
//         type: DataTypes.INTEGER,
//     }
// });

export class Product extends Model {
    declare nome: string;
    declare preco: number;
    declare estoque: number;
}

Product.init({
    nome: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    estoque: {
        type: DataTypes.INTEGER
    }
}, {sequelize});