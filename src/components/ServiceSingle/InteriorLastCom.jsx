/* eslint-disable react/no-unescaped-entities */
import Button2 from "../AboutComponent/Button2"
const InteriorLastCom = () => {
  return (
    <>
       <div className="flex flex-col gap-4 items-center justify-center h-auto px-4 py-7">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-4xl p-8 gap-12 dark:bg-gray-800 max-[640px]:flex-col-reverse">
        <img
            className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full about-image  md:rounded-3xl"
            src="/InterioPage2.png"
            alt="Stylish Living"
          />
          <div className="flex flex-col justify-between gap-6 md:w-1/2 about-text">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">
            We love design.That's how we got here.
            </h5>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by the of readable content.
            </p>
            <Button2 name={"Our Portfolio"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default InteriorLastCom