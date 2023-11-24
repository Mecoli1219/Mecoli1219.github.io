import Publication from "../components/Publications/Publication";
import researchData, { ResearchType } from "../constants/research";

function Publications() {
  return (
    <>
      <div className="max-w-screen mx-auto flex flex-col px-5 md:px-20" >
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold pt-10 pb-5 text-center">
          Publications.
        </h1>
        <div className="text-container max-w-md mx-auto pt-2 border-t-2 border-gray-400">
          <p
            className="leading-normal text-xl pb-5 text-center text-gray-500 dark:text-gray-300"
          >
            Depth fuels expertise, breadth sparks innovation.
          </p>
        </div>
        <div className="h-12"></div>
        {researchData.researchList.map((research: ResearchType, index: number) => {
          return (
            <Publication research={research} index={index} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default Publications