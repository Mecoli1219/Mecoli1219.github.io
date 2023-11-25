import Research from "../components/Experience/Research";
import Work from "../components/Experience/Work";

function Experience() {
  return (
    <>
      <div className="mx-auto w-screen xl:w-4xl lg:w-3xl md:w-2xl px-5 flex flex-col ">
        <h1 className="text-4xl sm:text-5xl font-bold pt-10 pb-5 text-center">
          Experience.
        </h1>
        <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
          <p
            className="leading-normal text-xl pb-5 text-center text-gray-500 dark:text-gray-300"
          >
            The only source of knowledge is experience.
          </p>
        </div>
        <div className="flex flex-col space-y-12 mt-10 px-5 max-sm:px-0 mx-auto items-center box-border w-full">
          <Work />
          <Research />
        </div>
      </div>
    </>
  )
}

export default Experience