let db = require("../models")

module.exports = (app) => {
  app.get("/api/staff" , (req, res) => {
    db.Staff.findAll({
    }).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  })
  
  app.get("/api/staff/:id", function(req, res) {
    db.Staff.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  });
  
  app.post("/api/staff", function(req, res) {
    db.Staff.create(req.body).then(function(dbStaffs) {
      res.json(dbStaffs);
    });
  });
}
