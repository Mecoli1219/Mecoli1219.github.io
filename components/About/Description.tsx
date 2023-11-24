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
                    I was born in Tainan, Taiwan, and I am currently an undergraduate student in the Electrical Engineering (EE) Department at National Taiwan University (NTU) since 2020. My primary interest is in building user-friendly applications and integrating machine learning techniques to improve the quality of life.
                </div>
                <div className="pb-5 ">
                    My research interests mainly focus on Deep Learning, including Reinforcement Learning, Natural Language Progressing, and Computer Vision. During my undergraduate study, I have actively participated in several laboratories and research projects, including <a className=" text-blue-500 dark:text-blue-300 font-bold hover:underline" href="https://nturobotlearninglab.github.io/dbc/">Robot Learning Lab</a>, <a className=" text-blue-500 dark:text-blue-300 font-bold hover:underline" href="https://www.csie.ntu.edu.tw/~miulab/">Machine Intelligence & Understanding Laboratory</a>, and <a className=" text-blue-500 dark:text-blue-300 font-bold hover:underline" href="https://speech.ee.ntu.edu.tw/~hylee/index.php">Speech Processing and Machine Learning Lab</a>.
                </div>
            </div>
            {/* Image Part */}
            <div className="ml-5 max-sm:hidden basis-2/5 xl:basis-2/6 mx-auto rounded-2xl overflow-hidden flex justify-center items-center content-center bg-white h-fit max-md:mb-5">
                <img src="/static/avatar.jpg" className="object-cover" alt="" />
            </div>
        </div>
    )
}