const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  
  //NOTA PARA MÁS ADELANTE:
  //REVISAR SI LOS VALORES Y TIPOS SON APROPIADOS
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
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
