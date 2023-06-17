const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  
  //NOTA PARA MÁS ADELANTE:
  //REVISAR SI LOS VALORES Y TIPOS SON APROPIADOS
  sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.STRING,
    },
  });
};
/*
📍 MODELO 1 | Recipe

ID. *
Nombre. *
Imagen. *
Resumen del plato. *
Nivel de comida saludable (health score). *
Paso a paso. *
*/
