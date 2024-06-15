import React from 'react';
import { awardData } from '../../constants/about';

export default function Awards() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'<Honors />'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen border-separate border-spacing-0 overflow-x-scroll bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 sm:rounded-lg">
          <tbody className="">
            {awardData.map((award, idx) => (
              <tr
                className={`flex flex-row ${idx === 0 ? 'border-y' : 'border-b'} p-2 px-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                key={idx}
              >
                {award}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
