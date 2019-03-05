module.exports = (sequelize, DataTypes) => {
  let staff = sequelize.define("Staffs", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    street_address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip_code: DataTypes.TEXT,
    password: DataTypes.TEXT,
    pin: DataTypes.INTEGER,
    title: DataTypes.TEXT
  })

  staff.associate = (models) => {
    staff.hasMany(models.TimeSheet)
  }

  return staff
}