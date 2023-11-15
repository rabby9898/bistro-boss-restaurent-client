import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../Hooks/customMenu/CustomMenu";

const Popular = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        subTitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-8 py-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Popular;
