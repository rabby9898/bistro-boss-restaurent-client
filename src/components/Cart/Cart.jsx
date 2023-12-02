import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts/useCarts";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/AxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="flex justify-center ml-10 gap-40">
        <h1 className="text-3xl">Item:{cart.length}</h1>
        <h1 className="text-3xl">Total Price:{totalPrice}</h1>
        {cart.length ? (
          <Link to={`/dashboard/payment`}>
            <button className="btn btn-primary">Make Payment</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Make Payment
          </button>
        )}
      </div>
      <div className="overflow-x-auto ml-10 w-full">
        <table className="table mt-10">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
