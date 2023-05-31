
import Navbar from "../components/Navbar";
import researchData, { ResearchType } from "../constants/research";

function Research() {
  return (
    <>
      <title>Mecoli1219</title>
      <section className="bg-white dark:bg-gray-800">
        {/* <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        </div> */}
        <div className="bg-[#F1F1F1] mt-0 dark:bg-gray-900">
          <Navbar />
          <div className="max-w-7xl mx-auto flex flex-row overflow-hidden min-h-60screen">
            <div className="basis-5/5 md:basis-5/5">
              <div className="px-5 md:px-20 pt-5">
                <h1 className="text-5xl md:text-5xl font-bold py-10 text-center md:text-left">
                  Research.
                </h1>
                {researchData.interest.map((paragraph: string) => {
                  return (
                    <div className="text-base text-gray-500 dark:text-gray-300 pb-5 indent-8" key="">
                      {paragraph}
                    </div>
                  )
                })}
                <div className="h-12"></div>
                {researchData.researchList.map((research: ResearchType) => {
                  return (
                    <div className="flex flex-row p-5" key="">
                      {/* <div className="" key=""> */}
                      <img src={research.image} className="pr-5 max-h-64 basis-1/2 md:basis-1/4 object-cover overflow-hidden mx-auto" alt="" />
                      {/* </div> */}
                      <div className="basis-1/2 md:basis-3/4 pl-5" key="">
                        <div className="pb-2">
                          <a className="text-lg font-bold " href={research.link}>
                            {research.title}
                          </a>
                        </div>
                        {
                          research.authors.map((author, index) => {
                            return (
                              <>
                                {

                                  author.link !== undefined
                                    ? <a href={author.link} className={"text-base  " + (author.me ? "font-bold" : "text-blue-500 dark:text-blue-300")}>
                                      {author.name}
                                    </a >
                                    : <span className="text-base text-gray-500 dark:text-gray-300 ">
                                      {author.name}
                                    </span>
                                }
                                {
                                  index !== research.authors.length - 1
                                    ? <span className="text-base text-gray-500 dark:text-gray-300">, </span>
                                    : <></>
                                }
                              </>
                            )
                          })
                        }
                        <div className="text-base text-gray-500 dark:text-gray-300 " >
                          {research.journal}, {research.year}
                        </div>
                        {
                          Object.entries(research.others).map(([key, value], index) => {
                            return (
                              <>
                                <a href={value} className="text-blue-500 dark:text-blue-300">
                                  {key}
                                </a>
                                {
                                  index !== Object.entries(research.others).length - 1
                                    ? <span className="text-base text-gray-500 dark:text-gray-300"> / </span>
                                    : <></>
                                }
                              </>
                            )
                          })
                        }
                        <div className="text-base text-gray-500 dark:text-gray-300 pt-5" key="">
                          {research.description}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
          <div className="h-48"></div>
        </div>
      </section >
    </>
  )
}

export default Research