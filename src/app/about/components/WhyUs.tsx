import Image from "next/image";
export default function WhyUs({ aboutWhy }: any) {
  return (
    <section className="x-padding">
      <div className="max-w-5xl mx-auto text-center mb-[30px] md:mb-[60px] px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl text-[#E0E0E0] max-w-2xl mx-auto">
          We're not just another marketing agency. We're your strategic partners
          in building a brand that resonates across the digital universe.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
        {aboutWhy?.map(
          (
            card: { icon_url: string; title: string; description: string },
            idx: number
          ) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#979696] shadow-lg bg-[linear-gradient(to_right,_#210039,_#590997)] p-6 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 "
            >
              <div className="w-[55px] h-[55px] mb-6 flex items-center justify-center rounded-full bg-[#F0F0F0]">
                <Image
                  src={card.icon_url || "/about/Vector (5).svg"}
                  alt="loading"
                  width={29}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
              </div>
              <h3 className="text-[22px] md:text-[25px] font-[500] text-white mb-3 uppercase text-left ">
                {card.title}
              </h3>
              <p className="text-base md:text-[18px] text-[#CFCFCF] opacity-90 text-left font-[500]">
                {card.description}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
