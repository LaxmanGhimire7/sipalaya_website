import {
  
    FaChalkboardTeacher,
    FaClock,
    FaBuilding,
    FaCode,
    FaHandshake,
    FaRupeeSign,
    FaStar,
    FaUserGraduate,
  } from "react-icons/fa";
  import homebackground from "../images/homebackground.png";
  
  function ChoosingSipalaya() {
    const stats = [
      {
        icon: <FaUserGraduate className="text-blue-500 text-3xl mr-2" />,
        number: "5K+",
        title: "Students Graduated",
        description:
          "Over 5,000 students have successfully graduated from Sipalaya, marking a significant achievement in education and community development.",
      },
      {
        icon: <FaChalkboardTeacher className="text-blue-500 text-3xl mr-2" />,
        number: "30+",
        title: "Industry Mentors",
        description:
          "Sipalaya boasts 30+ industry mentors who provide expert guidance and real-world insights to students.",
      },
      {
        icon: <FaClock className="text-blue-500 text-3xl mr-2" />,
        number: "Flexible",
        title: "Time",
        description:
          "Sipalaya offers flexible class timings, allowing students to learn at their own pace and convenience.",
      },
      {
        icon: <FaBuilding className="text-blue-500 text-3xl mr-2" />,
        number: "50+",
        title: "Hiring Partners",
        description:
          "Sipalaya has partnered with 50+ hiring companies, ensuring excellent job opportunities for its graduates.",
      },
      {
        icon: <FaCode className="text-blue-500 text-3xl mr-2" />,
        number: "500+",
        title: "Coding Questions",
        description:
          "Sipalaya provides access to 500+ interview coding questions to help students excel in technical assessments and job interviews.",
      },
      {
        icon: <FaHandshake className="text-blue-500 text-3xl mr-2" />,
        number: "1:1",
        title: "Career Support",
        description:
          "Sipalaya offers dedicated 1:1 career support to help students achieve their professional goals with personalized guidance.",
      },
      {
        icon: <FaRupeeSign className="text-blue-500 text-3xl mr-2" />,
        number: "3L-10L",
        title: "Salary Range",
        description:
          "Graduates from Sipalaya earn competitive salaries ranging from ₹3L to ₹10L per annum, reflecting the high-quality education and industry-relevant skills they acquire.",
      },
      {
        icon: <FaStar className="text-blue-500 text-3xl mr-2" />,
        number: "Expert",
        title: "Instructors",
        description:
          "Sipalaya's expert instructors bring industry experience and in-depth knowledge to provide top-quality education.",
      },
    ];
  
    return (
      <div
        style={{
          backgroundImage: `url(${homebackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Why Choose Us?
          </h2>
  
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 shadow-md p-6 h-72 w-72 rounded-2xl border border-gray-200 backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  {stat.icon}
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
  
                <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
                <p className="mt-4 text-gray-700 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ChoosingSipalaya;
  