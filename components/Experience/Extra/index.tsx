import React from "react";
import EESA from "./EESA";
import LightDance from "./Lightdance";
import MakeNTU from "./MakeNTU";


export default function Extra() {
    return (
        <div className="bg-white dark:bg-gray-600 py-12 px-2 sm:px-12 rounded-lg shadow-md w-full space-y-4">
            <h1 className="text-3xl max-sm:text-2xl font-bold text-left mb-8">{"<Others />"}</h1>
            <EESA />
            <LightDance />
            <MakeNTU />
        </div>
    )
}