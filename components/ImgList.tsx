import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export type ImgListType = [StaticImageData, string][];

export default function ImgList({ imgList }: { imgList: ImgListType }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imgList.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImg = () => {
    if (currentIndex === imgList.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className="group relative z-70 h-60vw w-80screen overflow-hidden overscroll-contain rounded-lg pb-4 sm:h-asp-xl sm:w-xl md:h-asp-2xl md:w-2xl lg:h-asp-3xl lg:w-3xl xl:h-asp-4xl xl:w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      {
        // typeof imgList[currentIndex] === "object" ?
        // <div style={{ backgroundImage: `url(${imgList[currentIndex]})` }} className={`w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black bg-cover transition-bg-size`}>
        // </div>
        // :
        // <div style={{ backgroundImage: `url(${imgList[currentIndex][0]})` }} className={`w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black ${imgList[currentIndex][1]} transition-bg-size`}>
        // </div>
        <div
          className={`round-2xl relative h-[calc(100%-24px)] w-full overflow-hidden bg-white bg-center dark:bg-black`}
        >
          {imgList.map((img, index) => {
            return (
              <Image
                key={index}
                src={img[0]}
                alt="demo_image"
                className={`h-full w-full object-cover ${img[1]} ${index === currentIndex ? 'opacity-100' : 'opacity-0'} absolute transition-opacity duration-500`}
                sizes="80vw"
              />
            );
          })}
          {/* <Image
                    src={imgList[currentIndex][0]}
                    alt="demo_image"
                    className={`w-full h-full object-cover ${imgList[currentIndex][1]}`}
                    sizes="80vw"
                    priority={true}
                /> */}
        </div>
      }
      {/* <img src={imgList[currentIndex]} className="w-full h-[calc(100%-24px)] round-2xl bg-center bg-cover duration-500" /> */}
      <div
        className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
        onClick={prevImg}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
        onClick={nextImg}
      >
        <BsChevronCompactRight size={30} />
      </div>

      <div className="top-4 flex justify-center py-2">
        {imgList.map((img, index) => {
          return (
            <div
              key={index}
              className={
                'cursor-pointer text-2xl ' +
                (index === currentIndex
                  ? 'text-blue-500 dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-300')
              }
              onClick={() => setCurrentIndex(index)}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
}
