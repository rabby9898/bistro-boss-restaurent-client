import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/customMenu/CustomMenu";
import FoodTab from "../../Shared/FoodTab/FoodTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  console.log(category);

  const categoryIndex = categories.indexOf(category);

  console.log(categoryIndex);
  const [tabIndex, setTabIndex] = useState(categoryIndex);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover
        img={img}
        title={"OUR SHOP"}
        desc={"Would you like to try a dish?"}
      ></Cover>
      <div className="mx-auto text-center py-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase font-semibold text-lg text-yellow-600 hover:border-b-2 hover:border-yellow-600">
            <Tab>SALAD</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <FoodTab items={salad}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={pizza}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={soup}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={desserts}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={drinks}></FoodTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
