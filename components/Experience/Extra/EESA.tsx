import { Dispatch, SetStateAction, useState } from "react";
import ImgList from "./ImgList";

const EESABoard = ({ setOpen }: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const imgList = [
        "/static/experience/extra/eesa.png",
        "/static/portfolio/preselect/preselect.png"
    ]

    return <div className="absolute">
        <div className="fixed flex top-0 left-0 right-0 w-full h-screen z-60 bg-black bg-opacity-70 items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
        >
            <div className="bg-[#F1F1F1] dark:bg-gray-700 xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen aspect-[1/2] max-h-90screen flex flex-row justify-center z-70 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <ImgList imgList={imgList} />
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
                        Our organization aimed to produce and maintain web services for the Electrical Engineering Department. We also help organize some activities of out department such like MakeNTU, EE Night, EE Week, etc.
                    </div>
                </div>
            </div>
        </div>
    </>
}
