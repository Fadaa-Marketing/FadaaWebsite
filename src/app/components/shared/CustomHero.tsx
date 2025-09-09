const CustomHero = ({
  title,
  description,
  clssremover = "sec-porto",
}: {
  title: string;
  description: string;
  clssremover?: string;
}) => {
  return (
    <div
      className={`pt-48 flex flex-col gap-6 items-center justify-center max-w-[966px] place-self-center text-center ${clssremover} `}
    >
      <h1 className="title-button "> {title} </h1>
      <h1 className="secondary-title pb-6 font-normal"> {description} </h1>
    </div>
  );
};

export default CustomHero;
