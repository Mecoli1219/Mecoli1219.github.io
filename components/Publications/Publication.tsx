import React from 'react';
import researchData, { ResearchType } from '../../constants/research';
import Image from 'next/image';

export default function Publication({
  research,
  index,
}: {
  research: ResearchType;
  index: number;
}) {
  return (
    <>
      <div className="flex flex-col content-center items-center justify-center px-0 py-5 md:flex-row lg:px-5">
        <div className="mx-auto flex h-fit content-center items-center justify-center overflow-hidden rounded-2xl border bg-white max-md:mx-5 max-md:mb-5 max-md:max-w-96 md:min-h-48 md:basis-2/6 lg:mr-5 lg:basis-1/4">
          {/* <img src={research.image} className="object-cover" alt={research.title} /> */}
          <Image
            src={research.image}
            alt={research.title}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
            priority={true}
          />
        </div>
        <div className="basis-full pl-5 max-md:pr-5 md:basis-4/6 lg:basis-3/4">
          <div className="pb-2">
            <a className="text-lg font-bold" href={research.link}>
              {research.title}
            </a>
          </div>
          {research.authors.map((author, index) => {
            return (
              <div key={index} className="inline">
                {author.link !== undefined ? (
                  <a
                    href={author.link}
                    className={
                      'text-base text-blue-500 hover:underline dark:text-blue-300' +
                      (author.me ? ' font-bold' : ' font-light')
                    }
                  >
                    {author.name}
                  </a>
                ) : (
                  <span className="text-base font-light text-gray-500 dark:text-gray-300">
                    {author.name}
                  </span>
                )}
                {index !== research.authors.length - 1 ? (
                  <span className="text-base text-gray-500 dark:text-gray-300">, </span>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          <div className="text-base font-normal text-black dark:text-white">
            {research.journal}, {research.year}
          </div>
          <div
            className="py-2 text-base font-light text-gray-500 dark:text-gray-300 max-sm:hidden"
            key=""
          >
            {research.description}
          </div>
          {Object.entries(research.others).map(([key, value], index) => {
            return (
              <div key={index} className="inline pr-1">
                [{' '}
                <a href={value} className="text-blue-500 hover:underline dark:text-blue-300">
                  {key}
                </a>{' '}
                ]
              </div>
            );
          })}
        </div>
      </div>
      {index !== researchData.researchList.length - 1 ? (
        <div
          className="mx-3 mb-12 mt-5 box-border border border-gray-400 md:mx-0 md:my-2 lg:mx-3"
          key={index}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
