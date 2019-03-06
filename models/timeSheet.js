module.exports = function (sequelize, Datatypes) {
  let timeSheet = sequelize.define("TimeSheet", {
    staffPin: Datatypes.TEXT,
    time: Datatypes.TEXT
  })

  return timeSheet
}