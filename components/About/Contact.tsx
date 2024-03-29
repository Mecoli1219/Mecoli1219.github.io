import React from "react";

export default function Contact() {


    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md text-left w-full">
            <h1 className="text-3xl font-bold text-center mb-4">{"<Contact />"}</h1>
            <div className="flex justify-center">
                <div className="text-base text-gray-500 dark:text-gray-300 ">
                    <div className=" font-bold  flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline h-5 w-7 m-auto pr-2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div className="max-sm:hidden">
                            Email:
                        </div>
                        <a href="mailto:michaellai901026@gmail.com" className="dark:text-blue-300 text-blue-500 font-normal hover:underline basis-full break-words ml-10 max-sm:ml-1">
                            michaellai901026@gmail.com
                        </a>
                    </div>
                    <div className=" font-bold flex flex-row">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline h-5 w-7 m-auto pr-2"
                            viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        <div className="max-sm:hidden">
                            LinkedIn:
                        </div>
                        <a href="https://www.linkedin.com/in/chun-mao-lai-aa1966229" className="dark:text-blue-300 text-blue-500 font-normal hover:underline basis-full ml-4 max-sm:ml-1">
                            Chun-Mao Lai
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}