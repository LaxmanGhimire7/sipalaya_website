import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AllCourses() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const getCourse = async () => {
    let response = await fetch("http://localhost:9000/api/course/getAllCourse");
    response = await response.json();
    console.log(response.response);
    setCourse(response.response);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="p-9 ml-28 ">
      <div>
        {course.length > 0 ? (
          <div className="flex flex-wrap gap-12">
            {course.map((item) => {
              return (
                <div onClick={()=>{
                    navigate('/CourseDetails',{
                       state: {...item},
                    });
                }}
                  key={item._id}
                  className="w-[380px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={`http://localhost:9000/image/${item.image}`}
                    alt={item.name}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-4 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      Instructor: {item.instructor}
                    </p>

                    <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                      {Array.from({ length: 5 }, (_, i) => {
                        const r = item.rating;
                        if (r >= i + 1) return <FaStar key={i} />;
                        else if (r >= i + 0.5) return <FaStarHalfAlt key={i} />;
                        else
                          return (
                            <FaRegStar key={i} className="text-gray-300" />
                          );
                      })}
                      <span className="ml-2 text-gray-600 font-medium">
                        {item.rating}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      {item.discountPrice < item.price && (
                        <span className="text-sm text-red-400 line-through">
                          Rs {item.price}
                        </span>
                      )}
                      <span className="text-xl font-bold text-gray-800">
                        Rs {item.discountPrice}
                      </span>
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

                    <p className="text-sm text-gray-500 mb-4">
                      Duration: {item.duration} months
                    </p>

                    {/* Enroll Button */}
                    <button
                      onClick={() => navigate(`/course/${item._id}`)}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 w-full rounded-md transition mb-2"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default AllCourses;
