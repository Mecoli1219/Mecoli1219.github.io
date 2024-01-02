import { Dispatch, SetStateAction, useState } from "react";
import ImgList, { ImgListType } from "../../ImgList";
import Image from "next/image";
import icon from '@/static/experience/extra/LightDance.jpeg'
import Img_1 from "@/static/experience/extra/2022_LD.jpeg"
import Img_2 from "@/static/experience/extra/2023_LD.jpeg"
import Img_3 from "@/static/experience/extra/LightDance_all.webp"
import Img_4 from "@/static/experience/extra/All.webp"
import Img_5 from "@/static/experience/extra/LightDance.jpeg"

const LightDanceBoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {

    const imgList: ImgListType = [
        [Img_1, "object-cover"],
        [Img_2, "object-cover"],
        [Img_3, "object-cover"],
        [Img_4, "object-cover"],
        [Img_5, "object-cover"],
    ]


    return <div className="absolute">
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="max-h-90screen max-sm:max-h-80screen overflow-y-scroll overscroll-contain bg-[#F1F1F1] dark:bg-gray-700 rounded-lg xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen" onClick={(e) => { e.stopPropagation(); }}>
                <div className="flex flex-col">
                    <ImgList imgList={imgList} />
                    <div className="p-4 my-10 text-center flex flex-col items-center">
                        <div className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl text-center mb-1">
                            NTUEE Light Dance
                        </div>
                        <div className="font-bold text-gray-400 dark:text-gray-300 text-xl text-center mb-5">
                            Leader of Software Group
                        </div>
                        <a href={"https://www.youtube.com/@ntueelightdance6849"} className="hover:bg-white hover:dark:bg-gray-800 rounded-lg  hover:shadow-lg p-2 font-bold text-xl text-center w-fit flex flex-row cursor-pointer underline">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48" className="m-auto mr-2 h-6 w-6 inline">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                            </svg>
                            NTUEE Light Dance
                        </a>
                        <a href={"https://github.com/NTUEELightDance"} className="hover:bg-white hover:dark:bg-gray-800 rounded-lg  hover:shadow-lg p-2 font-bold text-xl text-center mb-5 w-fit flex flex-row cursor-pointer underline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-github h-6 w-6 inline m-auto mr-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            NTUEELightDance
                        </a>

                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Introduction】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 text-left max-sm:text-sm  px-2 sm:px-5 md:px-20">
                            NTUEE Light Dance is a group of NTUEE students passionate about art and technology. The performance incorporates choreography, music, handcraft, and engineering, presenting numerous challenges to overcome.
                        </div>

                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Jobs】
                        </div>
                        <ul className="list-disc text-gray-400 dark:text-gray-300 text-left max-w-full w-fit list-outside max-sm:text-sm px-2 sm:px-5 md:px-20">
                            <li>
                                Built a backend service from scratch.
                            </li>
                            <li>
                                Designed the data structure for the entire light dance system, optimizing data querying and post-processing.
                            </li>
                            <li>
                                Ensured stable and real-time communication between the frontend and the controller server.
                            </li>
                            <li>
                                Led the software group in developing and maintaining the light dance system, primarily focusing on the backend.
                            </li>
                            <li>
                                Maintained the codebase for inheriting the project to the next generation.
                            </li>
                        </ul>
                        <div className="font-bold text-2xl mb-5 mt-10">
                            【2023 Performance】
                        </div>
                        <iframe src="https://www.youtube-nocookie.com/embed/u10oLI85Ip0?si=o3OXg1DMz_2ntEUk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                            className="w-full aspect-[560/315] mx-2"
                        ></iframe>
                        <div className="font-bold text-2xl mb-5 mt-10">
                            【2022 Performance】
                        </div>
                        <iframe src="https://www.youtube-nocookie.com/embed/rN6hMTVfCt4?si=eYolamFGngdXsM7q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                            className="w-full aspect-[560/315] mx-2"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function LightDance() {
    const [open, setOpen] = useState(false);

    return <>
        {open && <LightDanceBoard setOpen={setOpen} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-[#F1F1F1] mt-0 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col sm:flex-row py-5 px-0 sm:p-2 justify-center items-center content-center">
                <div className="max-sm:max-w-xs max-sm:mx-5 max-sm:mb-5 sm:basis-2/6 lg:basis-1/4 mx-auto rounded-lg overflow-hidden border flex justify-center items-center content-center bg-white aspect-square">
                    {/* <img src="/static/experience/extra/LightDance.jpeg" className="object-cover" alt="lightdance" /> */}
                    <Image
                        src={icon}
                        alt="lightdance"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                        priority={true}
                    />
                </div>
                <div className="basis-full sm:basis-4/6 lg:basis-3/4 pl-5 max-sm:pr-5 break-words max-sm:text-center">
                    <div className="font-extrabold text-black dark:text-white text-lg">
                        NTUEE Light Dance
                    </div>
                    <div className="font-bold">
                        Leader of Software Group
                    </div>
                    <div>
                        <b className="text-black dark:text-white">
                            {"Dates: "}
                        </b>
                        Sep. 2021 - Jul. 2023
                    </div>
                    <div className=" text-sm mt-4 text-left">
                        NTUEE Light Dance is a group of NTUEE students passionate about art and technology. The performance incorporates choreography, music, handcraft, and engineering, presenting numerous challenges to overcome.
                    </div>
                </div>
            </div>
        </div>
    </>
}
