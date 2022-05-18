const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    },
    nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    resumen: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    nivel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    pasos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
};
