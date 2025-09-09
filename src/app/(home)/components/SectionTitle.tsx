

const SectionTitle = ({title,text}:{title:string , text:string}) => {
  return (
    <div className="text-center flex flex-col gap-3 mb-4 md:mb-6 xl:mb-10 ">
            <h1 className="main-title-paragraph text-[#8B18E7] "> {title} </h1>
            <h2 className="secondary-title ">{text}</h2>
        </div>
  )
}

export default SectionTitle
