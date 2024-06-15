import React from 'react';

export default function Contact() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 text-left shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-4 text-center text-3xl font-bold">{'<Contact />'}</h1>
      <div className="flex justify-center">
        <div className="text-base text-gray-500 dark:text-gray-300">
          <div className="flex flex-row font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="m-auto inline h-5 w-7 pr-2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div className="max-sm:hidden">Email:</div>
            <a
              href="mailto:michaellai901026@gmail.com"
              className="ml-10 basis-full break-words font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
            >
              michaellai901026@gmail.com
            </a>
          </div>
          <div className="flex flex-row font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto inline h-5 w-7 pr-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <div className="max-sm:hidden">LinkedIn:</div>
            <a
              href="https://www.linkedin.com/in/chun-mao-lai-aa1966229"
              className="ml-4 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
            >
              Chun-Mao Lai
            </a>
          </div>
          <div className="flex flex-row font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto inline h-5 w-7 pr-2"
              viewBox="0 0 28.314 28.323"
            >
              <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
            </svg>
            <div className="max-sm:hidden">Phone:</div>
            <a
              href="tel:+18583737788"
              className="ml-8 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
            >
              +1 858-373-7788
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
