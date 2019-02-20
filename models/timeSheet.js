'use strict';

module.exports = (sequelize, DataTypes) => {
  const TimeSheet = sequelize.define('TimeSheet', {
    time: DataTypes.INTEGER,
  }, {});
  TimeSheet.associate = function(models) {
    TimeSheet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return TimeSheet;
};