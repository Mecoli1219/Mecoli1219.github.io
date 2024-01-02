// const CPP = "/static/tech/cpp-logo.png"
// const CSS = "/static/tech/css-logo.png"
// const Docker = "/static/tech/docker-logo.png"
// const Express = "/static/tech/icons8-express-js-480.png"
// const Git = "/static/tech/git-logo.png"
// const HTML = "/static/tech/html-logo.png"
// const JS = "/static/tech/js-logo.png"
// const Node = "/static/tech/node-logo.png"
// const Next = "/static/tech/next-logo.png"
// const Python = "/static/tech/python-logo.png"
// const Pytorch = "/static/tech/pytorch-logo.png"
// const React = "/static/tech/react-logo.png"
// const Tailwind = "/static/tech/tailwind-logo.png"
// const TS = "/static/tech/ts-logo.png"
// const Mongo = "/static/tech/mongodb_original_wordmark_logo_icon_146425.png"
// const Flask = "/static/tech/icons8-flask-500.png"
// const Redis = "/static/tech/icons8-redis-480.png"
// const Mui = '/static/tech/icons8-material-ui-480.png'
// const Three = '/static/tech/threejs-logo.png'
// const Graphql = '/static/tech/GraphQL.png'
// const prisma = '/static/tech/prisma.png'
// const postgres = '/static/tech/postgresql.png'
// const google = '/static/tech/google.png'
// const openCV = '/static/tech/opencv.png'
// const ros = '/static/tech/ROS.png'
// const CSharp = '/static/tech/c-sharp.png'
// const tensorflow = '/static/tech/tensorflow.png'
// const huggingface = '/static/tech/hf-logo.png'
// const mysql = '/static/tech/mysql.png'
// const golang = '/static/tech/go-logo.png'
import Image from 'next/image'
import CPP from '@/static/tech/cpp-logo.png'
import CSS from '@/static/tech/css-logo.png'
import Docker from '@/static/tech/docker-logo.png'
import Express from '@/static/tech/icons8-express-js-480.png'
import Git from '@/static/tech/git-logo.png'
import HTML from '@/static/tech/html-logo.png'
import JS from '@/static/tech/js-logo.png'
import Node from '@/static/tech/node-logo.png'
import Next from '@/static/tech/next-logo.png'
import Python from '@/static/tech/python-logo.png'
import Pytorch from '@/static/tech/pytorch-logo.png'
import React from '@/static/tech/react-logo.png'
import Tailwind from '@/static/tech/tailwind-logo.png'
import TS from '@/static/tech/ts-logo.png'
import Mongo from '@/static/tech/mongodb_original_wordmark_logo_icon_146425.png'
import Flask from '@/static/tech/icons8-flask-500.png'
import Redis from '@/static/tech/icons8-redis-480.png'
import Mui from '@/static/tech/icons8-material-ui-480.png'
import Three from '@/static/tech/threejs-logo.png'
import Graphql from '@/static/tech/GraphQL.png'
import prisma from '@/static/tech/prisma.png'
import postgres from '@/static/tech/postgresql.png'
import google from '@/static/tech/google.png'
import openCV from '@/static/tech/opencv.png'
import ros from '@/static/tech/ROS.png'
import CSharp from '@/static/tech/c-sharp.png'
import tensorflow from '@/static/tech/tensorflow.png'
import huggingface from '@/static/tech/hf-logo.png'
import mysql from '@/static/tech/mysql.png'
import golang from '@/static/tech/go-logo.png'


export const techs: TechDictType[] = [
    "C/C++",
    "Python",
    "Javascript",
    "Typescript",
    "C#",
    "Golang",
    "HTML",
    "CSS",
    "PyTorch",
    "Tensorflow",
    "HuggingFace",
    "OpenCV",
    "Flask",
    "React",
    "Next.js",
    "ThreeJS",
    "MaterialUI",
    "Tailwind",
    "NodeJS",
    "ExpressJS",
    "GraphQL",
    "Prisma",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "GoogleAPI",
    "Robotic Operating System (ROS)",
    "Docker",
    "Git",
]
// export { CPP, CSS, Docker, Express, Git, HTML, JS, Node, Next, Python, Pytorch, React, Mongo, Tailwind, TS, Flask, Redis, Mui }

export const techDict = {
    "C/C++": CPP,
    "Python": Python,
    "HTML": HTML,
    "CSS": CSS,
    "Javascript": JS,
    "Typescript": TS,
    "PyTorch": Pytorch,
    "Flask": Flask,
    "React": React,
    "Next.js": Next,
    "MaterialUI": Mui,
    "Tailwind": Tailwind,
    "NodeJS": Node,
    "ExpressJS": Express,
    "MongoDB": Mongo,
    "Redis": Redis,
    "Docker": Docker,
    "Git": Git,
    "ThreeJS": Three,
    "GraphQL": Graphql,
    "Prisma": prisma,
    "PostgreSQL": postgres,
    "GoogleAPI": google,
    "OpenCV": openCV,
    "Robotic Operating System (ROS)": ros,
    "C#": CSharp,
    "Tensorflow": tensorflow,
    "HuggingFace": huggingface,
    "MySQL": mysql,
    "Golang": golang,
}

// export techDict key type
export type TechDictType = keyof typeof techDict;

export default function TechBox({ tech, bgColor = "bg-gray-200 dark:bg-gray-600" }: { tech: TechDictType, bgColor?: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className={`w-full h-fit p-3 sm:p-4 rounded-lg ${bgColor}`}>
                {/* <img src={techDict[tech]} alt={tech} className="w-full aspect-square object-contain" /> */}
                <Image
                    src={techDict[tech]}
                    alt={tech}
                    className="w-full aspect-square object-contain"
                    sizes="30vw"
                />
            </div>
            <p className="text-sm md:text-base font-semibold text-center pb-4 pt-1">{tech}</p>
        </div>
    )
}