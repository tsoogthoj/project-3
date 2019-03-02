module.exports = (sequelize, DataTypes) => {
  let users = sequelize.define("Users", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    pin: DataTypes.INTEGER
  })

  users.associate = (models) => {
    users.hasMany(models.TimeSheet)
  }

  return users
}