const {
    login,
    register,

} = require("../controllers/userController");
const router = require("express").Router();
router.post("/login", login);
router.post("/register", register);


module.exports = router;