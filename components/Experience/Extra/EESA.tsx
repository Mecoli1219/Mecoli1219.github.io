import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../../ImgList';
import Image from 'next/image';
import icon from '@/static/experience/extra/eesa.png';
import Img_1 from '@/static/experience/extra/2020_Info.webp';
import Img_2 from '@/static/experience/extra/2021_Info.webp';
import Img_3 from '@/static/experience/extra/2022_Info.webp';
import Img_4 from '@/static/experience/extra/eesa.png';

const EESABoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
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
                NTU Electrical Engineering Student Association
              </div>
              <div className="mb-5 text-center text-xl font-bold text-gray-400 dark:text-gray-300">
                Minister of Information Department
              </div>
              <a
                href={'https://github.com/NTUEEInfoDep'}
                className="mb-5 flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                NTUEEInfoDep
              </a>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                Our organization aims to produce and maintain web services for the Electrical
                Engineering Department. We also help organize activities for our department, such as
                MakeNTU, EE Night, EE Week, etc.
              </div>

              <div className="mb-2 mt-10 text-2xl font-bold">【My Jobs】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>
                  Conducted open lectures on software tools like Git, Linux, and VSCode for NTUEE
                  students.
                </li>
                <li>
                  Offered weekly training courses about web development and software engineering.
                </li>
                <li>
                  Developed and maintained web services for the Electrical Engineering Department.
                </li>
                <li>
                  Assisted in organizing activities for our department, such as MakeNTU, EE Night,
                  EE Week, etc.
                </li>
              </ul>

              <div className="mb-2 mt-10 text-2xl font-bold">【My Projects】</div>

              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>NTUEE Course Pre-selection Website</li>
                <li>2022 NTUEE Week Game</li>
                <li>2022 NTUEE Week Ordering Platform</li>
                <li>2023 MakeNTU Competition Website</li>
                <li>NTUEE Student Association Website</li>
                <li>NTUEE Course Map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EESA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <EESABoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-[#F1F1F1] align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center px-0 py-5 sm:flex-row sm:p-2">
          <div className="mx-auto flex aspect-square content-center items-center justify-center overflow-hidden rounded-lg border bg-white max-sm:mx-5 max-sm:mb-5 max-sm:max-w-xs sm:basis-2/6 lg:basis-1/4">
            {/* <img src="/static/experience/extra/eesa.png" className="object-cover" alt="eesa" /> */}
            <Image src={icon} alt="eesa_icon" className="object-cover" priority={true} />
          </div>
          <div className="basis-full break-words pl-5 max-sm:pr-5 max-sm:text-center sm:basis-4/6 lg:basis-3/4">
            <div className="text-lg font-extrabold text-black dark:text-white">
              NTU Electrical Engineering Student Association
            </div>
            <div className="font-bold">Minister of Information Department</div>
            <div>
              <b className="text-black dark:text-white">{'Dates: '}</b>
              Sep. 2020 - Jul. 2023
            </div>
            <div className="mt-4 text-left text-sm">
              Our organization aims to produce and maintain web services for the Electrical
              Engineering Department. We also help organize activities for our department, such as
              MakeNTU, EE Night, EE Week, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
