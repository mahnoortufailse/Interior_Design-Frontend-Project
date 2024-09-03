/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import IconPart from "./../IconPart"
const PersonInfo = ({user}) => {
  return (
    <>
       <div className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-4xl p-6 gap-20 dark:bg-gray-800">
      <img
          className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full aboutimage  md:rounded-lg h-[550px]"
          src={user.image}
          alt="Stylish Living"
        />
        <div className="flex flex-col justify-between gap-4 md:w-1/2 abouttext">
          <h5 className="text-3xl font-bold tracking-tight text-gray-900  dark:text-white max-[640px]:text-2xl">
            {user.name}
          </h5>
          <p className="text-gray-700 mb-2 dark:text-gray-400">
            Designer
          </p>
          <p className="text-gray-700 mb-4 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <div className="flex items-center gap-2">
            <img src="/Vector2.png" alt="Call Icon" width={20} height={20} />
            <p className="font-bold dark:text-gray-300">{user.phoneNo}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/vector1.png" alt="Call Icon" width={20} height={20} />
            <p className="font-bold dark:text-gray-300">{user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/vector3.png" alt="Call Icon" width={20} height={20} />
            <p className="font-bold dark:text-gray-300">{user.link}</p>
          </div>
          <div className="">
          <IconPart/>
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}

export default PersonInfo