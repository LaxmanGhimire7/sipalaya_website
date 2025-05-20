const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload"); // ✅ correct path
const { createCourse } = require("../Controller/courseController"); // ✅ correct path

router.post("/createCourse", upload.single("image"), createCourse);

module.exports = router;
