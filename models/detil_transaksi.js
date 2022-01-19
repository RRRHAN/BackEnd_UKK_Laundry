'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class detil_transaksi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    detil_transaksi.init({
        id_transaksi: DataTypes.INTEGER,
        id_paket: DataTypes.INTEGER,
        qty: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'detil_transaksi',
        tableName: 'detil_transaksi'
    });
    return detil_transaksi;
};