import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./NavBar/Navigation";
import AboutUs from "./Pages/AboutUs";
import ChoosingSipalaya from "./Pages/ChoosingSipalaya";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import TermsAndConditions from "./Pages/TermsAndCondition";
import UserProfile from "./Pages/UserProfile";
import Dashboard from "./Admin/Dashboard";
import UserManagement from "./Admin/UserManagement";
import CourseManagement from "./Admin/CourseManagement";
import AddCourse from "./Admin/AddCourse";
import EditCourse from "./Admin/EditCourse";
import ProtectedRoute from "./Pages/ProtectedRoutes";
import CourseDetails from "./Pages/CourseDetails";
import AdminHome from "./Admin/AdminHome";
import AllCourses from "./Pages/AllCourses";




function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
  {/* Public Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/allCourses" element={<AllCourses />} />
  <Route path="/userProfile" element={<UserProfile />} />
  <Route path="/students-login" element={<Login />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/choosingSipalaya" element={<ChoosingSipalaya />} />
  <Route path="/footer" element={<Footer />} />
  <Route path="/termsAndConditions" element={<TermsAndConditions />} />
  <Route path="/courseDetails" element={<CourseDetails />} />

  {/* Admin Protected Routes */}
  <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
    <Route path="/dashboard" element={<Dashboard />}>
      <Route index element={<AdminHome />} />
      <Route path="adminHome" element={<AdminHome />} />
      <Route path="course" element={<CourseManagement />} />
      <Route path="user" element={<UserManagement />} />
      <Route path="course/addCourse" element={<AddCourse />} />
      <Route path="course/editCourse" element={<EditCourse />} />
    </Route>
  </Route>

  {/* Instructor Protected Routes */}
  <Route element={<ProtectedRoute allowedRoles={['instructor', 'admin']} />}>
    <Route path="/instructor-dashboard" element={<Dashboard />}>
      <Route index element={<h2>Instructor Dashboard</h2>} />
    </Route>
  </Route>

  {/* Student Protected Routes */}
  <Route element={<ProtectedRoute allowedRoles={['student', 'admin', 'instructor']} />}>
    <Route path="/student-dashboard" element={<Dashboard />}>
      <Route index element={<h2>Student Dashboard</h2>} />
    </Route>
  </Route>
</Routes>


      
    </div>
  );
}

export default App;
