'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    branchCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attributes: {
      type: DataTypes.HSTORE
    }
  });

  Branch.associate = (models) => {
    Branch.belongsTo(models.Merchant, {
      foreignKey: 'merchantId',
      onDelete: 'CASCADE'
    });
  };
  return Branch;
};
