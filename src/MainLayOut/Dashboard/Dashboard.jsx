import { NavLink, Outlet } from "react-router-dom";
import {
  FaBookmark,
  FaHistory,
  FaHome,
  FaList,
  FaQuoteLeft,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCarts from "../../Hooks/useCarts/useCarts";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";
const Dashboard = () => {
  const [cart] = useCarts();

  // TODOs
  const [isAdmin] = useIsAdmin();

  return (
    <div className="flex pt-28 w-full">
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li className="my-5 ">
                    <NavLink to="/dashboard/adminHome">
                      <FaHome /> Admin Home
                    </NavLink>
                  </li>
                  <li className="my-5 ">
                    <NavLink to="/dashboard/addItems">
                      <FaUtensils />
                      Add Items
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/manageItems">
                      <FaList /> Manage Items
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/manageBookings">
                      <FaBookmark /> Manage Bookings
                    </NavLink>
                  </li>

                  <li className="my-5">
                    <NavLink to="/dashboard/allUsers">
                      <FaUsers /> All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="my-5 ">
                    <NavLink to="/dashboard/userHome">
                      <FaHome /> User Home
                    </NavLink>
                  </li>
                  <li className="my-5 ">
                    <NavLink to="/dashboard/reservation">
                      <FaBookmark />
                      Reservation
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/cart">
                      <FaShoppingCart /> My Cart ({cart.length})
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/payment">
                      <FaHistory /> Make Payment
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/history">
                      <FaHistory /> Payment History
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/addReview">
                      <FaQuoteLeft /> Add Review
                    </NavLink>
                  </li>
                  <li className="my-5">
                    <NavLink to="/dashboard/myBooking">
                      <FaBookmark /> My Booking
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider"></div>

              <li className="my-5">
                <NavLink to="/dashboard">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink to="/dashboard/menu">
                  <FaSearch /> Menu
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
