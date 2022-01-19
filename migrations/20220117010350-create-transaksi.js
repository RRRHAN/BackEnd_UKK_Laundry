"use strict"
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("transaksi", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_member: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    key: "id",
                    model: "member",
                },
            },
            tgl: {
                type: Sequelize.DATE,
            },
            batas_waktu: {
                type: Sequelize.DATE,
            },
            tgl_bayar: {
                type: Sequelize.DATE,
            },
            status: {
                type: Sequelize.ENUM("baru", "proses", "selesai", "diambil"),
            },
            dibayar: {
                type: Sequelize.ENUM("dibayar", "belum_dibayar"),
            },
            id_user: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { key: "id", model: "user" },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("transaksi")
    },
}