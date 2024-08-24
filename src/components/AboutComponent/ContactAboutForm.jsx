/* eslint-disable react/no-unescaped-entities */
const ContactAboutForm = () => {
  return (
    <>
      <div>
      <div className="my-8 mx-auto max-w-xl bg-white font-[sans-serif] p-10 dark:bg-gray-800 text-center">
      <h1 className="text-3xl text-gray-800 font-bold text-center dark:text-white">Creative project? Let's have
      a productive talk.</h1>
      <form className="mt-12 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="text-start">
          <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-2 block p-2 ps-5 text-xs text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="text-start">
          <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-2 block p-2 ps-5 text-xs text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div className="text-start"> 
          <textarea placeholder='Hello Iam Intrested in....' rows="6"
            className=" w-full rounded-md py-2.5 px-2 block p-1 ps-5 text-xs text-gray-900 border border-gray-300  bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
        <button type='button'
          className="text-white bg-gray-950 hover:bg-gray-600 font-semibold rounded-md text-sm px-6 py-3 w-[200px] ">Send Now</button>
      </form>
    </div>
      </div>
    </>
  )
}

export default ContactAboutForm