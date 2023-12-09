import React from "react";
import TechBox, { techs } from "../TechBox";

export default function Skills() {
    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md w-full">
            <h1 className="text-3xl font-bold text-center mb-8">{"<Skills />"}</h1>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 w-full gap-y-2 sm:gap-y-0 gap-x-4 sm:gap-x-4 sm:px-10">
                    {techs.map((tech) => {
                        return <TechBox tech={tech} key={tech} bgColor="bg-gray-200 dark:bg-gray-500" />
                    })}
                </div>
            </div>
        </div>
    )
}