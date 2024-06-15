import { Dispatch, SetStateAction, useState } from 'react';
import TechBox, { TechDictType } from '../TechBox';
import Image from 'next/image';
import gem_gif from '@/static/portfolio/GEM/GEM.gif';

const techList: TechDictType[] = ['Python', 'Robotic Operating System (ROS)', 'OpenCV'];

const GEMBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
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
                GEM e2 Vehicle Autonomous Lane Following
              </div>
              {/* image block */}
              <div className="mx-auto flex h-fit w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                {/* <img className="w-full h-fit object-cover" src="/static/portfolio/GEM/GEM.gif" /> */}
                <Image
                  src={gem_gif}
                  alt="gem_gif"
                  className="h-fit w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                  priority={true}
                />
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                The goal of this project is to develop a rule-based decision-maker for vision-only
                lane detection and lane following. This will enable the GEM car to successfully
                navigate the route in both the Highbay and simulated environments. The project is
                undertaken as part of the UIUC ECE 484 The Principles of Safe Autonomy course.
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Tech Stack】</div>
              <div className="grid w-full grid-cols-5 gap-x-4 gap-y-2 max-lg:grid-cols-4 max-md:grid-cols-3 sm:gap-x-10 sm:gap-y-4 sm:px-10">
                {techList.map((tech) => {
                  return <TechBox tech={tech} key={tech} />;
                })}
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【My Contributions】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>Refined the lane detection algorithm to enhance its accuracy.</li>
                <li>
                  Coded the decision-maker based on the polynomials fitted by the lane detection
                  algorithm.
                </li>
                <li>
                  Translated commands from the decision-maker to the GEM car&apos;s low-level
                  control values.
                </li>
                <li>
                  Established communication between project modules using ROS (Robot Operating
                  System).
                </li>
                <li>Tuned parameters for optimal performance.</li>
              </ul>

              <div className="mb-5 mt-10 text-2xl font-bold">【Demo】</div>
              <iframe
                src="https://www.youtube-nocookie.com/embed/iIoHz3QMSVs?si=9SfoZvBrqv-fSPpi"
                title="YouTube video player"
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

export default function GEM() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <GEMBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/GEM/GEM.webp')] bg-contain bg-center bg-no-repeat hover:bg-[url('/static/portfolio/GEM/GEM.gif')] dark:bg-black" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              GEM e2 Vehicle Autonomous Lane Following
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
