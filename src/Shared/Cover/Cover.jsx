import { Parallax } from "react-parallax";
const Cover = ({ img, title, desc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        // style={{
        //   backgroundImage: ` url("${img}")`,
        // }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-black bg-opacity-40 w-[800px] py-20 px-10">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
