'use strict';
module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define('Merchant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attributes: {
      type: DataTypes.HSTORE
    }
  });

  Merchant.associate = (models) => {
    Merchant.hasMany(models.Branch, {
      foreignKey: 'branchId',
      as: 'branches'
    });
  };

  return Merchant;
};
