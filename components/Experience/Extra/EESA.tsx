import { Dispatch, SetStateAction, useState } from "react";
import ImgList from "./ImgList";

const EESABoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const imgList = [
        "/static/experience/extra/eesa.png",
        "/static/experience/extra/2020_Info.jpg",
        "/static/experience/extra/2021_Info.jpg",
        "/static/experience/extra/2022_Info.jpg",
    ]

    return <div className="absolute">
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="max-h-90screen max-sm:max-h-80screen overflow-y-scroll bg-[#F1F1F1] dark:bg-gray-700 rounded-lg xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen no-scrollbar">
                <div className="flex flex-col">
                    <ImgList imgList={imgList} />
                    <div className="p-4 my-10 text-center">
                        <div className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl text-center mb-1">
                            NTU Electrical Engineering Student Association
                        </div>
                        <div className="font-bold text-gray-400 dark:text-gray-300 text-xl text-center mb-5">
                            Minister of Information Department
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Jobs】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            Conducted open lectures on software tools like Git, Linux, and VSCode for NTUEE students.
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            Offered weekly training courses about web development and software engineering.
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            Developed and maintained web services for the Electrical Engineering Department.
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            Assisted in organizing activities for our department, such as MakeNTU, EE Night, EE Week, etc.
                        </div>

                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Projects】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            NTUEE Course Pre-selection Website
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            2022 NTUEE Week Game
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            2022 NTUEE Week Ordering Platform
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            2023 MakeNTU Competition Website
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            NTUEE Student Association Website
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 ">
                            <p className="inline-block mr-2 w-3 h-3 bg-gray-400 dark:bg-gray-200 rounded-full"></p>
                            NTUEE Course Map
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function EESA() {
    const [open, setOpen] = useState(false);

    return <>
        {open && <EESABoard setOpen={setOpen} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-[#F1F1F1] mt-0 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col md:flex-row py-5 px-0 md:p-2 justify-center items-center content-center">
                <div className="max-md:max-w-xs max-md:mx-5 max-md:mb-5 md:basis-2/6 lg:basis-1/4 mx-auto rounded-lg overflow-hidden border flex justify-center items-center content-center bg-white aspect-square">
                    <img src="/static/experience/extra/eesa.png" className="object-cover" alt="eesa" />
                </div>
                <div className="basis-full md:basis-4/6 lg:basis-3/4 pl-5 max-md:pr-5 break-words">
                    <div className="font-extrabold text-black dark:text-white text-lg">
                        NTU Electrical Engineering Student Association
                    </div>
                    <div className="font-bold">
                        Minister of Information Department
                    </div>
                    <div>
                        <b className="text-black dark:text-white">
                            {"Dates: "}
                        </b>
                        Sep. 2020 - Jul. 2023
                    </div>
                    <div>
                        Our organization aims to produce and maintain web services for the Electrical Engineering Department. We also help organize activities for our department, such as MakeNTU, EE Night, EE Week, etc.
                    </div>
                </div>
            </div>
        </div>
    </>
}
