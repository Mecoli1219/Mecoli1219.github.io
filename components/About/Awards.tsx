import React from "react";

export default function Awards() {


    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-left mb-8">{"<Awards />"}</h1>
            <table className="text-left sm:rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 border-separate border-spacing-0 bg-transparent">
                <tbody className="">
                    <tr className="flex flex-row border-y px-2 dark:bg-gray-800 bg-gray-100 p-2">
                        <th className="w-16 flex items-center">
                            2023
                        </th>
                        <th className="basis-5/12 dark:text-blue-300 text-blue-500 flex items-center">
                            NTUEE Undergraduate Innovation Award <br /> (臺大電機系精專獎)
                        </th>
                        <td className="px-5 basis-7/12 flex items-center">
                            Third Prize Project
                        </td>
                    </tr>
                    <tr className="flex flex-row border-b px-2 p-2">
                        <th className="w-16 flex items-center">
                            2020
                        </th>
                        <th className="basis-5/12 dark:text-blue-300 text-blue-500 flex items-center">
                            Presidential Award <br /> (臺大電機系書卷獎)
                        </th>
                        <td className="px-5 basis-7/12 flex items-center">
                            Ranking 3 / 182 in 2020 Fall Semester
                        </td>
                    </tr>
                    <tr className="flex flex-row border-b px-2 dark:bg-gray-800 bg-gray-100 p-2">
                        <th className="w-16 flex items-center">
                            2016
                        </th>
                        <th className="basis-5/12 dark:text-blue-300 text-blue-500 flex items-center">
                            International Junior Science Olympiad (IJSO)
                        </th>
                        <td className="px-5 basis-7/12 flex items-center">
                            <div>
                                <b className="text-black dark:text-white">3 Personal Gold Medals:</b> Highest personal score among all international participants. <br />
                                <b className="text-black dark:text-white">1 Team Gold Medal:</b> Highest team score among all countries.
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}