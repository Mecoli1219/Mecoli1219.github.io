import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function ImgList({ imgList }: { imgList: string[] }) {
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


    return <div className="w-full relative h-60vw sm:h-asp-xl md:h-asp-2xl lg:h-asp-3xl xl:h-asp-4xl group pb-4">
        <div style={{ backgroundImage: `url(${imgList[currentIndex]})` }} className="w-full h-full round-2xl bg-center bg-cover duration-500">
        </div>
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