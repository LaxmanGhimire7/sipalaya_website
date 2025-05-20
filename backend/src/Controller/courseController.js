const Course = require("../Model/courseModel");

const createCourse = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : "default-picture.png";

    // Convert string to boolean if using FormData
    const isBestsellerValue =
      req.body.isBestseller === "true" || req.body.isBestseller === true;
    const isFeaturedValue =
      req.body.isFeatured === "true" || req.body.isFeatured === true;

    const {
      name,
      instructor,
      price,
      discountPrice,
      rating,
      duration,
    } = req.body;

    // Validate required fields
    if (
      !image ||
      !name ||
      !price ||
      !instructor ||
      !discountPrice ||
      rating === undefined || rating === null ||
      duration === undefined || duration === null
    ) {
      return res
        .status(400)
        .json({ status: 400, msg: "All fields are required" });
    }

    // Save course
    let response = new Course({
      image,
      name,
      price,
      instructor,
      discountPrice,
      rating,
      duration,
      isBestseller: isBestsellerValue,
      isFeatured: isFeaturedValue,
    });

    response = await response.save();

    return res
      .status(201)
      .json({ status: 201, msg: "Course created", response });
  } catch (error) {
    console.error("Create Course Error:", error);
    return res.status(500).json({ status: 500, msg: "Internal Server Error" });
  }
};

module.exports = { createCourse };
