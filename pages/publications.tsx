import Publication from '../components/Publications/Publication';
import researchData, { ResearchType } from '../constants/research';

function Publications() {
  return (
    <>
      <div className="mx-auto flex max-w-screen flex-col px-5 md:px-20">
        <h1 className="pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl md:text-5xl">
          Publications.
        </h1>
        <div className="text-container mx-auto max-w-md border-t-2 border-gray-400 pt-2">
          <p className="pb-5 text-center text-xl leading-normal text-gray-600 dark:text-gray-300">
            Depth fuels expertise, breadth sparks innovation.
          </p>
        </div>
        <div className="h-12"></div>
        {researchData.map((research: ResearchType, index: number) => {
          return <Publication research={research} index={index} key={index} />;
        })}
      </div>
    </>
  );
}

export default Publications;
