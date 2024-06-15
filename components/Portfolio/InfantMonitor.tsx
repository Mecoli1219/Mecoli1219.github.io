import { Dispatch, SetStateAction, useState } from 'react';
import ImgList, { ImgListType } from '../ImgList';
import TechBox, { TechDictType } from '../TechBox';
import Image from 'next/image';
import Gif_1 from '@/static/portfolio/InfantMonitor/success-center-1.gif';
import Gif_2 from '@/static/portfolio/InfantMonitor/success-center-2.gif';
import Gif_3 from '@/static/portfolio/InfantMonitor/success-flip.gif';
import Img_0 from '@/static/portfolio/InfantMonitor/infant-0.webp';
import Img_1 from '@/static/portfolio/InfantMonitor/infant-1.webp';
import Img_2 from '@/static/portfolio/InfantMonitor/infant-2.webp';
import Img_3 from '@/static/portfolio/InfantMonitor/infant-3.webp';
import Img_4 from '@/static/portfolio/InfantMonitor/infant-4.webp';
import Img_5 from '@/static/portfolio/InfantMonitor/infant-5.webp';
import Img_6 from '@/static/portfolio/InfantMonitor/infant-6.webp';
import Img_7 from '@/static/portfolio/InfantMonitor/infant-7.webp';
import Img_8 from '@/static/portfolio/InfantMonitor/infant-8.webp';
import Img_f1 from '@/static/portfolio/InfantMonitor/infant-final-1.webp';
import Img_f2 from '@/static/portfolio/InfantMonitor/infant-final-2.webp';
import Img_f3 from '@/static/portfolio/InfantMonitor/infant-final-3.webp';

const techList: TechDictType[] = ['Python', 'Flask', 'OpenCV', 'mediaPipe', 'MQTT', 'Docker'];

const InfantBoard = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const imgList: ImgListType = [
    [Img_f1, 'object-contain'],
    [Img_f2, 'object-contain'],
    [Img_f3, 'object-contain'],
    [Img_0, 'object-cover'],
    [Img_1, 'object-contain'],
    [Img_2, 'object-cover'],
    [Img_3, 'object-cover'],
    [Img_4, 'object-cover'],
    [Img_5, 'object-cover'],
    [Img_6, 'object-cover'],
    [Img_7, 'object-cover'],
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
              <div className="mb-5 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                Infant Monitor
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
              <div className="mb-2 mt-10 text-2xl font-bold">【Awards】</div>
              <div className="flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-base font-bold">
                <svg
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32.148 32.148"
                  xmlSpace="preserve"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <g>
                        {' '}
                        <path d="M3.171,19.56c0,0,0.313-1.268-0.739-2.367c-1.056-1.101-2.382-1.105-2.382-1.105s-0.33,1.489,0.698,2.562 C1.775,19.72,3.171,19.56,3.171,19.56z"></path>{' '}
                        <path d="M5.5,19.33c0,0,1.233-0.669,1.459-2.139c0.227-1.466-0.9-2.498-0.9-2.498s-1.08,0.768-1.313,2.274 C4.515,18.474,5.5,19.33,5.5,19.33z"></path>{' '}
                        <path d="M7.354,23.029c0,0,1.136-0.827,1.169-2.312c0.03-1.483-1.221-2.358-1.221-2.358s-0.971,0.9-1.004,2.425 C6.265,22.308,7.354,23.029,7.354,23.029z"></path>{' '}
                        <path d="M11.076,22.754c-0.108-1.479-1.436-2.233-1.436-2.233s-0.882,0.987-0.772,2.508c0.11,1.521,1.262,2.136,1.262,2.136 S11.183,24.234,11.076,22.754z"></path>{' '}
                        <path d="M13.617,27.009c0,0,0.743-1.191,0.214-2.58c-0.529-1.388-2.019-1.728-2.019-1.728s-0.561,1.202-0.019,2.627 C12.337,26.751,13.617,27.009,13.617,27.009z"></path>{' '}
                        <path d="M3.685,16.312c0,0,0.966-0.879,0.699-2.379c-0.267-1.499-1.366-2.242-1.366-2.242s-1.101,1.058-0.841,2.521 C2.437,15.672,3.685,16.312,3.685,16.312z"></path>{' '}
                        <path d="M4.443,22.437c0,0-0.074-1.305-1.404-2.045c-1.333-0.738-2.602-0.355-2.602-0.355s0.124,1.521,1.422,2.242 C3.159,23,4.443,22.437,4.443,22.437z"></path>{' '}
                        <path d="M6.688,24.969c0,0-0.362-1.255-1.823-1.681c-1.464-0.426-2.616,0.23-2.616,0.23s0.461,1.455,1.886,1.871 C5.562,25.806,6.688,24.969,6.688,24.969z"></path>{' '}
                        <path d="M9.199,26.773c0,0-0.724-1.086-2.246-1.049c-1.524,0.037-2.424,1.01-2.424,1.01s0.88,1.25,2.363,1.213 C8.377,27.913,9.199,26.773,9.199,26.773z"></path>{' '}
                        <path d="M10.271,27.509c-1.508,0.221-2.284,1.294-2.284,1.294s1.021,1.136,2.491,0.923c1.471-0.214,2.148-1.442,2.148-1.442 S11.778,27.292,10.271,27.509z"></path>{' '}
                        <path d="M4.182,17.058l-0.727-0.029c-0.002,0.08-0.183,7.955,11.7,11.505l0.208-0.696C4.048,24.457,4.169,17.357,4.182,17.058z"></path>{' '}
                        <path d="M28.977,19.581c0,0,1.396,0.16,2.423-0.912c1.028-1.072,0.698-2.562,0.698-2.562s-1.326,0.006-2.383,1.106 C28.662,18.314,28.977,19.581,28.977,19.581z"></path>{' '}
                        <path d="M25.188,17.212c0.226,1.469,1.459,2.139,1.459,2.139s0.984-0.855,0.755-2.361c-0.233-1.507-1.313-2.274-1.313-2.274 S24.962,15.746,25.188,17.212z"></path>{' '}
                        <path d="M24.846,18.379c0,0-1.251,0.875-1.222,2.358c0.033,1.483,1.169,2.312,1.169,2.312s1.089-0.722,1.057-2.245 C25.816,19.282,24.846,18.379,24.846,18.379z"></path>{' '}
                        <path d="M21.071,22.775c-0.106,1.479,0.946,2.408,0.946,2.408s1.15-0.613,1.262-2.135c0.109-1.521-0.772-2.509-0.772-2.509 S21.181,21.294,21.071,22.775z"></path>{' '}
                        <path d="M18.316,24.45c-0.529,1.388,0.214,2.579,0.214,2.579s1.279-0.258,1.823-1.68c0.542-1.425-0.02-2.628-0.02-2.628 S18.847,23.062,18.316,24.45z"></path>{' '}
                        <path d="M28.463,16.333c0,0,1.248-0.64,1.509-2.101c0.26-1.463-0.842-2.521-0.842-2.521s-1.1,0.743-1.365,2.242 C27.497,15.454,28.463,16.333,28.463,16.333z"></path>{' '}
                        <path d="M29.107,20.413c-1.33,0.739-1.404,2.044-1.404,2.044s1.285,0.564,2.584-0.157c1.298-0.721,1.422-2.243,1.422-2.243 S30.44,19.673,29.107,20.413z"></path>{' '}
                        <path d="M27.281,23.31c-1.461,0.426-1.823,1.681-1.823,1.681s1.128,0.836,2.555,0.421c1.425-0.415,1.886-1.871,1.886-1.871 S28.745,22.883,27.281,23.31z"></path>{' '}
                        <path d="M25.194,25.745c-1.522-0.037-2.246,1.05-2.246,1.05s0.821,1.139,2.307,1.174c1.483,0.036,2.363-1.213,2.363-1.213 S26.72,25.783,25.194,25.745z"></path>{' '}
                        <path d="M21.876,27.529c-1.508-0.217-2.354,0.773-2.354,0.773s0.678,1.229,2.147,1.443c1.471,0.213,2.491-0.924,2.491-0.924 S23.384,27.75,21.876,27.529z"></path>{' '}
                        <path d="M28.692,17.048l-0.728,0.029c0.013,0.301,0.134,7.398-11.181,10.779l0.208,0.695 C28.875,25.003,28.694,17.128,28.692,17.048z"></path>{' '}
                        <polygon points="21.771,20.214 20.945,13.495 25.443,8.924 18.996,8.062 16.076,2.404 16.076,2.376 13.15,8.042 6.704,8.903 11.202,13.475 10.377,20.193 16.071,17.099 16.071,17.117 "></polygon>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>{' '}
                Best Creativity Prize
              </div>
              <div className="flex w-fit cursor-pointer flex-row rounded-lg p-2 text-center text-base font-bold">
                <svg
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32.148 32.148"
                  xmlSpace="preserve"
                  className="bi bi-github m-auto mr-2 inline h-6 w-6"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <g>
                        {' '}
                        <path d="M3.171,19.56c0,0,0.313-1.268-0.739-2.367c-1.056-1.101-2.382-1.105-2.382-1.105s-0.33,1.489,0.698,2.562 C1.775,19.72,3.171,19.56,3.171,19.56z"></path>{' '}
                        <path d="M5.5,19.33c0,0,1.233-0.669,1.459-2.139c0.227-1.466-0.9-2.498-0.9-2.498s-1.08,0.768-1.313,2.274 C4.515,18.474,5.5,19.33,5.5,19.33z"></path>{' '}
                        <path d="M7.354,23.029c0,0,1.136-0.827,1.169-2.312c0.03-1.483-1.221-2.358-1.221-2.358s-0.971,0.9-1.004,2.425 C6.265,22.308,7.354,23.029,7.354,23.029z"></path>{' '}
                        <path d="M11.076,22.754c-0.108-1.479-1.436-2.233-1.436-2.233s-0.882,0.987-0.772,2.508c0.11,1.521,1.262,2.136,1.262,2.136 S11.183,24.234,11.076,22.754z"></path>{' '}
                        <path d="M13.617,27.009c0,0,0.743-1.191,0.214-2.58c-0.529-1.388-2.019-1.728-2.019-1.728s-0.561,1.202-0.019,2.627 C12.337,26.751,13.617,27.009,13.617,27.009z"></path>{' '}
                        <path d="M3.685,16.312c0,0,0.966-0.879,0.699-2.379c-0.267-1.499-1.366-2.242-1.366-2.242s-1.101,1.058-0.841,2.521 C2.437,15.672,3.685,16.312,3.685,16.312z"></path>{' '}
                        <path d="M4.443,22.437c0,0-0.074-1.305-1.404-2.045c-1.333-0.738-2.602-0.355-2.602-0.355s0.124,1.521,1.422,2.242 C3.159,23,4.443,22.437,4.443,22.437z"></path>{' '}
                        <path d="M6.688,24.969c0,0-0.362-1.255-1.823-1.681c-1.464-0.426-2.616,0.23-2.616,0.23s0.461,1.455,1.886,1.871 C5.562,25.806,6.688,24.969,6.688,24.969z"></path>{' '}
                        <path d="M9.199,26.773c0,0-0.724-1.086-2.246-1.049c-1.524,0.037-2.424,1.01-2.424,1.01s0.88,1.25,2.363,1.213 C8.377,27.913,9.199,26.773,9.199,26.773z"></path>{' '}
                        <path d="M10.271,27.509c-1.508,0.221-2.284,1.294-2.284,1.294s1.021,1.136,2.491,0.923c1.471-0.214,2.148-1.442,2.148-1.442 S11.778,27.292,10.271,27.509z"></path>{' '}
                        <path d="M4.182,17.058l-0.727-0.029c-0.002,0.08-0.183,7.955,11.7,11.505l0.208-0.696C4.048,24.457,4.169,17.357,4.182,17.058z"></path>{' '}
                        <path d="M28.977,19.581c0,0,1.396,0.16,2.423-0.912c1.028-1.072,0.698-2.562,0.698-2.562s-1.326,0.006-2.383,1.106 C28.662,18.314,28.977,19.581,28.977,19.581z"></path>{' '}
                        <path d="M25.188,17.212c0.226,1.469,1.459,2.139,1.459,2.139s0.984-0.855,0.755-2.361c-0.233-1.507-1.313-2.274-1.313-2.274 S24.962,15.746,25.188,17.212z"></path>{' '}
                        <path d="M24.846,18.379c0,0-1.251,0.875-1.222,2.358c0.033,1.483,1.169,2.312,1.169,2.312s1.089-0.722,1.057-2.245 C25.816,19.282,24.846,18.379,24.846,18.379z"></path>{' '}
                        <path d="M21.071,22.775c-0.106,1.479,0.946,2.408,0.946,2.408s1.15-0.613,1.262-2.135c0.109-1.521-0.772-2.509-0.772-2.509 S21.181,21.294,21.071,22.775z"></path>{' '}
                        <path d="M18.316,24.45c-0.529,1.388,0.214,2.579,0.214,2.579s1.279-0.258,1.823-1.68c0.542-1.425-0.02-2.628-0.02-2.628 S18.847,23.062,18.316,24.45z"></path>{' '}
                        <path d="M28.463,16.333c0,0,1.248-0.64,1.509-2.101c0.26-1.463-0.842-2.521-0.842-2.521s-1.1,0.743-1.365,2.242 C27.497,15.454,28.463,16.333,28.463,16.333z"></path>{' '}
                        <path d="M29.107,20.413c-1.33,0.739-1.404,2.044-1.404,2.044s1.285,0.564,2.584-0.157c1.298-0.721,1.422-2.243,1.422-2.243 S30.44,19.673,29.107,20.413z"></path>{' '}
                        <path d="M27.281,23.31c-1.461,0.426-1.823,1.681-1.823,1.681s1.128,0.836,2.555,0.421c1.425-0.415,1.886-1.871,1.886-1.871 S28.745,22.883,27.281,23.31z"></path>{' '}
                        <path d="M25.194,25.745c-1.522-0.037-2.246,1.05-2.246,1.05s0.821,1.139,2.307,1.174c1.483,0.036,2.363-1.213,2.363-1.213 S26.72,25.783,25.194,25.745z"></path>{' '}
                        <path d="M21.876,27.529c-1.508-0.217-2.354,0.773-2.354,0.773s0.678,1.229,2.147,1.443c1.471,0.213,2.491-0.924,2.491-0.924 S23.384,27.75,21.876,27.529z"></path>{' '}
                        <path d="M28.692,17.048l-0.728,0.029c0.013,0.301,0.134,7.398-11.181,10.779l0.208,0.695 C28.875,25.003,28.694,17.128,28.692,17.048z"></path>{' '}
                        <polygon points="21.771,20.214 20.945,13.495 25.443,8.924 18.996,8.062 16.076,2.404 16.076,2.376 13.15,8.042 6.704,8.903 11.202,13.475 10.377,20.193 16.071,17.099 16.071,17.117 "></polygon>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>{' '}
                STMicroelectronics Company Prize 1st Place
              </div>

              {/* image block */}
              <div className="mb-2 mt-10 text-2xl font-bold">【Introduction】</div>
              <div className="px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                MakeNTU is a 24-hour hackathon organized by National Taiwan University. During this
                event, we built an infant monitoring system using 14 servo motors, an STM board, and
                a Raspberry Pi. The system detects the infant&apos;s face and body posture, sending
                real-time information to the parents&apos; mobile phones. Additionally, it provides
                an interactive interface for parents to control or play with their infant remotely.
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Demos】</div>
              <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                <div className="mx-auto flex h-[calc(100%-24px)] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src={Gif_1}
                    alt="center01_gif"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    priority={true}
                  />
                </div>
                <div className="mx-auto flex h-[calc(100%-24px)] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src={Gif_2}
                    alt="center01_gif"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    priority={true}
                  />
                </div>
                <div className="mx-auto flex h-[calc(100%-24px)] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src={Gif_3}
                    alt="center01_gif"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    priority={true}
                  />
                </div>
              </div>
              <div className="mb-2 mt-10 text-2xl font-bold">【Features】</div>
              <ul className="w-fit max-w-full list-outside list-disc px-2 text-left text-gray-400 dark:text-gray-300 max-sm:text-sm sm:px-5 md:px-20">
                <li>
                  A camera and detection module to monitor the infant&apos;s face and body posture.
                </li>
                <li>
                  14 servo motors that independently control the height of the infant bed to protect
                  the infant from dangerous situations.
                </li>
                <li>
                  A web interface for parents to monitor the infant&apos;s status and control the
                  bed remotely.
                </li>
                <li>
                  A server with a designed algorithm using MediaPipe and a finite state machine to
                  determine control values. These values are sent to the Raspberry Pi through MQTT,
                  which then communicates with the STM32 F429 via Ethernet. The STM32 F429 controls
                  the servo motors through GPIO.
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
                  Constructed the data pipeline to send photo series through MediaPipe pose
                  estimation modules, increasing accuracy and reducing latency.
                </li>
                <li>
                  Designed the decision-making algorithm with a finite state machine to determine
                  control values for the 14 servo motors under various conditions.
                </li>
                <li>
                  Built the web interface for parents to monitor the infant&apos;s status and
                  control the bed remotely.
                </li>
                <li>
                  Implemented MQTT communication between the server, the client, and the Raspberry
                  Pi using Docker to send control values and commands between devices.
                </li>
                <li>
                  Refined the mechanical design of the bed to ensure the stability of the system and
                  the safety of the infant.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Infant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <InfantBoard setOpen={setOpen} />}
      <div
        className="mt-0 w-full rounded-lg bg-white align-middle text-base text-gray-500 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col content-center items-center justify-center p-5 md:p-2">
          <div className="mx-auto flex aspect-[3/2] w-full content-center items-center justify-center overflow-hidden rounded-lg bg-white bg-[url('/static/portfolio/InfantMonitor/infant-final-2.webp')] bg-cover bg-center bg-no-repeat hover:bg-[url('/static/portfolio/InfantMonitor/success-center-1.gif')] hover:bg-contain dark:bg-black" />
          <div className="my-5 break-words">
            <div className="text-center text-lg font-extrabold text-black dark:text-white">
              Infant Monitor
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
