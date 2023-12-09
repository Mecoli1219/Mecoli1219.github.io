import Editor from "../components/Portfolio/Editor"
import MakeNTU from "../components/Portfolio/MakeNTU"
import Preselect from "../components/Portfolio/Preselect"
import WeekGame from "../components/Portfolio/WeekGame"

function Portfolio() {
  return (
    <>
      <div className="mx-auto w-screen xl:w-4xl lg:w-3xl md:w-2xl px-5 flex flex-col ">
        <h1 className="text-4xl sm:text-5xl font-bold pt-10 pb-5 text-center">
          Portfolio.
        </h1>
        <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
          <p
            className="leading-normal text-xl pb-5 text-center text-gray-500 dark:text-gray-300"
          >
            Technology is best when it brings people together.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-3 mt-16">
          <Preselect />
          <Editor />
          <WeekGame />
          <MakeNTU />
        </div>
        <div className="h-12"></div>

      </div>
    </>
  )
}

export default Portfolio