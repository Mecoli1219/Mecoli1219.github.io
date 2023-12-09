import { Dispatch, SetStateAction, useState } from "react";
import ImgList from "../ImgList";
import TechBox, { TechDictType } from "../TechBox";

const techList: TechDictType[] = [
    "HTML", "CSS", "Javascript", "MaterialUI", "NodeJS", "ExpressJS", "GraphQL", "MongoDB", "Redis", "Docker", "Git"
]

const MakeNTUBoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const imgList = [
        ["/static/portfolio/MakeNTU/Eureka.png", "bg-cover"],
        ["/static/portfolio/MakeNTU/Main-1.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/Machine_1.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/Machine_2.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/Tool_1.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/Tool_2.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/Tool_3.png", "bg-contain"],
        ["/static/portfolio/MakeNTU/makeNTU_Group.jpg", "bg-cover"],
    ]

    return <div className="absolute" onScroll={(e) => { e.stopPropagation() }} >
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="max-h-90screen max-sm:max-h-80screen overflow-y-scroll overscroll-contain bg-[#F1F1F1] dark:bg-gray-700 rounded-lg xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen no-scrollbar" onClick={(e) => { e.stopPropagation(); }}>
                <div className="flex flex-col">
                    <ImgList imgList={imgList} />
                    <div className="p-4 my-10 text-center flex flex-col items-center">
                        <div className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl text-center mb-1">
                            MakeNTU Website & Competition Services
                        </div>
                        <a href={"https://make.ntuee.org/"} className="hover:bg-white hover:dark:bg-gray-800 rounded-lg  hover:shadow-lg p-2 font-bold text-xl text-center mb-5 w-fit flex flex-row cursor-pointer underline">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                id="web"
                                viewBox="0 0 92 92"
                                fill="currentColor"
                                stroke="currentColor"
                                className="bi bi-github h-6 w-6 inline m-auto mr-2">
                                <path d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"></path>
                            </svg>
                            MakeNTU
                        </a>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Introduction】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 text-left max-sm:text-sm  px-2 sm:px-5 md:px-20">
                            MakeNTU provides a platform for those passionate about hands-on design and implementation to freely unleash their creativity. It allows makers to fully express themselves in an environment that supports open source and various hardware, enabling them to address a variety of life&apos;s challenges! During the competition, participants will be able to use the tools, Evaluation Boards, and machines provided by the organizers to create their own works. The competition is open to all students at Taiwan, and the winners will be awarded prizes.
                        </div>

                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Tech Stack】
                        </div>
                        <div className="grid grid-cols-5 max-md:grid-cols-3 w-full gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-10 px-10">
                            {techList.map((tech) => {
                                return <TechBox tech={tech} />
                            })}
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Contributions】
                        </div>
                        <ul className="list-disc text-gray-400 dark:text-gray-300 text-left max-w-full w-fit list-outside max-sm:text-sm px-2 sm:px-5 md:px-20">
                            <li>
                                Maintain the main website of MakeNTU.
                            </li>
                            <li>
                                Lead a team of 6 people in developing the competition services.
                            </li>
                            <li>
                                Ensure the security of the competition services to maintain fairness for all participants.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function MakeNTU() {
    const [open, setOpen] = useState(false);

    return <>
        {open && <MakeNTUBoard setOpen={setOpen} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-white mt-0 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col p-5 md:p-2 justify-center items-center content-center">
                <div className="mx-auto rounded-lg overflow-hidden flex justify-center items-center content-center bg-white w-full aspect-[3/2] bg-center bg-cover
                bg-[url('/static/portfolio/MakeNTU/Eureka.png')] " />
                <div className="break-words my-5">
                    <div className="font-extrabold text-black dark:text-white text-lg text-center">
                        MakeNTU Website & Competition Services
                    </div>
                </div>
            </div>
        </div>
    </>
}
