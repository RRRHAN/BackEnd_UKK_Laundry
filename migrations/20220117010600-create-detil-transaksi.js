'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('detil_transaksi', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_transaksi: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    key: "id",
                    model: "transaksi"
                }
            },
            id_paket: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { key: "id", model: 'paket' }
            },
            qty: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('detil_transaksi');
    }
};