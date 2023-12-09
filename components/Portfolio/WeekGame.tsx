import { Dispatch, SetStateAction, useState } from "react";
import ImgList from "../ImgList";
import TechBox, { TechDictType } from "../TechBox";

const techList: TechDictType[] = [
    "HTML", "CSS", "Javascript", "NodeJS", "ExpressJS", "MongoDB", "Docker", "Git"
]

const WeekGameBoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const imgList = [
        ["/static/portfolio/weekgame/EEweek.jpg", "bg-cover"],
        ["/static/portfolio/weekgame/progress.jpg", "bg-contain"],
        ["/static/portfolio/weekgame/result.png", "bg-contain"],
        ["/static/portfolio/weekgame/leaderboard.png", "bg-contain"],
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
                            2022 NTUEE Week Small Game
                        </div>
                        <a href={"https://github.com/NTUEEInfoDep/2022NTUEEWeekGame"} className="hover:bg-white hover:dark:bg-gray-800 rounded-lg  hover:shadow-lg p-2 font-bold text-xl text-center my-5 w-fit flex flex-row cursor-pointer underline max-sm:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // width="24"
                                // height="24"
                                fill="currentColor"
                                className="bi bi-github h-6 w-6 max-sm:h-5 max-sm:w-5 inline m-auto mr-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            2022NTUEEWeekGame
                        </a>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Introduction】
                        </div>
                        <div className="text-gray-400 dark:text-gray-300 text-left max-sm:text-sm  px-2 sm:px-5 md:px-20">
                            NTUEE Week is an annual event organized by NTUEE students. As part of enhancing the event's appeal, we created a small game for university students. The game simulates the life of an EE student, presenting challenges such as circuit design, exams, and projects. The objective is to navigate through these obstacles, aiming to survive for as long as possible.
                        </div>
                        <div className="font-bold text-2xl mb-2 mt-10">
                            【Features】
                        </div>
                        <ul className="list-disc text-gray-400 dark:text-gray-300 text-left max-w-full w-fit list-outside max-sm:text-sm px-2 sm:px-5 md:px-20">
                            <li>
                                The game is responsive to different devices.
                            </li>
                            <li>
                                The game's speed increases as the player progresses.
                            </li>
                            <li>
                                Various promotional items in the game can aid or accelerate the player's demise.
                            </li>
                            <li>
                                A leaderboard displays the top 50 players.
                            </li>
                        </ul>
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
                                Built the backend of the game.
                            </li>
                            <li>
                                Connected the backend to the frontend, ensuring the security of the connection and validity of the reported score.
                            </li>
                            <li>
                                Designed the game logistics and the leaderboard.
                            </li>
                            <li>
                                Addressed bugs and improved the game's performance.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function WeekGame() {
    const [open, setOpen] = useState(false);

    return <>
        {open && <WeekGameBoard setOpen={setOpen} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-white mt-0 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col p-5 md:p-2 justify-center items-center content-center">
                <div className="mx-auto rounded-lg overflow-hidden flex justify-center items-center content-center bg-white w-full aspect-[3/2] bg-center bg-cover
                bg-[url('/static/portfolio/weekgame/EEweek.jpg')] " />
                <div className="break-words my-5">
                    <div className="font-extrabold text-black dark:text-white text-lg text-center">
                        2022 NTUEE Week Small Game
                    </div>
                </div>
            </div>
        </div>
    </>
}
