import React from "react";

export default function Extra() {
    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md w-full">
            <h1 className="text-3xl max-sm:text-2xl font-bold text-left mb-8">{"<Work />"}</h1>
            <div className="overflow-x-auto">
                <table className="text-left sm:rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 border-separate border-spacing-0 bg-transparent min-w-screen">
                    <tbody className="">
                        <tr className="flex flex-row border-y p-2 dark:bg-gray-800 bg-gray-100">
                            <th className="basis-1/3 flex items-center">
                                <a href="https://nturobotlearninglab.github.io/dbc/" target="_blank"
                                    rel="noopener noreferrer" className="dark:text-blue-300 text-blue-500 hover:underline">
                                    Taiwan Semiconductor Manufacturing Company
                                </a>
                            </th>
                            <td className="px-5 basis-2/3 flex items-center">
                                <div>
                                    <div className="text-black dark:text-white">
                                        <b>
                                            {"Title: "}
                                        </b> Machine Learning Research Engineer Intern
                                    </div>
                                    <div className="text-black dark:text-white">
                                        <b>
                                            {"Advisor: "}
                                        </b>
                                        <a href="https://www.linkedin.com/in/ken-chan-8450901b4/" target="_blank"
                                            rel="noopener noreferrer" className="dark:text-blue-300 text-blue-500 hover:underline">
                                            Ken Chan (詹鈞翔)
                                        </a>
                                    </div>
                                    <div>
                                        <b className="text-black dark:text-white">
                                            {"Dates: "}
                                        </b>
                                        Jun. 2023 - Jul. 2023
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