import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img, desc }) => {
  return (
    <div>
      {<Cover img={img} title={title} desc={desc}></Cover>}

      <div className="grid grid-cols-2 gap-8 py-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mx-auto text-center">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-primary px-4 w-fit bg-base-100 uppercase border-b-4 border-b-yellow-500 border-0  hover:border-b-yellow-500 hover:border-b-4 text-yellow-500 hover:bg-black hover:text-yellow-500 mb-6">
            order your favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
