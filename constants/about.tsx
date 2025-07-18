const descriptionData = [
  <>
    Hello! My name is <b>Chun-Mao Lai (賴群貿)</b>, and I am also known as <b>Michael</b> or{' '}
    <b>Mecoli</b>. My personal interests include playing piano,{' '}
    <a
      className="text-blue-500 hover:underline dark:text-blue-300"
      href="https://musescore.com/user/11455091?share=copy_link"
    >
      composing music
    </a>
    , snowboarding, and building websites.
  </>,
  <>
    Currently, I am a Systems & Infrastructure Engineering Intern at LinkedIn, focused on Systems
    and Machine Learning Systems. I have extensive experience building distributed infrastructure,
    contributing to open-source projects, and solving complex, real-world problems across data,
    compute, and coordination layers. I'm particularly enthusiastic to tackle challenging, practical
    questions that significantly impact users and developers.
  </>,
  <>
    I've actively contributed to open-source projects like Flyte, enhancing Tuple/NamedTuple support
    and enabling interactive Jupyter integrations on Kubernetes. These experiences sharpened my
    skills in designing scalable workflows and collaborating across communities to deliver
    production-ready solutions.
  </>,
  <>
    <b>Fun Fact:</b> <i>&apos;Mecoli&apos;</i> is a playful fusion of Michael Lai&apos;s
    pronunciation and the name of the bacteria E.coli.
  </>,
];

const title = (
  <b>
    {/* Software Engineer & <br /> Machine Learning Engineer/Researcher */}
    Systems & Infrastructure Engineer
  </b>
);

const educationData = [
  [
    <a
      href="https://www.ucsd.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      University of California at San Diego
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Master of Science</b> in Computer Science Engineering
      </div>
      <div>Sep. 2024 - Dec. 2025</div>
      <ul className="list-inside list-disc">
        <li>GPA: 3.93 / 4.0</li>
      </ul>
    </div>,
  ],
  [
    <a
      href="https://illinois.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      University of Illinois at Urbana Champaign
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Exchange Program</b> in Electrical and Computer Engineering
      </div>
      <div>Aug. 2023 - Dec. 2023</div>
      <ul className="list-inside list-disc">
        <li>GPA: 4.0 / 4.0</li>
      </ul>
    </div>,
  ],
  [
    <a
      href="https://www.ntu.edu.tw/english/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      National Taiwan University
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Bachelor of Science in Engineering</b> at Electrical Engineering
      </div>
      <div>Sep. 2020 - Jun. 2024</div>
      <ul className="list-inside list-disc">
        <li>GPA: 3.97 / 4.0</li>
      </ul>
    </div>,
  ],
];

const awardData = [
  [
    2024,
    <a
      href="http://www.phitauphi.org.tw/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      The Phi Tau Phi Scholastic Honor Society of the Republic of China <br />{' '}
      (中華民國斐陶斐榮譽學會)
    </a>,
    'Honorary Member',
  ],
  [
    2024,
    <a
      href="https://make.ntuee.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      MakeNTU Hackathon Competition <br /> (臺大創新黑客松)
    </a>,
    'Best Creativity Prize, STMicroelectronics Company Prize 1st Place',
  ],
  [
    2023,
    <>
      NTUEE Undergraduate Innovation Award <br /> (臺大電機系精專獎)
    </>,
    'Third Prize Project',
  ],
  [
    2020,
    <>
      Presidential Award <br /> (臺大電機系書卷獎)
    </>,
    'Ranking 3 / 182 in 2020 Fall Semester',
  ],
  [
    2016,
    'International Junior Science Olympiad (IJSO)',
    <>
      <div>
        <b>3 Personal Gold Medals:</b> Highest personal score among all international participants.{' '}
        <br />
        <b>1 Team Gold Medal:</b> Highest team score among all countries.
      </div>
    </>,
  ],
];

const contactData = [
  <>
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
  </>,
  <>
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
  </>,
  <>
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
  </>,
];

export { descriptionData, title, educationData, awardData, contactData };
