import Research from "../components/Experience/Research";

function Experience() {
  return (
    <>
      <div className="mx-auto flex flex-col max-w-screen xl:max-w-4xl lg:max-w-3xl md:max-w-2xl px-5">
        <h1 className="text-5xl md:text-5xl font-bold pt-10 pb-5 text-center">
          Experience.
        </h1>
        <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
          <p
            className="leading-normal text-xl pb-5 text-center text-gray-500 dark:text-gray-300"
          >
            The only source of knowledge is experience.
          </p>
        </div>
        <div className="flex flex-col space-y-12 w-screen xl:w-4xl lg:w-3xl md:w-2xl mt-10">
          <Research />
        </div>
      </div>
    </>
  )
}

export default Experience