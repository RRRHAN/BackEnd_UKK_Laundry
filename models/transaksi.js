'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class transaksi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    transaksi.init({
        id_member: DataTypes.INTEGER,
        tgl: DataTypes.DATE,
        batas_waktu: DataTypes.DATE,
        tgl_bayar: DataTypes.DATE,
        status: DataTypes.ENUM("baru", "proses", "selesai", "diambil"),
        dibayar: DataTypes.ENUM("dibayar", "belum_dibayar"),
        id_user: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'transaksi',
        tableName: "transaksi"
    });
    return transaksi;
};