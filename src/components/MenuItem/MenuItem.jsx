const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="flex gap-6">
        <div>
          <img
            style={{ borderRadius: "0px 200px 200px 200px" }}
            className="w-[100px]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex">
          <div>
            <h1 className="uppercase text-lg font-semibold">
              {name} ---------
            </h1>
            <p className="text-base text-[#737373]">{recipe}</p>
          </div>
          <p className="text-base text-[#BB8506]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
