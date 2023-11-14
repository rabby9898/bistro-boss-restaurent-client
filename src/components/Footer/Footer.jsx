const Footer = () => {
  return (
    <div>
      <div className=" grid grid-cols-2">
        <div className="col-span-1 bg-[#1f2937] text-white text-center py-10">
          <h1 className="text-3xl mb-6">Contact Us</h1>
          <p className="text-base mt-4">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00 <br />
          </p>
        </div>
        <div className=" col-span-1 bg-[#111827] text-white text-center py-10">
          <h1 className="text-3xl mb-6">Follow Us</h1>
          <p className=" mt-4">Join us on social media</p>
        </div>
      </div>

      <div className="bg-[#151515] w-full">
        <p className="text-center text-white py-4">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
