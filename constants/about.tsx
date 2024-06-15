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
  <>
    <th className="flex basis-2/6 items-center">
      <a
        href="https://www.ucsd.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
      >
        University of California at San Diego
      </a>
    </th>
    <td className="flex basis-4/6 items-center px-5">
      <div>
        <div className="text-black dark:text-white">
          <b>Master of Science</b> in Computer Science Engineering
        </div>
        <div>Sep. 2024 - Jun. 2026</div>
      </div>
    </td>
  </>,
  <>
    <th className="flex basis-2/6 items-center">
      <a
        href="https://illinois.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
      >
        University of Illinois at Urbana Champaign
      </a>
    </th>
    <td className="flex basis-4/6 items-center px-5">
      <div>
        <div className="text-black dark:text-white">
          <b>Exchange Program</b> in Electrical and Computer Engineering
        </div>
        <div>Aug. 2023 - Dec. 2023</div>
        <ul className="list-inside list-disc">
          <li>GPA: 4.0 / 4.0</li>
        </ul>
      </div>
    </td>
  </>,
  <>
    <th className="flex basis-2/6 items-center">
      <a
        href="https://www.ntu.edu.tw/english/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
      >
        National Taiwan University
      </a>
    </th>
    <td className="flex basis-4/6 items-center px-5">
      <div>
        <div className="text-black dark:text-white">
          <b>Bachelor of Science in Engineering</b> at Electrical Engineering
        </div>
        <div>Sep. 2020 - Jun. 2024</div>
        <ul className="list-inside list-disc">
          <li>GPA: 4.16 / 4.30</li>
        </ul>
      </div>
    </td>
  </>,
];

const awardData = [
  <>
    <th className="flex w-16 items-center">
      <p>2024</p>
    </th>
    <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
      <a
        href="http://www.phitauphi.org.tw/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        The Phi Tau Phi Scholastic Honor Society of the Republic of China <br />{' '}
        (中華民國斐陶斐榮譽學會)
      </a>
    </th>
    <td className="flex basis-7/12 items-center px-5">Honorary Member</td>
  </>,
  <>
    <th className="flex w-16 items-center">
      <p>2024</p>
    </th>
    <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
      <a
        href="https://make.ntuee.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        MakeNTU Hackathon Competition <br /> (臺大創新黑客松)
      </a>
    </th>
    <td className="flex basis-7/12 items-center px-5">
      <div>Best Creativity Prize, STMicroelectronics Company Prize 1st Place</div>
    </td>
  </>,
  <>
    <th className="flex w-16 items-center">
      <p>2023</p>
    </th>
    <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
      NTUEE Undergraduate Innovation Award <br /> (臺大電機系精專獎)
    </th>
    <td className="flex basis-7/12 items-center px-5">Third Prize Project</td>
  </>,
  <>
    <th className="flex w-16 items-center">2020</th>
    <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
      Presidential Award <br /> (臺大電機系書卷獎)
    </th>
    <td className="flex basis-7/12 items-center px-5">Ranking 3 / 182 in 2020 Fall Semester</td>
  </>,
  <>
    <th className="flex w-16 items-center">2016</th>
    <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
      International Junior Science Olympiad (IJSO)
    </th>
    <td className="flex basis-7/12 items-center px-5">
      <div>
        <b className="text-black dark:text-white">3 Personal Gold Medals:</b> Highest personal score
        among all international participants. <br />
        <b className="text-black dark:text-white">1 Team Gold Medal:</b> Highest team score among
        all countries.
      </div>
    </td>
  </>,
];

export { descriptionData, title, educationData, awardData };
