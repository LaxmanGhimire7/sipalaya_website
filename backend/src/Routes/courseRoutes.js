const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload"); // ✅ correct path
const { createCourse, getAllCourse, deleteCourse, editCourse } = require("../Controller/courseController"); // ✅ correct path

router.post("/createCourse", upload.single("image"), createCourse);
router.get("/getAllCourse", getAllCourse);
router.delete("/deleteCourse/:id", deleteCourse)
router.put("/editCourse/:id", upload.single("image"), editCourse)

module.exports = router;
