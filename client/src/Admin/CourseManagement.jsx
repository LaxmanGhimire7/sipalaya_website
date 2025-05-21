import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CourseManagement() {
  const [courseList, setCourseList] = useState([]);
  const navigate = useNavigate();
  const getCourse = async () => {
    let response = await fetch("http://localhost:9000/api/course/getAllCourse");
    response = await response.json();
    console.log(response.response);
    setCourseList(response.response);
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div>
      <NavLink to="addCourse">Add Course</NavLink>
      <div>
         {courseList.length>0 ?
          (<div>
            {courseList.map((item)=>{
              return(
                <div key={item._id}>
                <img
                      className="h-20"
                      src={`http://localhost:9000/image/${item.image}`}
                      alt=""
                    />
                    <div>
                      <h1>{item.name}</h1>
                    </div>
                </div>
              )
            })}
          </div>)
           : 
         (<div>Loading</div>)}
      </div>
    </div>
  );
}

export default CourseManagement;
