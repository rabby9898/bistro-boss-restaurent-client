import { Helmet } from "react-helmet-async";
import img from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/customMenu/CustomMenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import dessertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <MenuCategory
          items={offered}
          img={img}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        ></MenuCategory>

        <MenuCategory
          items={desserts}
          img={dessertsImg}
          title={"DESSERTS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>

        <MenuCategory
          items={pizza}
          img={pizzaImg}
          title={"PIZZA"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>

        <MenuCategory
          items={salad}
          img={saladImg}
          title={"SALADS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>

        <MenuCategory
          items={soup}
          img={soupImg}
          title={"SOUPS"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
