import { useState } from "react";

function AddCourse() {
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [isBestseller, setIsBestseller] = useState(false);
  const [image, setImage] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

  const formSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discountPrice", discountPrice);
    formData.append("instructor", instructor);
    formData.append("rating", rating);
    formData.append("duration", duration);
    formData.append("isBestseller", isBestseller); 
    formData.append("isFeatured", isFeatured);
    formData.append("image", image);
    e.preventDefault();
    let response = await fetch(
      "http://localhost:9000/api/course/createCourse",
      {
        method: "POST",
        body: formData,
      }
    );
    response = await response.json();
    console.log(response);
  };

  return (
    <>
   <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-blue-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Add New Course
      </h2>
      <form onSubmit={formSubmit} className="space-y-5">
        {/* Course Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-700">
            Course Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter course name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-blue-700">
            Course Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Instructor */}
        <div>
          <label htmlFor="instructor" className="block text-sm font-medium text-blue-700">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            placeholder="Enter instructor name"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-blue-700">
            Rating (0-5)
          </label>
          <input
            type="number"
            id="rating"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-blue-700">
            Price (Rs)
          </label>
          <input
            type="number"
            id="price"
            step="0.01"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Discount Price */}
        <div>
          <label htmlFor="discountPrice" className="block text-sm font-medium text-blue-700">
            Discount Price (Rs)
          </label>
          <input
            type="number"
            id="discountPrice"
            step="0.01"
            min="0"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-blue-700">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            placeholder="e.g., 10 hours"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex gap-6">
          <label className="flex items-center text-sm font-medium text-blue-700">
            <input
              type="checkbox"
              checked={isBestseller}
              onChange={(e) => setIsBestseller(e.target.checked)}
              className="mr-2 rounded focus:ring-blue-500"
            />
            Bestseller
          </label>

          <label className="flex items-center text-sm font-medium text-blue-700">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="mr-2 rounded focus:ring-blue-500"
            />
            Featured
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Submit Course
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddCourse;
