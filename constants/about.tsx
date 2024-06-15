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
    , and building websites.
  </>,
  <>
    I am a Master of Science student in Computer Science Engineering at the University of California
    San Diego (UCSD) since 2024. My primary interest is in building user-friendly applications and
    integrating Artificial Intelligence to improve the quality of life. I am particularly
    enthusiastic about leveraging Machine Learning to create innovative applications and optimize
    machine learning pipelines.`
  </>,
  <>
    During my undergraduate studies at National Taiwan University (NTU), I published five papers,
    showcasing my dedication to advancing AI research. In the meantime, I gained proficiency in a
    wide range of programming languages, including JavaScript, TypeScript, Python, C, C++, C#,
    Verilog, Matlab, GoLang, and Rust, among others. I also participated in several projects,
    including open-source contributions, to enhance my coding skills. I am eager to continue
    expanding my technical skills and aspire to build impactful and exciting projects in the future.
  </>,
  <>
    <b>Fun Fact:</b> &apos;Mecoli&apos; is a playful fusion of Michael Lai&apos;s pronunciation and
    the name of the bacteria E.coli.
  </>,
];

const title = 'Software engineer in Web Development & Researcher about Deep Learning.';

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
      <div>Sep. 2024 - Jun. 2026</div>
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
        <li>GPA: 4.16 / 4.30</li>
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
      NTUEE Undergraduate Innovation Award <br /> (臺大電機系精專獎)',
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

export { descriptionData, title, educationData, awardData };
