const CPP = "/static/tech/cpp-logo.png"
const CSS = "/static/tech/css-logo.png"
const Docker = "/static/tech/docker-logo.png"
const Express = "/static/tech/icons8-express-js-480.png"
const Git = "/static/tech/git-logo.png"
const HTML = "/static/tech/html-logo.png"
const JS = "/static/tech/js-logo.png"
const Node = "/static/tech/node-logo.png"
const Next = "/static/tech/next-logo.png"
const Python = "/static/tech/python-logo.png"
const Pytorch = "/static/tech/pytorch-logo.png"
const React = "/static/tech/react-logo.png"
const Tailwind = "/static/tech/tailwind-logo.png"
const TS = "/static/tech/ts-logo.png"
const Mongo = "/static/tech/mongodb_original_wordmark_logo_icon_146425.png"
const Flask = "/static/tech/icons8-flask-500.png"
const Redis = "/static/tech/icons8-redis-480.png"
const Mui = '/static/tech/icons8-material-ui-480.png'
const Three = '/static/tech/threejs-logo.png'
const Graphql = '/static/tech/GraphQL.png'
const prisma = '/static/tech/prisma.png'
const postgres = '/static/tech/postgresql.png'
const google = '/static/tech/google.png'
const openCV = '/static/tech/opencv.png'
const ros = '/static/tech/ROS.png'

export const techs = [
    CPP, Python, HTML, CSS, JS, TS, Pytorch, Flask, React, Next, Mui, Tailwind, Three, Node, Express, Mongo, Redis, Docker, Git
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
    "nextjs": Next,
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
    "Robotic Operating System (ROS)": ros
}

// export techDict key type
export type TechDictType = keyof typeof techDict;

export default function TechBox({ tech }: { tech: TechDictType }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full aspect-square p-3 sm:p-4 bg-gray-200 dark:bg-gray-600 rounded-lg justify-center items-center flex">
                <img src={techDict[tech]} alt={tech} />
            </div>
            <p className="text-sm md:text-base font-semibold text-center pb-4 pt-1">{tech}</p>
        </div>
    )
}