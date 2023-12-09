import React from "react";

export default function Education() {


    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md w-full">
            <h1 className="text-3xl font-bold text-center mb-8">{"<Education />"}</h1>
            <div className="overflow-x-auto">
                <table className="text-left sm:rounded-lg text-base align-middle text-gray-500 dark:text-gray-300 border-separate border-spacing-0 bg-transparent min-w-screen">
                    <tbody className="">
                        <tr className="flex flex-row border-y p-2 dark:bg-gray-800 bg-gray-100">
                            <th className="basis-2/6 flex items-center">
                                <a href="https://illinois.edu/" target="_blank"
                                    rel="noopener noreferrer" className="dark:text-blue-300 text-blue-500 hover:underline">
                                    University of Illinois at Urbana Champaign
                                </a>
                            </th>
                            <td className="px-5 basis-4/6 flex items-center">
                                <div>
                                    <div className="text-black dark:text-white">
                                        <b>
                                            Exchange Program
                                        </b> in Electrical and Computer Engineering
                                    </div>
                                    <div>
                                        Aug. 2023 - Dec. 2023
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="flex flex-row border-b p-2">
                            <th className="basis-2/6 flex items-center">
                                <a href="https://www.ntu.edu.tw/english/" target="_blank"
                                    rel="noopener noreferrer" className="dark:text-blue-300 text-blue-500 hover:underline">
                                    National Taiwan University
                                </a>
                            </th>
                            <td className="px-5 basis-4/6 flex items-center">
                                <div>
                                    <div className="text-black dark:text-white">
                                        <b>
                                            Bachelor of Science in Engineering
                                        </b> at Electrical Engineering
                                    </div>
                                    <div>
                                        Sep. 2020 - Jun. 2024
                                    </div>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}