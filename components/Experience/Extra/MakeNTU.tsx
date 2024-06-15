import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../../ImgList';
import Image from 'next/image';
import icon from '@/static/experience/extra/makeNTU_icon.png';
import Img_1 from '@/static/experience/extra/Eureka.webp';
import Img_2 from '@/static/experience/extra/makeNTU_self.webp';
import Img_3 from '@/static/experience/extra/makeNTU_Group.webp';
import Img_4 from '@/static/experience/extra/makeNTU.png';

const MakeNTUBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const imgList: ImgListType = [
    [Img_1, 'object-cover'],
    [Img_2, 'object-cover'],
    [Img_3, 'object-cover'],
    [Img_4, 'object-cover'],
  ];

  return (
    <div className="absolute">
      <div
        className="fixed left-0 right-0 top-0 z-60 flex h-screen w-full items-center justify-center bg-black bg-opacity-70"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        <div
          className="max-h-90screen w-80screen overflow-y-scroll overscroll-contain rounded-lg bg-[#F1F1F1] dark:bg-gray-700 max-sm:max-h-80screen sm:w-xl md:w-2xl lg:w-3xl xl:w-4xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex flex-col">
            <ImgList imgList={imgList} />
            <div className="my-10 flex flex-col items-center p-4 text-center">
              <div className="mb-1 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                MakeNTU
              </div>
              <div className="mb-5 text-center text-xl font-bold text-gray-400 dark:text-gray-300">
                Leader of Information & Website Group
              </div>
              <a
                href={'https://make.ntuee.org/'}
                className="mb-5 flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="web"
                  viewBox="0 0 92 92"
                  fill="currentColor"
                  stroke="currentColor"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6"
                >
                  <path d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"></path>
                </svg>
                MakeNTU
              </a>

              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                MakeNTU provides a platform for those passionate about hands-on design and
                implementation to freely unleash their creativity. It allows makers to fully express
                themselves in an environment that supports open source and various hardware,
                enabling them to address a variety of life&apos;s challenges!
              </div>

              <div className="mb-2 mt-10 text-2xl font-bold">【My Jobs】</div>

              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Built the tools rental and machine reservation system for MakeNTU.</li>
                <li>Maintain the main website of MakeNTU.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MakeNTU() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <MakeNTUBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-[#F1F1F1] align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center px-0 py-5 sm:flex-row sm:p-2">
          <div className="mx-auto flex aspect-square content-center items-center justify-center overflow-hidden rounded-lg border bg-white max-sm:mx-5 max-sm:mb-5 max-sm:max-w-xs sm:basis-2/6 lg:basis-1/4">
            {/* <img src="/static/experience/extra/makeNTU_icon.png" className="object-cover" alt="lightdance" /> */}
            <Image
              src={icon}
              alt="makentu_icon"
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
              priority={true}
            />
          </div>
          <div className="basis-full break-words pl-5 max-sm:pr-5 max-sm:text-center sm:basis-4/6 lg:basis-3/4">
            <div className="text-lg font-extrabold text-black dark:text-white">MakeNTU</div>
            <div className="font-bold">Leader of Information & Website Group</div>
            <div>
              <b className="text-black dark:text-white">{'Dates: '}</b>
              Aug. 2022 - May. 2023
            </div>
            <div className="mt-4 text-left text-sm">
              MakeNTU provides a platform for those passionate about hands-on design and
              implementation to freely unleash their creativity. It allows makers to fully express
              themselves in an environment that supports open source and various hardware, enabling
              them to address a variety of life&apos;s challenges!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
