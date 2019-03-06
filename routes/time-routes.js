let db = require("../models")

module.exports = (app) => {
  app.get("/api/time" , (req, res) => {
    db.TimeSheet.findAll({
    }).then(function(dbTime) {
      res.json(dbTime);
    });
  })
  
  app.get("/api/time/:staffPin", function(req, res) {
    db.TimeSheet.findAll({
      where: {
        staffPin: req.params.staffPin
      }
    }).then(function(dbTime) {
      res.json(dbTime);
    });
  });
  
  app.post("/api/time", function(req, res) {
    db.TimeSheet.create(req.body).then(function(dbTime) {
      res.json(dbTime);
    });
  });
}
