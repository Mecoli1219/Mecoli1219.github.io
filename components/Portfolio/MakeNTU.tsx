import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../ImgList';
import TechBox, { TechDictType } from '../TechBox';
import Img_1 from '@/static/portfolio/MakeNTU/Eureka.webp';
import Img_2 from '@/static/portfolio/MakeNTU/Main-1.webp';
import Img_3 from '@/static/portfolio/MakeNTU/Machine_1.webp';
import Img_4 from '@/static/portfolio/MakeNTU/Machine_2.webp';
import Img_5 from '@/static/portfolio/MakeNTU/Tool_1.webp';
import Img_6 from '@/static/portfolio/MakeNTU/Tool_2.webp';
import Img_7 from '@/static/portfolio/MakeNTU/Tool_3.webp';
import Img_8 from '@/static/portfolio/MakeNTU/makeNTU_Group.webp';

const techList: TechDictType[] = [
  'HTML',
  'CSS',
  'Javascript',
  'MaterialUI',
  'NodeJS',
  'ExpressJS',
  'GraphQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Git',
];

const MakeNTUBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const imgList: ImgListType = [
    [Img_1, 'object-cover'],
    [Img_2, 'object-contain'],
    [Img_3, 'object-contain'],
    [Img_4, 'object-contain'],
    [Img_5, 'object-contain'],
    [Img_6, 'object-contain'],
    [Img_7, 'object-contain'],
    [Img_8, 'object-cover'],
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
                MakeNTU Website & Competition Services
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
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  stroke="currentColor"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6"
                >
                  <path
                    d="M61.529 29.137c-.856-1.662-2.515-2.615-4.55-2.615c-3.247 0-6.296 2.957-8.987 5.566c-1.245 1.207-2.52 2.443-3.569 3.113l4.447-22.527c.425-1.82.103-3.523-.905-4.793c-.953-1.201-2.461-1.918-4.034-1.918c-2.006 0-4.568 1.252-5.182 4.723l-2.055 8.553V8.715C36.694 4.307 33.751 2 30.843 2c-2.906 0-5.85 2.307-5.85 6.715V19.58l-2.79-10.238c-.705-3.039-3.054-4.123-5.017-4.123c-1.733 0-3.372.785-4.386 2.1c-.978 1.27-1.266 2.914-.822 4.59l1.94 8.861l-2.444-4.797c-1.025-2.014-2.709-3.168-4.62-3.168c-1.667 0-3.253.898-4.14 2.346c-.939 1.531-.956 3.434-.026 5.26c2.807 4.949 7.26 13.484 7.26 15.32c0 .529-.054 1.279-.116 2.148c-.267 3.734-.714 9.984 1.752 15.514c2.261 5.066 9.051 8.605 16.512 8.607c8.69 0 15.945-4.697 19.903-12.887c1.76-3.641 5.697-8.412 9.575-11.604c1.736-1.427 5.801-4.777 3.955-8.372m-50.113 6.584c0-2.898-6.268-14.117-7.501-16.291c-1.897-3.727 3.356-6.385 5.334-2.5L16.5 31.012l.615-2.457l-3.719-17.094c-1.051-3.973 5.469-6.266 6.521-1.74l5.418 20l1.047-2.291V8.742c0-6.24 8.036-6.26 8.036-.021v21.416l1.699-1.895l4-17.25c.928-5.227 7.225-3.074 6.261 1.063l-4.541 23.963c-6.729-.238-16.119 4.293-15.054 14.359c.857-9.309 9.397-12.416 15.199-12.416c2.209 0 2.949-.25 7.324-4.938c7.415-7.943 10.309-4.027 10.221-2.344c-.301 5.76-10.154 7.695-14.606 17.416c-5.846 12.762-22.854 13.279-29.961 7.146c-5.266-4.544-3.544-18.919-3.544-19.52"
                    fill="#000000"
                  ></path>
                </svg>
                MakeNTU
              </a>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                MakeNTU provides a platform for those passionate about hands-on design and
                implementation to freely unleash their creativity. It allows makers to fully express
                themselves in an environment that supports open source and various hardware,
                enabling them to address a variety of life&apos;s challenges! During the
                competition, participants will be able to use the tools, Evaluation Boards, and
                machines provided by the organizers to create their own works. The competition is
                open to all students at Taiwan, and the winners will be awarded prizes.
              </div>

              <div className="mb-2 mt-10 text-2xl font-bold">【Tech Stack】</div>
              <div className="grid w-full grid-cols-5 gap-x-4 gap-y-2 max-lg:grid-cols-4 max-md:grid-cols-3 sm:gap-x-10 sm:gap-y-4 sm:px-10">
                {techList.map((tech) => {
                  return <TechBox tech={tech} key={tech} />;
                })}
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【My Contributions】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Maintain the main website of MakeNTU.</li>
                <li>Lead a team of 6 people in developing the competition services.</li>
                <li>
                  Ensure the security of the competition services to maintain fairness for all
                  participants.
                </li>
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
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/MakeNTU/Eureka.webp')] bg-cover bg-center" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              MakeNTU Website & Competition Services
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
