'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY
    },
    attributes: {
      type: DataTypes.HSTORE
    }
  });

  Dish.associate = (models => {
    Dish.belongsTo)models.Menu, {
      foreignKey: 'menuId',
      onDelete: 'CASCADE'
    }
  });
  return Dish;
};
