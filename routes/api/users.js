const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/userss"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/userss/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
