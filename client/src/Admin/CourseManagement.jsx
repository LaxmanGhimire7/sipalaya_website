import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";


function CourseManagement() {
  const [courseList, setCourseList] = useState([]);
  const navigate = useNavigate();

  const getCourse = async () => {
    try {
      let response = await fetch("http://localhost:9000/api/course/getAllCourse");
      response = await response.json();
      setCourseList(response.response);
    } catch (error) {
      console.error("Error fetching course list:", error);
    }
  };

  const deleteCourse =async (id)=>{
try {
  let response = await fetch (`http://localhost:9000/api/course/deleteCourse/${id}`,{
    method:"DELETE",
  })
  if(!response.ok){
    console.log("error")
    alert("error");
    return;
  };
  response = await response.json();
  console.log(response);
  alert("Course Deleted");
  getCourse();

} catch (error) {
  console.log(error)
}
  }

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="px-8 py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
        <NavLink
          to="addCourse"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow transition"
        >
          ➕ Add New Course
        </NavLink>
      </div>

      <div className="flex flex-wrap gap-8">
        {courseList.length > 0 ? (
          courseList.map((item) => (
            <div
              key={item._id}
              className="w-[350px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={`http://localhost:9000/image/${item.image}`}
                alt={item.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-2">Instructor: {item.instructor}</p>

                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const r = item.rating;
                    if (r >= i + 1) return <FaStar key={i} />;
                    else if (r >= i + 0.5) return <FaStarHalfAlt key={i} />;
                    else return <FaRegStar key={i} className="text-gray-300" />;
                  })}
                  <span className="ml-2 text-gray-600 font-medium">{item.rating}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  {item.discountPrice < item.price && (
                    <span className="text-sm text-red-400 line-through">Rs {item.price}</span>
                  )}
                  <span className="text-xl font-bold text-gray-800">Rs {item.discountPrice}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.isBestseller && (
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                  {item.isFeatured && (
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 mb-4">Duration: {item.duration} months</p>

                {/* Enroll Button */}
                <button
                  onClick={() => navigate(`/course/${item._id}`)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 w-full rounded-md transition mb-2"
                >
                  Enroll Now
                </button>

                {/* Edit and Delete Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={()=>{
                      navigate("editCourse", {state:{...item}})
                    }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-md transition"
                  >
                    <CiEdit /> Edit
                  </button>
                  <button onClick={()=>{
                    deleteCourse(item._id);
                  }}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-md transition"
                  >
                     Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-full py-12 text-gray-600">Loading courses...</div>
        )}
      </div>
    </div>
  );
}

export default CourseManagement;
