import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../ImgList';
import TechBox, { TechDictType } from '../TechBox';
import Img_1 from '@/static/portfolio/weekgame/EEweek.webp';
import Img_2 from '@/static/portfolio/weekgame/progress.webp';
import Img_3 from '@/static/portfolio/weekgame/result.webp';
import Img_4 from '@/static/portfolio/weekgame/leaderboard.webp';

const techList: TechDictType[] = [
  'HTML',
  'CSS',
  'Javascript',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'Docker',
  'Git',
];

const WeekGameBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const imgList: ImgListType = [
    [Img_1, 'object-cover'],
    [Img_2, 'object-contain'],
    [Img_3, 'object-contain'],
    [Img_4, 'object-contain'],
  ];

  return (
    <div
      className="absolute"
      onScroll={(e) => {
        e.stopPropagation();
      }}
    >
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
                2022 NTUEE Week Small Game
              </div>
              <a
                href={'https://github.com/NTUEEInfoDep/2022NTUEEWeekGame'}
                className="my-5 flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800 max-sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="24"
                  // height="24"
                  fill="currentColor"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6 max-sm:h-5 max-sm:w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                2022NTUEEWeekGame
              </a>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                NTUEE Week is an annual event organized by NTUEE students. As part of enhancing the
                event&apos;s appeal, we created a small game for university students. The game
                simulates the life of an EE student, presenting challenges such as circuit design,
                exams, and projects. The objective is to navigate through these obstacles, aiming to
                survive for as long as possible.
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Features】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>The game is responsive to different devices.</li>
                <li>The game&apos;s speed increases as the player progresses.</li>
                <li>
                  Various promotional items in the game can aid or accelerate the player&apos;s
                  demise.
                </li>
                <li>A leaderboard displays the top 50 players.</li>
              </ul>
              <div className="mb-2 mt-10 text-2xl font-bold">【Tech Stack】</div>
              <div className="grid w-full grid-cols-5 gap-x-4 gap-y-2 max-lg:grid-cols-4 max-md:grid-cols-3 sm:gap-x-10 sm:gap-y-4 sm:px-10">
                {techList.map((tech) => {
                  return <TechBox tech={tech} key={tech} />;
                })}
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【My Contributions】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Built the backend of the game.</li>
                <li>
                  Connected the backend to the frontend, ensuring the security of the connection and
                  validity of the reported score.
                </li>
                <li>Designed the game logistics and the leaderboard.</li>
                <li>Addressed bugs and improved the game&apos;s performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WeekGame() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <WeekGameBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/weekgame/EEweek.webp')] bg-cover bg-center" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              2022 NTUEE Week Small Game
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
