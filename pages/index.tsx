import React, { useEffect } from "react";
import Link from "next/link";

import ParticleText from "../components/ParticleText";

function Home() {
  const particleText = "Chun-Mao Lai\n      Mecoli";

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, []);

  return (

    <>
      <ParticleText text={particleText} />
      <div className="text-center p-30">
        <div className="absolute py-0 w-full bottom-0 left-0 flex flex-nowrap flex-col justify-end items-center">
          <Link id="enter" className="text-gray-700 dark:text-white text-center text-4xl mb-70p hover:scale-125 hover:cursor-pointer duration-500" href="/about">
            Enter
          </Link>
        </div>
      </div>

    </>
  )
}
Home.transparentNavbar = true;

export default Home