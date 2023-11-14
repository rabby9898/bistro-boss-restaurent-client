import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-10">
      <div className="py-10">
        <SectionTitle
          subTitle={"------Check it out------"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex justify-center items-center gap-8 py-8 px-20">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="text-white">
            <h5 className="text-lg mb-4">March 20, 2023</h5>
            <h1 className="text-xl my-4">WHERE CAN I GET SOME?</h1>
            <p className="text-base mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn bg-transparent border-0 uppercase text-white text-base border-b-4 border-white mt-6 rounded-md py-3 px-6 hover:bg-black">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
