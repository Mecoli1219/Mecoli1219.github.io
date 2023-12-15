import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export type ImgListType = [StaticImageData, string][]

export default function ImgList({ imgList }: { imgList: ImgListType }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImg = () => {
        if (currentIndex === 0) {
            setCurrentIndex(imgList.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const nextImg = () => {
        if (currentIndex === imgList.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return <div
        className="relative h-60vw sm:h-asp-xl md:h-asp-2xl lg:h-asp-3xl xl:h-asp-4xl group pb-4 xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen z-70 rounded-lg overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
    >
        {
            // typeof imgList[currentIndex] === "object" ?
            // <div style={{ backgroundImage: `url(${imgList[currentIndex]})` }} className={`w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black bg-cover transition-bg-size`}>
            // </div>
            // :
            // <div style={{ backgroundImage: `url(${imgList[currentIndex][0]})` }} className={`w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black ${imgList[currentIndex][1]} transition-bg-size`}>
            // </div>
            <div className={`w-full h-[calc(100%-24px)] round-2xl bg-center bg-white dark:bg-black overflow-hidden`}>
                <Image
                    src={imgList[currentIndex][0]}
                    alt="demo_image"
                    className={`w-full h-full object-cover ${imgList[currentIndex][1]}`}
                    priority={true}
                />
            </div>
        }
        {/* <img src={imgList[currentIndex]} className="w-full h-[calc(100%-24px)] round-2xl bg-center bg-cover duration-500" /> */}
        <div className="hidden group-hover:block top-[50%] absolute -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={prevImg} />
        </div>
        <div className="hidden group-hover:block top-[50%] absolute -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={nextImg} />
        </div>

        <div className="flex top-4 justify-center py-2">
            {imgList.map((img, index) => {
                return <div key={index} className={"cursor-pointer text-2xl " + (index === currentIndex ? "text-blue-500 dark:text-blue-300" : "text-gray-500 dark:text-gray-300")} onClick={() => setCurrentIndex(index)}>
                    <RxDotFilled />
                </div>
            })}
        </div>

    </div>
}