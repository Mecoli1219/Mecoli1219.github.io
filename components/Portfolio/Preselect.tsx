import { Dispatch, SetStateAction, useState } from 'react';
import TechBox, { TechDictType } from '../TechBox';
import Image from 'next/image';
import Preselect_gif from '@/static/portfolio/preselect/preselect.gif';

const techList: TechDictType[] = [
  'HTML',
  'CSS',
  'Javascript',
  'Python',
  'MaterialUI',
  'NodeJS',
  'ExpressJS',
  'Flask',
  'MongoDB',
  'Redis',
  'Docker',
  'Git',
];

const PreselectBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
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
            <div className="my-10 flex flex-col items-center p-4 text-center">
              <div className="mb-5 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                NTUEE Course Pre-selection Website
              </div>
              <a
                href={'https://github.com/NTUEEInfoDep/NTUEECourseWebsite2021'}
                className="flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-xl font-bold underline hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
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
                NTUEECourseWebsite2021
              </a>
              <a
                href={'https://course.ntuee.org/'}
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
                NTUEE Pre-selection Website
              </a>
              {/* image block */}
              <div className="mx-auto flex h-fit w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                {/* <img className="w-full h-fit object-cover" src="/static/portfolio/preselect/preselect.gif" /> */}
                <Image
                  src={Preselect_gif}
                  alt="preselect_gif"
                  className="h-fit w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                  priority={true}
                />
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                The NTUEE Course Pre-selection Website is a service developed and maintained by the
                Information Department in the NTUEE Student Associate. It assists faculty members in
                assigning various sections of courses to NTUEE students according to their
                preferences. The course selection priority is customizable by professors, adding a
                layer of complexity. The website automates the assignment of courses to students,
                ensuring accurate matching of requirements and priorities.
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Features】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Students can drag and drop courses to rank their preferences.</li>
                <li>
                  The priority of each course is customizable by professors. For instance:
                  {/* 2 level list */}
                  <ul className="ml-8 list-outside list-circle text-left text-gray-400 dark:text-gray-300 max-sm:ml-4">
                    <li>Higher-grade students can be assigned to a section first.</li>
                    <li>Specific grade students can be assigned to a section first.</li>
                    <li>A list of selected students is guaranteed to be assigned to a section.</li>
                    <li>
                      Ensure that at least a certain number of junior or senior students are
                      assigned to a section.
                    </li>
                  </ul>
                </li>
                <li>
                  The algorithm is based on the solution to the <b>stable marriage problem</b>, and
                  unit tests have confirmed its correctness.
                </li>
                <li>
                  Students can view the result of the assignment and the priority of each course.
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
                <li>
                  I maintained the backend of the website, including the database, the API, and the
                  distribution server.
                </li>
                <li>Build the documentation of the API with Swagger.</li>
                <li>Designed the algorithm for the assignment of courses to students.</li>
                <li>Deployed the website to the server with Docker.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Preselect() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <PreselectBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/preselect/preselect.webp')] bg-cover bg-center hover:bg-[url('/static/portfolio/preselect/preselect.gif')]" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              NTUEE Course Pre-selection Website
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
