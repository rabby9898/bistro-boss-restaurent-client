import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import useCarts from "../../Hooks/useCarts/useCarts";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCarts();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login your account?",
        text: "unable to add",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    //   fetch("http://localhost:5000/carts", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(item),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.insertedId) {
    //
    //       }
    //     });
    // } else {
    //   Swal.fire({
    //     title: "Please Login your account?",
    //     text: "unable to add",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Login",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       navigate("/login");
    //     }
    //   });
    // }
  };
  return (
    <div>
      <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
        <img src={image} alt="Shoes" className="" />

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="absolute right-0 top-0 mr-5 mt-8 text-white bg-black px-8 py-2">
            {price}
          </p>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary px-8 bg-base-100 uppercase border-b-4 border-b-yellow-500 border-0  hover:border-b-yellow-500 hover:border-b-4 text-yellow-500 hover:bg-black hover:text-yellow-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
