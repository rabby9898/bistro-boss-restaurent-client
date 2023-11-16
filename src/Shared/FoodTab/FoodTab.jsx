import FoodCard from "../../components/FoodCard/FoodCard";

const FoodTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default FoodTab;
