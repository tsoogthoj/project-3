module.exports = (sequelize, DataTypes) => {
  let staff = sequelize.define("Staffs", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    street_address: DataTypes.TEXT,
    unit_number: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip_code: DataTypes.TEXT,
    home_phone: DataTypes.INTEGER,
    mobile_phone: DataTypes.INTEGER,
    birth_date: DataTypes.DATE,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    pin: DataTypes.INTEGER,
    title: DataTypes.TEXT
  })

  staff.associate = (models) => {
    staff.hasMany(models.TimeSheet)
  }

  return staff
}