import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 py-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
