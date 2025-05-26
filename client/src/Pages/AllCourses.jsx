import { useEffect, useState } from "react";
import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AllCourses() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  
  const getCourse = async () => {
    let response = await fetch("http://localhost:9000/api/course/getAllCourse");
    response = await response.json();
    setCourse(response.response);
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="p-8 min-h-screen ">
      <div className=" mx-auto">
        {course.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-12">
            {course.map((item) => (
              <div 
                key={item._id}
                onClick={() => navigate('/CourseDetails', { state: {...item} })}
                className=" w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`http://localhost:9000/image/${item.image}`}
                    alt={item.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.isBestseller && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                        Bestseller
                      </span>
                    )}
                    {item.isFeatured && (
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-800 truncate">{item.name}</h2>
                    <p className="text-sm text-gray-600 mt-1 font-medium">By {item.instructor}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }, (_, i) => {
                        const r = item.rating;
                        if (r >= i + 1) return <FaStar key={i} className="w-5 h-5" />;
                        else if (r >= i + 0.5) return <FaStarHalfAlt key={i} className="w-5 h-5" />;
                        else return <FaRegStar key={i} className="w-5 h-5 text-gray-200" />;
                      })}
                    </div>
                    <span className="text-sm font-medium text-gray-500">({item.rating})</span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    {item.discountPrice < item.price && (
                      <span className="text-sm text-gray-400 line-through">₹{item.price}</span>
                    )}
                    <span className="text-2xl font-medium  bg-clip-text text-orange-600">
                      Rs.{item.discountPrice}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full font-semibold">
                      ⏳ {item.duration} months
                    </span>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/course/${item._id}`);
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="aspect-square p-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center justify-center hover:border-blue-700 hover:text-blue-700"
                    >
                      <FaShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <div className="text-2xl text-gray-400 animate-pulse">
              Loading Courses...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllCourses;