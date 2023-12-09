import Musecore from "../components/Musecore"
import AVSuperb from "../components/Portfolio/AVSuperb"
import Editor from "../components/Portfolio/Editor"
import GEM from "../components/Portfolio/GEM"
import MakeNTU from "../components/Portfolio/MakeNTU"
import Music from "../components/Portfolio/Music"
import Preselect from "../components/Portfolio/Preselect"
import WeekGame from "../components/Portfolio/WeekGame"
import { musicData } from "../constants/music"

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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-3 mt-16 pb-16 border-b-2 border-gray-400 dark:border-gray-700">
          <Preselect />
          <Editor />
          <AVSuperb />
          <GEM />
          <WeekGame />
          <MakeNTU />
        </div>

        <div className="text-3xl max-sm:text-2xl font-bold mb-8 mt-20 text-center">
          MuseScore
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-3 pb-16 border-gray-400 dark:border-gray-700">
          {
            musicData.map((music, index) => {
              return <Music music={music} key={index} />
            })
          }
        </div>
        <div className="h-12"></div>

      </div>
    </>
  )
}

export default Portfolio