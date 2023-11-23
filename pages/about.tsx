import Awards from "../components/About/Awards";
import Description from "../components/About/Description";
import Education from "../components/About/Education";
import Navbar from "../components/Navbar";
import userData from "../constants/data";

function About() {
  return (
    <>
      <div className="justify-center align-middle text-center flex flex-row items-center">
        <div className="mx-auto flex flex-col max-w-screen xl:max-w-4xl lg:max-w-3xl md:max-w-2xl">
          <h1 className="text-5xl md:text-5xl font-bold pt-10 pb-5 text-center">
            About Me.
          </h1>
          <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
            <p
              className="leading-normal text-xl md:text-2xl pb-5"
            >
              {userData.about.title}
            </p>
          </div>
          {/* {userData.about.description.map((paragraph: string, index) => {
            return (
              <div className="text-base text-gray-500 dark:text-gray-300 pb-5 indent-8" key={index}>
                {paragraph}
              </div>
            )
          })} */}
          <div className="flex flex-col space-y-12 w-screen xl:w-4xl lg:w-3xl md:w-2xl mt-10">
            <Description />
            <Education />
            <Awards />
          </div>
        </div>
      </div>

      <div className="h-48"></div>
    </>
  )
}

export default About