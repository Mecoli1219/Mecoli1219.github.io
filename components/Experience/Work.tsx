import React from 'react';

export default function Work() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'<Industry />'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 max-sm:text-sm max-[400px]:text-xs sm:rounded-lg">
          <tbody className="">
            <tr className="flex flex-row border-y bg-gray-100 p-2 dark:bg-gray-800">
              <th className="flex basis-1/3 items-center max-[360px]:basis-1/2">
                <a
                  href="https://nturobotlearninglab.github.io/dbc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline dark:text-blue-300"
                >
                  Taiwan Semiconductor Manufacturing Company
                </a>
              </th>
              <td className="flex basis-2/3 items-center px-5 max-[360px]:basis-1/2">
                <div>
                  <div className="text-black dark:text-white">
                    <b>{'Title: '}</b> Machine Learning Research Engineer Intern
                  </div>
                  <div className="text-black dark:text-white">
                    <b>{'Advisor: '}</b>
                    <a
                      href="https://www.linkedin.com/in/ken-chan-8450901b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline dark:text-blue-300"
                    >
                      Ken Chan (詹鈞翔)
                    </a>
                  </div>
                  <div>
                    <b className="text-black dark:text-white">{'Dates: '}</b>
                    Jun. 2023 - Jul. 2023
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
