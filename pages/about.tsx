import Awards from "../components/About/Awards";
import Contact from "../components/About/Contact";
import Description from "../components/About/Description";
import Education from "../components/About/Education";

function About() {
  return (
    <>
      {/* <div className="justify-center align-middle text-center flex flex-row items-center"> */}
      <div className="mx-auto w-screen xl:w-4xl lg:w-3xl md:w-2xl px-5 flex flex-col ">
        <h1 className="text-4xl sm:text-5xl font-bold pt-10 pb-5 text-center w-full">
          About Me.
        </h1>
        <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
          <p
            className="leading-normal text-xl pb-5 text-center text-gray-500 dark:text-gray-300"
          >
            Software Engineer & Researcher in Deep Learning.
          </p>
        </div>
        <div className="flex flex-col space-y-12 mt-10 px-5 max-sm:px-0 mx-auto items-center box-border w-full">
          <Description />
          <Education />
          <Awards />
          <Contact />
        </div>
      </div>
      {/* </div> */}

    </>
  )
}

export default About