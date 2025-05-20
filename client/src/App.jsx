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
import AllCourse from "./Pages/AllCourse";
import UserProfile from "./Pages/UserProfile";
import Dashboard from "./Admin/Dashboard";
import UserManagement from "./Admin/UserManagement";
import CourseManagement from "./Admin/CourseManagement";
import AddCourse from "./Admin/AddCourse";




function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/allCourse" element={<AllCourse />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/students-login" element={<Login />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/ChoosingSipalaya" element={<ChoosingSipalaya />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />

        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="course" element={<CourseManagement />} />
          <Route index element={<CourseManagement />} />
          <Route path="user" element={<UserManagement />} />
         <Route path="addCourse" element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
