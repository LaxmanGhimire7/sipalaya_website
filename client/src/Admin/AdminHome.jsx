import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

function AdminHome() {
  const [latestCourses, setLatestCourses] = useState([]);

  const getCourses = async () => {
    try {
      let res = await fetch("http://localhost:9000/api/course/getAllCourse");
      let data = await res.json();
      // Get latest 5
      const latest = data.response.slice(-5).reverse();
      setLatestCourses(latest);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const salesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales (in Rs)',
        data: [12000, 19000, 3000, 5000, 20000],
        backgroundColor: 'rgba(59,130,246,0.6)',
      },
    ],
  };

  const courseCategoryData = {
    labels: ['Web Dev', 'Design', 'Marketing', 'Others'],
    datasets: [
      {
        label: 'Course Categories',
        data: [12, 7, 5, 3],
        backgroundColor: ['#60a5fa', '#f87171', '#34d399', '#fbbf24'],
      },
    ],
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <Bar data={salesChartData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Course Categories</h3>
          <Pie data={courseCategoryData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recently Added Courses</h3>
        <ul className="space-y-3">
          {latestCourses.map((course) => (
            <li key={course._id} className="border-b pb-2">
              <div className="font-medium text-gray-800">{course.name}</div>
              <div className="text-sm text-gray-500">Instructor: {course.instructor}</div>
              <div className="text-sm text-gray-500">Price: Rs {course.discountPrice}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;
