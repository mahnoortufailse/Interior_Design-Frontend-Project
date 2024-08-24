/* eslint-disable react/prop-types */
const HeroAll = ({data}) => {
  return (
    <>
      <div className="relative w-full">
      <img
        src={data.image}
        alt="bag"
        className="hero-image w-full h-auto object-cover max-[640px]:h-[340px]"
      />
      <div className="absolute inset-10 flex flex-col justify-center items-start p-6 text-left lg:px-48 lg:py-5 sm:px-4 py-7 sm:py-6 max-[639px]:py-5 md:px-8 max-[639px]:px-5 dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-black/70">
        <div className="relative z-10 max-w-screen-xl w-[340px] hero-text bg-white max-[640px]:w-[190px] dark:bg-gray-800">
          <h1 className="text-[#292F36] font-semibold lg:text-7xl sm:text-5xl md:text-6xl max-[639px]:text-3xl dark:text-slate-400 p-3">
            {data.text}
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroAll