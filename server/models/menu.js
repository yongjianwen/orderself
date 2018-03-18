'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY
    },
    attributes: {
      type: DataTypes.HSTORE
    }
  });

  Menu.associate = (models) => {
    Menu.hasMany(models.Dish, {
      foreignKey: 'dishId',
      as: 'dishes'
    });
  };

  Menu.associate = (models) => {
    Menu.belongsTo(models.Branch, {
      foreignKey: 'branchId',
      onDelete: 'CASCADE'
    });
  };
  return Menu;
};
