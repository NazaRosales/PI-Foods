const { DataTypes } = require("sequelize");
module.exports = (sequelize) =>{
    sequelize.define("diets", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


/*
📍 MODELO 2 | Diets

ID. *
Nombre. *
*/