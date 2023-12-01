import React from "react";
import researchData, { ResearchType } from "../../constants/research";
// import Image from 'next/image'

export default function Publication({ research, index }: { research: ResearchType, index: number }) {
    return <>
        <div className="flex flex-col md:flex-row py-5 px-0 lg:px-5 justify-center items-center content-center">
            <div className="lg:mr-5 max-md:max-w-96 max-md:mx-5 md:basis-2/6 lg:basis-1/4 md:min-h-48 mx-auto rounded-2xl overflow-hidden border flex justify-center items-center content-center bg-white h-fit max-md:mb-5">
                <img src={research.image} className="object-cover" alt={research.title} />
                {/* <Image
                    src={research.image}
                    alt={research.title}
                    className="object-cover"
                    sizes="300px"
                    width={300}
                    height={300} /> */}
            </div>
            <div className="basis-full md:basis-4/6 lg:basis-3/4 pl-5 max-md:pr-5">
                <div className="pb-2">
                    <a className="text-lg font-bold " href={research.link}>
                        {research.title}
                    </a>
                </div>
                {
                    research.authors.map((author, index) => {
                        return (
                            <div key={index} className="inline">
                                {

                                    author.link !== undefined
                                        ? <a href={author.link} className={"text-base hover:underline text-blue-500 dark:text-blue-300" + (author.me ? " font-bold" : " font-light")}>
                                            {author.name}
                                        </a >
                                        : <span className="text-base text-gray-500 dark:text-gray-300 font-light">
                                            {author.name}
                                        </span>
                                }
                                {
                                    index !== research.authors.length - 1
                                        ? <span className="text-base text-gray-500 dark:text-gray-300">, </span>
                                        : <></>
                                }
                            </div>
                        )
                    })
                }
                <div className="text-base text-black dark:text-white font-normal" >
                    {research.journal}, {research.year}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-300 py-2 font-light max-sm:hidden " key="">
                    {research.description}
                </div>
                {
                    Object.entries(research.others).map(([key, value], index) => {
                        return (
                            <div key={index} className="inline pr-1">
                                [ <a href={value} className="hover:underline text-blue-500 dark:text-blue-300">
                                    {key}
                                </a> ]
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {
            index !== researchData.researchList.length - 1 ?
                <div className="mx-3 md:mx-0 lg:mx-3  border-gray-400 border box-border mt-5 mb-12 md:my-2" key={index}>
                </div> : <></>
        }
    </>
}
