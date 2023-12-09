import { Dispatch, SetStateAction, useState } from "react";
import TechBox, { TechDictType } from "../TechBox";
import { MusicDataType, MusicPopularDataType } from "../../constants/music";
import Musecore from "../Musecore";

const techList: TechDictType[] = [
    "Python", "Robotic Operating System (ROS)", "OpenCV"
]


const MusicBoard = ({ setOpen, music }: {
    setOpen: Dispatch<SetStateAction<boolean>>,
    music: MusicDataType
}) => {

    return <div className="absolute" onScroll={(e) => { e.stopPropagation() }} >
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="h-90screen max-sm:h-80screen overflow-y-scroll overscroll-contain bg-[#F1F1F1] dark:bg-gray-700 rounded-lg xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen " onClick={(e) => { e.stopPropagation(); }}>
                <div className="flex flex-col">
                    <div className="p-4 my-10 text-center flex flex-col items-center">
                        <div className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl text-center mb-8">
                            {music.title}
                        </div>
                        <a href={music.shareURL} className="hover:bg-white hover:dark:bg-gray-800 rounded-lg  hover:shadow-lg p-2 font-bold text-xl text-center my-5 w-fit flex flex-row cursor-pointer underline max-sm:text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-github h-6 w-6 max-sm:h-5 max-sm:w-5 inline m-auto mr-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11.777 23.997a11.989 11.989 0 0 1-8.98-4.296 12.013 12.013 0 0 1-2.406-4.655A12.1 12.1 0 0 1 .273 9.44a11.926 11.926 0 0 1 1.72-4.064 12.056 12.056 0 0 1 4.056-3.799 11.94 11.94 0 0 1 4.13-1.44 12.211 12.211 0 0 1 3.693.007c1.708.27 3.302.89 4.751 1.848.873.577 1.692 1.29 2.385 2.08a11.966 11.966 0 0 1 2.68 5.196c.402 1.718.416 3.556.039 5.291a12.004 12.004 0 0 1-4.024 6.643 12.013 12.013 0 0 1-4.655 2.407c-.743.195-1.499.316-2.29.367a17.83 17.83 0 0 1-.809.026l-.172-.003zm-6.924-6.684a.488.488 0 0 0 .23-.133.548.548 0 0 0 .139-.232c.013-.043.014-.178.018-2.363.004-2.12.005-2.327.018-2.438.033-.298.076-.51.146-.72.101-.303.224-.516.406-.705.14-.144.26-.232.434-.315a1.76 1.76 0 0 1 .504-.148c.114-.017.382-.024.493-.012a1.803 1.803 0 0 1 1.308.807c.166.25.271.528.327.866l.017.106.004 2.438c.004 2.324.005 2.44.019 2.485a.555.555 0 0 0 .133.226.5.5 0 0 0 .201.128c.052.019.068.021.167.021a.462.462 0 0 0 .37-.145.507.507 0 0 0 .149-.3c.006-.042.008-.774.008-2.407 0-1.542.003-2.375.008-2.428.047-.48.222-.889.523-1.225.183-.204.464-.39.73-.482.21-.074.394-.101.626-.095.304.01.55.066.8.186.284.136.514.341.668.597.178.294.28.662.299 1.083.002.053.013.491.023.973.022 1.002.024 1.063.04 1.238.072.787.307 1.426.711 1.935.087.11.311.333.417.417.435.344.944.555 1.532.634.177.024.507.03.68.012.797-.082 1.53-.463 2.015-1.046.373-.45.606-.99.704-1.64.046-.302.043-.143.046-2.506.003-2.417.007-2.223-.054-2.346a.484.484 0 0 0-.332-.251.584.584 0 0 0-.416.06c-.1.06-.19.183-.22.304-.009.031-.012.478-.016 2.22-.005 2.415 0 2.23-.055 2.51-.18.917-.81 1.522-1.73 1.66a2.358 2.358 0 0 1-.512-.008c-.464-.07-.84-.256-1.13-.557-.332-.345-.53-.816-.601-1.432-.018-.151-.026-.387-.043-1.212-.018-.853-.026-1.05-.047-1.24-.129-1.123-.68-1.983-1.548-2.417a2.773 2.773 0 0 0-1.121-.294c-.55-.035-1.136.12-1.671.441a2.949 2.949 0 0 0-.813.707l-.038.049-.028-.038a2.542 2.542 0 0 0-.235-.261c-.457-.433-1.1-.722-1.78-.8a3.877 3.877 0 0 0-.65-.001c-.635.07-1.141.286-1.559.666-.48.437-.795 1.103-.912 1.926-.056.393-.057.436-.054 2.915l.002 2.184.022.064a.525.525 0 0 0 .359.339c.078.02.188.02.267 0zm11.99-8.863a.687.687 0 0 0 .546-.505.849.849 0 0 0 .008-.3.685.685 0 0 0-.455-.516.678.678 0 0 0-.895.649c0 .055.005.11.012.142a.684.684 0 0 0 .783.53zm-2.667-.138a.495.495 0 0 0 .32-.265c.046-.092.06-.158.067-.343a2.224 2.224 0 0 1 .617-1.49 1.934 1.934 0 0 1 1.146-.587c.145-.022.434-.024.581-.004.307.043.58.143.822.3.244.16.474.4.634.663.202.333.326.763.327 1.127 0 .1.012.184.036.26a.507.507 0 0 0 .94.068c.053-.111.06-.15.059-.35 0-.198-.01-.318-.043-.514-.217-1.298-1.165-2.294-2.426-2.545a2.47 2.47 0 0 0-.625-.055 3.031 3.031 0 0 0-2.738 1.638 3.3 3.3 0 0 0-.366 1.43c-.01.265.037.418.167.544a.509.509 0 0 0 .482.123z"></path>
                            </svg>
                            View on MuseScore
                        </a>
                        <Musecore sheetURL={music.sheetURL} musescoreURL={music.musescoreURL} title={music.title} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function Music({ music }: { music: MusicDataType }) {
    const [open, setOpen] = useState(false);

    return <>
        {open && <MusicBoard setOpen={setOpen} music={music} />}
        <div
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-white mt-0 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col p-5 md:p-2 justify-center items-center content-center">
                <div style={{ backgroundImage: `url(${music.sampleImg})` }}
                    className="mx-auto rounded-lg overflow-hidden flex justify-center items-center content-center w-full aspect-[3/2] bg-center bg-cover bg-no-repeat bg-white dark:bg-black" />
                <div className="break-words my-5 md:mb-2">
                    <div className="font-extrabold text-black dark:text-white text-lg text-center">
                        {music.title}
                    </div>
                    {
                        music.state === "popular" &&
                        <div className=" font-light text-base max-w-full w-fit m-auto text-center">
                            <div>Views: {music.views} / Likes: {music.likes}</div>
                            <div>{music.stars} ⭐</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
}
