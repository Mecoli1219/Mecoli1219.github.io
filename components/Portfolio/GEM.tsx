import { Dispatch, SetStateAction, useState } from "react";
import TechBox, { TechDictType } from "../TechBox";
import Image from "next/image";
import gem_gif from '@/static/portfolio/GEM/GEM.gif'

const techList: TechDictType[] = [
    "Python", "Robotic Operating System (ROS)", "OpenCV"
]


const GEMBoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {

    return <div className="absolute" onScroll={(e) => { e.stopPropagation() }} >
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="max-h-90screen max-sm:max-h-80screen overflow-y-scroll overscroll-contain bg-[#F1F1F1] dark:bg-gray-700 rounded-lg xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen " onClick={(e) => { e.stopPropagation(); }}>
                <div className="flex flex-col">
                    {/* <ImgList imgList={imgList} /> */}
                    <div className="p-4 my-10 text-center flex flex-col items-center">
                        <div className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl text-center mb-5">
                            GEM e2 Vehicle Autonomous Lane Following
                        </div>
                        {/* image block */}
                        <div className="mx-auto rounded-lg overflow-hidden flex justify-center items-center content-center bg-white w-full h-fit">
                            {/* <img className="w-full h-fit object-cover" src="/static/portfolio/GEM/GEM.gif" /> */}
                            <Image
                                src={gem_gif}
                                alt="gem_gif"
                                className="w-full h-fit object-cover"
                                priority={true}
                            />
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Introduction】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 text-left max-sm:text-sm  px-2 sm:px-5 md:px-20">
                            The goal of this project is to develop a rule-based decision-maker for vision-only lane detection and lane following. This will enable the GEM car to successfully navigate the route in both the Highbay and simulated environments. The project is undertaken as part of the UIUC ECE 484 The Principles of Safe Autonomy course.
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Tech Stack】
                        </div>
                        <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 w-full gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-10 sm:px-10">
                            {techList.map((tech) => {
                                return <TechBox tech={tech} key={tech} />
                            })}
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Contributions】
                        </div>
                        <ul className="list-disc text-gray-400 dark:text-gray-300 text-left max-w-full w-fit list-outside max-sm:text-sm px-2 sm:px-5 md:px-20">
                            <li>
                                Refined the lane detection algorithm to enhance its accuracy.
                            </li>
                            <li>
                                Coded the decision-maker based on the polynomials fitted by the lane detection algorithm.
                            </li>
                            <li>
                                Translated commands from the decision-maker to the GEM car&apos;s low-level control values.
                            </li>
                            <li>
                                Established communication between project modules using ROS (Robot Operating System).
                            </li>
                            <li>
                                Tuned parameters for optimal performance.
                            </li>
                        </ul>

                        <div className="font-bold text-2xl mb-5 mt-10">
                            【Demo】
                        </div>
                        <iframe src="https://www.youtube-nocookie.com/embed/iIoHz3QMSVs?si=9SfoZvBrqv-fSPpi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                            className="w-full aspect-[560/315] mx-2"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function GEM() {
    const [open, setOpen] = useState(false);

    return <>
        {open && <GEMBoard setOpen={setOpen} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-white mt-0 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col p-5 md:p-2 justify-center items-center content-center">
                <div className="mx-auto rounded-lg overflow-hidden flex justify-center items-center content-center w-full aspect-[3/2] bg-center bg-contain bg-no-repeat bg-white dark:bg-black
                bg-[url('/static/portfolio/GEM/GEM.webp')] 
                hover:bg-[url('/static/portfolio/GEM/GEM.gif')] " />
                <div className="break-words my-5">
                    <div className="font-extrabold text-black dark:text-white text-lg text-center">
                        GEM e2 Vehicle Autonomous Lane Following
                    </div>
                </div>
            </div>
        </div>
    </>
}
