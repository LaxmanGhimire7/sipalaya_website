import Slider from "react-slick";
import homebackground from "../images/homebackground.png";
import homeagain from "../images/homeagain.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import ChoosingSipalaya from "./ChoosingSipalaya";
import Footer from "./Footer";

function Home() {
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
        className=" relative shadow-2xl shadow-gray-100"
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

                    <button className="mt-8 flex gap-2  items-center bg-gradient-to-r from-blue-600 to-blue-950 text-white  rounded-full text-sm p-3 font-medium ">
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
            <img src={homeagain} alt="IT Training" className="max-h-[90vh] " />
          </div>
        </div>

        {/* Another Section Start yeta bata */}
        <div className="flex p-20 justify-center gap-20">
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
        
        <Footer />
      </div>
      
    </>
  );
}

export default Home;
