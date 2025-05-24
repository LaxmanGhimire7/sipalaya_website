import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";



function CourseDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const {dispatch} = useContext(CartContext);

    const course = location.state;
    
  return (
    <div>
      hhuhu
    </div>
  )
}

export default CourseDetails
