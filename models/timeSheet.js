module.exports = function (sequelize, Datatypes) {
  let timeSheet = sequelize.define("TimeSheet", {
    time: Datatypes.TIME
  })
  timeSheet.associate = (models) => {
    timeSheet.belongsTo(models.Users, {
      foreignKey: "user_id"
    })
  }

  return timeSheet
}