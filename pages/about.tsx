import Navbar from "../components/Navbar";
import userData from "../constants/data";

function About() {
  return (
    <>
      <div className="max-w-7xl  mx-auto  flex flex-col md:flex-row ">
        <div className="basis-5/5 md:basis-3/5">
          <div className="pl-20 pr-20 pt-5">
            <h1 className=" text-5xl md:text-5xl font-bold py-10 text-center md:text-left">
              About Me.
            </h1>
            <div className="text-container max-w-6xl mx-auto pt-0">
              <p
                className="leading-loose text-2xl md:text-3xl pb-5"
                style={{ lineHeight: "3rem" }}
              >
                {userData.about.title}
              </p>
            </div>
            {userData.about.description.map((paragraph: string, index) => {
              return (
                <div className="text-base text-gray-500 dark:text-gray-300 pb-5 indent-8" key={index}>
                  {paragraph}
                </div>
              )
            })}
          </div>
        </div>
        {/* Image Part */}
        <div className=" md:block relative w-cover h-128 md:w-6/12  mt-20 mb-10 min-h-80screen mx-auto">
          <img src="/static/avatar.jpg" alt="avatar" className="object-cover object-bottom w-3/4 h-full overflow-hidden rounded-3xl mx-auto" />
        </div>

      </div>
      <div className="h-48"></div>
    </>
  )
}

export default About