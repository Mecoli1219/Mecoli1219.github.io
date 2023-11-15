import researchData, { ResearchType } from "../constants/research";

function Research() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-row overflow-hidden min-h-60screen" key="">
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
                <div key={index}>
                  <div className="flex flex-col md:flex-row py-5 px-0 lg:px-5 justify-center items-center content-center" key={research.title}>
                    {/* <div className="" key=""> */}
                    <div className="lg:mr-5 max-md:max-w-96 max-md:mx-5 md:basis-2/6 lg:basis-1/4 md:min-h-48 mx-auto rounded-2xl overflow-hidden border flex justify-center items-center content-center bg-white h-fit max-md:mb-5">
                      <img src={research.image} className="object-cover" alt="" />
                    </div>
                    {/* </div> */}
                    <div className="basis-full md:basis-4/6 lg:basis-3/4 pl-5 max-md:pr-5">
                      <div className="pb-2">
                        <a className="text-lg font-bold " href={research.link}>
                          {research.title}
                        </a>
                      </div>
                      {
                        research.authors.map((author, index) => {
                          return (
                            <div key={index} className="inline">
                              {

                                author.link !== undefined
                                  ? <a href={author.link} className={"text-base hover:underline text-blue-500 dark:text-blue-300" + (author.me ? " font-bold" : " font-light")}>
                                    {author.name}
                                  </a >
                                  : <span className="text-base text-gray-500 dark:text-gray-300 font-light">
                                    {author.name}
                                  </span>
                              }
                              {
                                index !== research.authors.length - 1
                                  ? <span className="text-base text-gray-500 dark:text-gray-300">, </span>
                                  : <></>
                              }
                            </div>
                          )
                        })
                      }
                      <div className="text-base text-black dark:text-gray-300 font-normal" >
                        {research.journal}, {research.year}
                      </div>
                      <div className="text-base text-gray-500 dark:text-gray-300 py-2 font-light max-sm:hidden " key="">
                        {research.description}
                      </div>
                      {
                        Object.entries(research.others).map(([key, value], index) => {
                          return (
                            <div key={index} className="inline pr-1">
                              [ <a href={value} className="hover:underline text-blue-500 dark:text-blue-300">
                                {key}
                              </a> ]
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  {
                    index !== researchData.researchList.length - 1 ?
                      <div className="mx-3 md:mx-0 lg:mx-3  border-gray-400 border box-border mt-5 mb-12 md:my-2" key={index}>
                      </div> : <></>
                  }
                </div>
              )
            })}
          </div>
        </div>

      </div>
      <div className="h-48"></div>
    </>
  )
}

export default Research