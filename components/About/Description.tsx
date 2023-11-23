import React from "react";

export default function Description() {


    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 flex flex-row max-sm:flex-col rounded-lg shadow-md">
            {/* <h1 className="text-3xl font-bold underline">HI</h1> */}
            <div className="sm:hidden basis-2/5 mx-auto w-3/4 rounded-2xl overflow-hidden flex justify-center items-center content-center bg-white h-fit max-md:mb-5">
                <img src="/static/avatar.jpg" className="object-cover" alt="" />
            </div>
            <div className="text-base text-gray-500 dark:text-gray-300 indent-8 text-left sm:basis-3/5 xl:basis-4/6">
                <div className="pb-5 ">
                    Hello! My name is <b>Chun-Mao Lai (賴群貿)</b>, and I am also known as <b>Michael</b> or <b>Mecoli</b>.
                </div>
                <div className="pb-5 ">
                    I was born in Tainan, Taiwan, and I am currently a undergraduate student in Electrical Engineering Department at National Taiwan University since 2020.
                </div>
            </div>
            {/* Image Part */}
            <div className="ml-5 max-sm:hidden basis-2/5 xl:basis-2/6 mx-auto rounded-2xl overflow-hidden flex justify-center items-center content-center bg-white h-fit max-md:mb-5">
                <img src="/static/avatar.jpg" className="object-cover" alt="" />
            </div>
        </div>
    )
}