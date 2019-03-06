let db = require("../models")

module.exports = (app) => {
  app.get("/api/staff" , (req, res) => {
    db.Staffs.findAll({
    }).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  })
  
  app.get("/api/staff/:id", function(req, res) {
    db.Staffs.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  });
  
  app.post("/api/staff", function(req, res) {
    db.Staffs.create(req.body).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  });
}
