import Slider from "react-slick";
import homebackground from "../images/homebackground.png";
import homeagain from "../images/homeagain.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import ChoosingSipalaya from "./ChoosingSipalaya";
import Footer from "./Footer";
import AllCourses from "./AllCourses";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
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

  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 text-2xl bg-white text-blue-950 rounded-full p-2  hover:bg-blue-950 hover:text-white transition-all ${
        direction === "prev" ? "-left-20" : "-right-6"
      }`}
    >
      {direction === "prev" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );

  const slides = [
    {
      title: "Web Development",
      subtitle: "Master Full-Stack Development",
      content: "Learn MERN stack with real-world projects",
      gradient: "from-blue-500 to-cyan-400",
      badge: "🔥 Hot Course",
    },
    {
      title: "Special Offer!",
      subtitle: "Limited Time Discount",
      content: "Get 15% off on January enrollments",
      gradient: "from-blue-800 to-violet-950",
      badge: "⏳ Ending Soon",
    },
    {
      title: "New Launch",
      subtitle: "Python & Data Science",
      content: "Start your AI/ML journey today",
      gradient: "from-orange-500 to-yellow-400",
      badge: "🎉 Just Added",
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: ` url(${homebackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
        className=" relative "
      >
        <div className="flex justify-between items-center h-full  z-10">
          <div className="pl-48 w-[800px] -mt-24 relative ">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="text-white ">
                  {slide && (
                    <span className="mb-4 inline-block bg-gradient-to-r from-blue-600 to-blue-950 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                      {slide.badge}
                    </span>
                  )}

                  <h1
                    className={`text-6xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {slide.title}
                  </h1>
                  <h2 className="text-4xl font-semibold text-white mt-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl text-white mt-6 max-w-2xl leading-relaxed">
                    {slide.content}
                  </p>

                  <div className="gap-7 flex w-fit  justify-center text-center">
                    <button className="mt-8 flex gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-full text-sm p-3 font-medium ">
                      Enroll Now <FaArrowCircleRight />
                    </button>

                    <button
                      onClick={() => {
                        navigate("/allCourses");
                      }}
                      className="mt-8 flex gap-2  items-center bg-gradient-to-r from-blue-600 to-blue-950 text-white  rounded-full text-sm p-3 font-medium "
                    >
                      View Courses <FaArrowCircleRight />
                    </button>

                    <button className="mt-8 flex items-center gap-2  bg-gradient-to-r from-blue-600 to-blue-950 text-white  rounded-full text-sm p-3 font-medium">
                      Schedule a Demo <FaArrowCircleRight />
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="pr-16 ">
            <img src={homeagain} alt="IT Training" className="max-h-[90vh]" />
          </div>
        </div>

        {/* Another Section Start yeta bata */}
        <div className="flex p-20 justify-center gap-20 shadow-blue-100 shadow-2xl">
          {/* Card 1 */}
          <div className="group shadow-2xl p-4 h-32 w-96 cursor-pointer rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Be Your Own Boss
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Embrace Independence: Be Your Own <br /> Boss and Shape Your
                Future!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group shadow-2xl cursor-pointer p-4 h-32 w-96 rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Reach Your Career Goals
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Strive for Success: Reach Your Career <br /> Goals and Unlock
                Your Potential
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group shadow-2xl p-4 cursor-pointer h-32 w-96 rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Get Hired
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Validate Your Skills, Open Doors: Earn <br />
                Industry-Recognized Certificates!
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <ChoosingSipalaya />

        {/* Calling the course */}
        <div>
          <h1 className="font-semibold text-2xl text-center ">
            Our Featured Course
          </h1>
          <div className="flex flex-wrap gap-12 justify-center mt-10">
            {course.slice(0, 6).map((item) => {
              return (
                <div
                  key={item._id}
                  onClick={() =>
                    navigate("/CourseDetails", { state: { ...item } })
                  }
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
                      <h2 className="text-xl font-extrabold text-gray-800 truncate">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1 font-medium">
                        By {item.instructor}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {Array.from({ length: 5 }, (_, i) => {
                          const r = item.rating;
                          if (r >= i + 1)
                            return <FaStar key={i} className="w-5 h-5" />;
                          else if (r >= i + 0.5)
                            return (
                              <FaStarHalfAlt key={i} className="w-5 h-5" />
                            );
                          else
                            return (
                              <FaRegStar
                                key={i}
                                className="w-5 h-5 text-gray-200"
                              />
                            );
                        })}
                      </div>
                      <span className="text-sm font-medium text-gray-500">
                        ({item.rating})
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      {item.discountPrice < item.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{item.price}
                        </span>
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
              );
            })}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/allCourses")}
              className="bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-full px-6 py-3 text-sm font-medium hover:scale-105 transition-transform"
            >
              Explore All Courses
            </button>
          </div>
        </div>
        {/* This is for fotter */}

        <Footer />
      </div>
    </>
  );
}

export default Home;
