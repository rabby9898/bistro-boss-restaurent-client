import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setPopular(popularItem);
      });
  }, []);
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
