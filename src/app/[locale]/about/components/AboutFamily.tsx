import DOMPurify from "isomorphic-dompurify";
import LoadingImage from "../../components/shared/loadingImage";
export default function AboutFamily({ aboutData, locale }: any) {
  const cleanHtml1 = DOMPurify.sanitize(
    locale === "ar" ? aboutData[1]?.content_ar : aboutData[1]?.content
  );

  return (
    <section className="main-padding grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-4 md:gap-8 rounded-2xl">
      <div className="w-full pe-2 lg:col-span-6 flex justify-center items-center mb-6 lg:mb-0">
        <LoadingImage
          src={aboutData[1]?.image_url || "/about/familyImage.png"}
          alt="loading"
          className="rounded-2xl object-cover w-full h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full lg:col-span-6 flex flex-col justify-center text-[#F6F6F6]">
        <p className="text-base sm:text-[30px] md:text-[40px] font-[500] mb-2 leading-[120%]">
          {locale === "ar" ? aboutData[1]?.title_ar : aboutData[1]?.title}
        </p>
        <p dangerouslySetInnerHTML={{ __html: cleanHtml1 }} />
      </div>
    </section>
  );
}
