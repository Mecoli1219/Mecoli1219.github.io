import { Dispatch, SetStateAction, useState } from "react";
import ImgList from "../../ImgList";
import Image from "next/image";
import icon from '@/static/experience/extra/makeNTU_icon.png'

const MakeNTUBoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const imgList = [
        "/static/experience/extra/Eureka.png",
        "/static/experience/extra/makeNTU.png",
        "/static/experience/extra/makeNTU_self.jpg",
        "/static/experience/extra/makeNTU_Group.jpg",
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
                            MakeNTU
                        </div>
                        <div className="font-bold text-gray-400 dark:text-gray-300 text-xl text-center mb-5">
                            Leader of Information & Website Group
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
                            MakeNTU provides a platform for those passionate about hands-on design and implementation to freely unleash their creativity. It allows makers to fully express themselves in an environment that supports open source and various hardware, enabling them to address a variety of life&apos;s challenges!
                        </div>

                        <div className="font-bold text-2xl mb-2 mt-10">
                            【My Jobs】
                        </div>

                        <ul className="list-disc text-gray-400 dark:text-gray-300 text-left max-w-full w-fit list-outside max-sm:text-sm px-2 sm:px-5 md:px-20">
                            <li>
                                Built the tools rental and machine reservation system for MakeNTU.
                            </li>
                            <li>
                                Maintain the main website of MakeNTU.
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
            className="rounded-lg w-full text-base align-middle text-gray-500 dark:text-gray-300 bg-[#F1F1F1] mt-0 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            onClick={() => setOpen(true)}
        >
            <div className="flex flex-col sm:flex-row py-5 px-0 sm:p-2 justify-center items-center content-center">
                <div className="max-sm:max-w-xs max-sm:mx-5 max-sm:mb-5 sm:basis-2/6 lg:basis-1/4 mx-auto rounded-lg overflow-hidden border flex justify-center items-center content-center bg-white aspect-square">
                    {/* <img src="/static/experience/extra/makeNTU_icon.png" className="object-cover" alt="lightdance" /> */}
                    <Image
                        src={icon}
                        alt="makentu_icon"
                        className="object-cover"
                        priority={true}
                    />
                </div>
                <div className="basis-full sm:basis-4/6 lg:basis-3/4 pl-5 max-sm:pr-5 break-words max-sm:text-center">
                    <div className="font-extrabold text-black dark:text-white text-lg">
                        MakeNTU
                    </div>
                    <div className="font-bold">
                        Leader of Information & Website Group
                    </div>
                    <div>
                        <b className="text-black dark:text-white">
                            {"Dates: "}
                        </b>
                        Aug. 2022 - May. 2023
                    </div>
                    <div className=" text-sm mt-4 text-left">
                        MakeNTU provides a platform for those passionate about hands-on design and implementation to freely unleash their creativity. It allows makers to fully express themselves in an environment that supports open source and various hardware, enabling them to address a variety of life&apos;s challenges!
                    </div>
                </div>
            </div>
        </div>
    </>
}
