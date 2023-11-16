const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
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
            <button className="btn btn-primary px-8 bg-base-100 uppercase border-b-4 border-b-yellow-500 border-0  hover:border-b-yellow-500 hover:border-b-4 text-yellow-500 hover:bg-black hover:text-yellow-500">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
