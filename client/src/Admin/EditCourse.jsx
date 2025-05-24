import { useState } from "react";
import { useLocation } from "react-router-dom";

function EditCourse() {
  
  const location = useLocation();

  const {
    _id,
    name: courseName,
    instructor,
    rating,
    price,
    discountPrice,
    isBestseller,
    isFeatured,
    image: courseImage,
  } = location?.state;

  const [name, setName] = useState(courseName);
  const [instructorName, setInstructorName] = useState(instructor);
  const [courseRating, setCourseRating] = useState(rating);
  const [coursePrice, setCoursePrice] = useState(price);
  const [courseDiscountPrice, setCourseDiscountPrice] = useState(discountPrice);
  const [bestseller, setBestseller] = useState(isBestseller);
  const [featured, setFeatured] = useState(isFeatured);
  const [image, setImage] = useState(null);

  const handleEditCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("instructor", instructorName);
    formData.append("rating", courseRating);
    formData.append("price", coursePrice);
    formData.append("discountPrice", courseDiscountPrice);
    formData.append("isBestseller", bestseller);
    formData.append("isFeatured", featured);
    if (image) {
      formData.append("image", image);
    }

    try {
      let response = await fetch(`http://localhost:9000/api/course/editCourse/${_id}`, {
        method: "PUT",
        body: formData,
      });

       response = await response.json();
      console.log("Course Updated:", response);
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <form
        onSubmit={handleEditCourse}
        className="flex flex-col shadow-2xl shadow-gray-400 items-center w-[700px] p-6 bg-white rounded-xl"
      >
        {/* Existing course image */}
        {courseImage && (
          <img
            className="h-20 mb-4 rounded-lg"
            src={`http://localhost:9000/image/${courseImage}`}
            alt="Course"
          />
        )}

        <label>Course Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Course Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Instructor</label>
        <input
          type="text"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Rating</label>
        <input
          type="number"
          step="0.1"
          value={courseRating}
          onChange={(e) => setCourseRating(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Price</label>
        <input
          type="number"
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Discount Price</label>
        <input
          type="number"
          value={courseDiscountPrice}
          onChange={(e) => setCourseDiscountPrice(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        />

        <label>Bestseller</label>
        <select
          value={bestseller}
          onChange={(e) => setBestseller(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <label>Featured</label>
        <select
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
          className="outline-none border w-96 p-2 mb-4 rounded-lg"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-6 rounded-xl hover:bg-orange-600 transition-all"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}

export default EditCourse;
