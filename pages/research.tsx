
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
                {researchData.interest.map((paragraph: string, index: number) => {
                  return (
                    <div className="text-base text-gray-500 dark:text-gray-300 pb-5 indent-8" key={index}>
                      {paragraph}
                    </div>
                  )
                })}
                <div className="h-12"></div>
                {researchData.researchList.map((research: ResearchType, index: number) => {
                  return (
                    <>
                      <div className="flex flex-col md:flex-row py-5 px-0 lg:px-5" key={research.title}>
                        {/* <div className="" key=""> */}
                        <img src={research.image} className="lg:pr-5 max-h-64 max-md:max-w-80screen md:basis-2/6 lg:basis-1/4 object-cover overflow-hidden mx-auto" alt="" />
                        {/* </div> */}
                        <div className="basis-full md:basis-4/6 lg:basis-3/4 pl-5 max-md:pr-5" key="">
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
                      {
                        index !== researchData.researchList.length - 1 ?
                          <div className="mx-3 md:mx-0 lg:mx-3  border-gray-400 border box-border mt-5 mb-12 md:my-2">
                          </div> : <></>
                      }
                    </>
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