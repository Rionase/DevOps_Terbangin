const router = require("express").Router();
const { register, login, profile, notification } = require("../../controllers/auth");
const { authMiddleware } = require("../../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
router.get("/notification", authMiddleware, notification)

module.exports = router;
