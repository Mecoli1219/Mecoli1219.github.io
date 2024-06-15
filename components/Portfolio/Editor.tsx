import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../ImgList';
import TechBox, { TechDictType } from '../TechBox';
import Image from 'next/image';
import LightDance_gif from '@/static/portfolio/lightdance/lightdance.gif';
import Img_1 from '@/static/experience/extra/2022_LD.jpeg';
import Img_2 from '@/static/experience/extra/2023_LD.jpeg';
import Img_3 from '@/static/experience/extra/LightDance_all.webp';
import Img_4 from '@/static/experience/extra/All.webp';
import Img_5 from '@/static/experience/extra/LightDance.jpeg';

const techList: TechDictType[] = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'MaterialUI',
  'NodeJS',
  'ExpressJS',
  'GraphQL',
  'Prisma',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Git',
];

const EditorBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const imgList: ImgListType = [
    [Img_1, 'object-cover'],
    [Img_2, 'object-cover'],
    [Img_3, 'object-cover'],
    [Img_4, 'object-cover'],
    [Img_5, 'object-cover'],
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
              <div className="mb-5 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                NTUEE Light Dance Editor
              </div>
              <a
                href={'https://github.com/NTUEELightDance/LightDance-Editor'}
                className="flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
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
                LightDance-Editor
              </a>
              <a
                href={'https://www.youtube.com/@ntueelightdance6849'}
                className="mb-5 flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  className="m-auto mr-2 inline h-6 w-6"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
                NTUEE Light Dance
              </a>
              {/* image block */}
              <div className="mx-auto flex h-fit w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                {/* <img className="w-full h-fit object-cover" src="/static/portfolio/lightdance/lightdance.gif" /> */}
                <Image
                  src={LightDance_gif}
                  alt="lightdance_gif"
                  className="h-fit w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                  priority={true}
                />
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                The NTUEE Light Dance Editor is a web-based editor for the NTUEE Light Dance Team.
                It enables users to create and edit light dance shows through a user-friendly
                interface. The editor supports simultaneous editing by multiple choreographers.
                Additionally, it provides an interface to connect with the light dance system,
                allowing control over lights and music during performances.
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Features】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>
                  Enable comprehensive editing, allowing adjustments to each part of the dancers and
                  their positions for a fully customizable experience.
                </li>
                <li>Support different light sources, including LED strips, Fiber Optics, etc.</li>
                <li>
                  Enable choreographers to copy and paste light patterns from one dancer to another.
                </li>
                <li>Support simultaneous editing by multiple choreographers.</li>
                <li>Provide a real-time preview of the show.</li>
                <li>
                  Support the ability to export and import shows to files, facilitating future
                  editing and collaboration.
                </li>
                <li>
                  Provide an interface to connect with the Raspberry Pis, allowing control over
                  lights and music during performances.
                </li>
              </ul>
              <div className="mb-2 mt-10 text-2xl font-bold">【Tech Stack】</div>
              <div className="grid w-full grid-cols-5 gap-x-4 gap-y-2 max-lg:grid-cols-4 max-md:grid-cols-3 sm:gap-x-10 sm:gap-y-4 sm:px-10">
                {techList.map((tech) => {
                  return <TechBox tech={tech} key={tech} />;
                })}
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【My Contributions】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Built a backend service from scratch.</li>
                <li>
                  Designed the data structure for the entire light dance system, optimizing data
                  querying and post-processing.
                </li>
                <li>
                  Ensured stable and real-time communication between the frontend and the controller
                  server.
                </li>
                <li>
                  Led the software group in developing and maintaining the light dance system,
                  primarily focusing on the backend.
                </li>
                <li>Maintained the codebase for inheriting the project to the next generation.</li>
              </ul>
              <div className="mb-5 mt-10 text-2xl font-bold">【2023 Performance】</div>
              <iframe
                src="https://www.youtube-nocookie.com/embed/u10oLI85Ip0?si=o3OXg1DMz_2ntEUk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-2 aspect-[560/315] w-full"
              ></iframe>
              <div className="mb-5 mt-10 text-2xl font-bold">【2022 Performance】</div>
              <iframe
                src="https://www.youtube-nocookie.com/embed/rN6hMTVfCt4?si=eYolamFGngdXsM7q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-2 aspect-[560/315] w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Editor() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <EditorBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/lightdance/lightdance.webp')] bg-cover bg-center hover:bg-[url('/static/portfolio/lightdance/lightdance.gif')]" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              NTUEE Light Dance Editor
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
