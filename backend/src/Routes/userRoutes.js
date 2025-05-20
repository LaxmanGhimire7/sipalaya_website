const {register, login, getUser, getAllUser} = require("../Controller/userController")
const express = require ("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware")

router.post("/register", register);
router.post("/login", login);
router.get("/getUser",authMiddleware, getUser)
router.get("/getAllUser",authMiddleware, getAllUser)

module.exports= router;