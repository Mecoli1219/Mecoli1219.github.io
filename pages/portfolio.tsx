import Musecore from '../components/Musecore';
import AVSuperb from '../components/Portfolio/AVSuperb';
import Editor from '../components/Portfolio/Editor';
import GEM from '../components/Portfolio/GEM';
import Infant from '../components/Portfolio/InfantMonitor';
import MakeNTU from '../components/Portfolio/MakeNTU';
import Music from '../components/Portfolio/Music';
import Preselect from '../components/Portfolio/Preselect';
import WeekGame from '../components/Portfolio/WeekGame';
import { musicData } from '../constants/music';

function Portfolio() {
  return (
    <>
      <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
        <h1 className="pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl">Portfolio.</h1>
        <div className="text-container mx-auto max-w-md border-t-2 border-gray-400 pt-2">
          <p className="pb-5 text-center text-xl leading-normal text-gray-600 dark:text-gray-300">
            Technology is best when it brings people together.
          </p>
        </div>
        <div className="mt-16 grid w-full grid-cols-1 gap-5 border-b-2 border-gray-400 pb-16 dark:border-gray-700 sm:grid-cols-2 xl:grid-cols-3">
          <Infant />
          <Preselect />
          <Editor />
          <AVSuperb />
          <GEM />
          <WeekGame />
          <MakeNTU />
        </div>

        <div className="mb-8 mt-20 text-center text-3xl font-bold max-sm:text-2xl">MuseScore</div>
        <div className="grid w-full grid-cols-1 gap-5 border-gray-400 pb-16 dark:border-gray-700 sm:grid-cols-2 xl:grid-cols-3">
          {musicData.map((music, index) => {
            return <Music music={music} key={index} />;
          })}
        </div>
        <div className="h-12"></div>
      </div>
    </>
  );
}

export default Portfolio;
