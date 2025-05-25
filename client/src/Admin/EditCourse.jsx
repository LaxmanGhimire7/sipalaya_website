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
     <div className="flex justify-center ml-56 items-center min-h-scree p-4">
      <form
        onSubmit={handleEditCourse}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 border-b pb-4">
          Edit Course Details
        </h2>

        {/* Existing course image */}
        {courseImage && (
          <div className="flex flex-col items-center">
            <img
              className="h-32 w-32 object-cover rounded-lg border-2 border-gray-200 mb-4"
              src={`http://localhost:9000/image/${courseImage}`}
              alt="Course"
            />
          </div>
        )}

        {/* Course Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Image
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
          />
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Instructor</label>
            <input
              type="text"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              step="0.1"
              value={courseRating}
              onChange={(e) => setCourseRating(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Discount Price</label>
              <input
                type="number"
                value={courseDiscountPrice}
                onChange={(e) => setCourseDiscountPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Bestseller</label>
              <select
                value={bestseller}
                onChange={(e) => setBestseller(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Featured</label>
              <select
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}

export default EditCourse;
