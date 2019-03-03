module.exports = function (sequelize, Datatypes) {
  let timeSheet = sequelize.define("TimeSheet", {
    time: Datatypes.TIME
  })
  timeSheet.associate = (models) => {
    timeSheet.belongsTo(models.Staffs, {
      foreignKey: "staff_id"
    })
  }

  return timeSheet
}