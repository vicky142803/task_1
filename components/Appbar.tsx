import Image from 'next/image'
import React from 'react'

const Appbar = () => {
  return(
    <div>
        <nav className="bg-white border-gray-400 border-y-2 gap-4 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="https://github.com/manideep1428" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/appbarImage.png" width={80} height={80} className="rounded-full m-2" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Learn With Cards</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="/" className="block py-2 px-3 text-white text-xl  bg-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="/admin" className="block py-2 px-3 text-gray-900 text-xl  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                 Admin
                </a>
            </li>
            <li>
                <a href="https://github.com/manideep1428/task_1" className="block py-2 px-3 text-xl  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                 Github
                </a>
            </li>
            <li>
                <a href="https://portfolio-tfp2-eight.vercel.app/" className="block  py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Appbar