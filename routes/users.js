let db = require("../models")

module.exports = (app) => {
  app.get("/api/users" , (req, res) => {
    db.Users.findAll({
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  })
}

app.get("/api/users/:id", function(req, res) {
  db.Users.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbUsers) {
    res.json(dbUsers);
  });
});

app.post("/api/users", function(req, res) {
  db.Users.create(req.body).then(function(dbUsers) {
    res.json(dbUsers);
  });
});