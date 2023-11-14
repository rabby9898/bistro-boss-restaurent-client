const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mx-auto py-8">
      <p className="text-[#D99904] italic text-base mb-4">{subTitle}</p>
      <h1 className="text-4xl text-[#151515] font-normal border-y-4 w-1/4 mx-auto py-3">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
