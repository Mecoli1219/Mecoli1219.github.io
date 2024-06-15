import Image from 'next/image';
import CPP from '@/static/tech/cpp-logo.png';
import CSS from '@/static/tech/css-logo.png';
import Docker from '@/static/tech/docker-logo.png';
import Express from '@/static/tech/icons8-express-js-480.png';
import Git from '@/static/tech/git-logo.png';
import HTML from '@/static/tech/html-logo.png';
import JS from '@/static/tech/js-logo.png';
import Node from '@/static/tech/node-logo.png';
import Next from '@/static/tech/next-logo.png';
import Python from '@/static/tech/python-logo.png';
import Pytorch from '@/static/tech/pytorch-logo.png';
import React from '@/static/tech/react-logo.png';
import Tailwind from '@/static/tech/tailwind-logo.png';
import TS from '@/static/tech/ts-logo.png';
import Mongo from '@/static/tech/mongodb_original_wordmark_logo_icon_146425.png';
import Flask from '@/static/tech/icons8-flask-500.png';
import Redis from '@/static/tech/icons8-redis-480.png';
import Mui from '@/static/tech/icons8-material-ui-480.png';
import Three from '@/static/tech/threejs-logo.png';
import Graphql from '@/static/tech/GraphQL.png';
import prisma from '@/static/tech/prisma.png';
import postgres from '@/static/tech/postgresql.png';
import google from '@/static/tech/google.png';
import openCV from '@/static/tech/opencv.png';
import ros from '@/static/tech/ROS.png';
import CSharp from '@/static/tech/c-sharp.png';
import tensorflow from '@/static/tech/tensorflow.png';
import huggingface from '@/static/tech/hf-logo.png';
import mysql from '@/static/tech/mysql.png';
import golang from '@/static/tech/go-logo.png';
import mqtt from '@/static/tech/mqtt.png';
import mediaPipe from '@/static/tech/mediapipe.png';

export const techs: TechDictType[] = [
  'C/C++',
  'Python',
  'Javascript',
  'Typescript',
  'C#',
  'Golang',
  'HTML',
  'CSS',
  'PyTorch',
  'Tensorflow',
  'HuggingFace',
  'OpenCV',
  'Flask',
  'mediaPipe',
  'MQTT',
  'React',
  'Next.js',
  'ThreeJS',
  'MaterialUI',
  'Tailwind',
  'NodeJS',
  'ExpressJS',
  'GraphQL',
  'Prisma',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'GoogleAPI',
  'Robotic Operating System (ROS)',
  'Docker',
  'Git',
];
// export { CPP, CSS, Docker, Express, Git, HTML, JS, Node, Next, Python, Pytorch, React, Mongo, Tailwind, TS, Flask, Redis, Mui }

export const techDict = {
  'C/C++': CPP,
  Python: Python,
  HTML: HTML,
  CSS: CSS,
  Javascript: JS,
  Typescript: TS,
  PyTorch: Pytorch,
  Flask: Flask,
  React: React,
  'Next.js': Next,
  MaterialUI: Mui,
  Tailwind: Tailwind,
  NodeJS: Node,
  ExpressJS: Express,
  MongoDB: Mongo,
  Redis: Redis,
  Docker: Docker,
  Git: Git,
  ThreeJS: Three,
  GraphQL: Graphql,
  Prisma: prisma,
  PostgreSQL: postgres,
  GoogleAPI: google,
  OpenCV: openCV,
  'Robotic Operating System (ROS)': ros,
  'C#': CSharp,
  Tensorflow: tensorflow,
  HuggingFace: huggingface,
  MySQL: mysql,
  Golang: golang,
  MQTT: mqtt,
  mediaPipe: mediaPipe,
};

// export techDict key type
export type TechDictType = keyof typeof techDict;

export default function TechBox({
  tech,
  bgColor = 'bg-gray-200 dark:bg-gray-600',
}: {
  tech: TechDictType;
  bgColor?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-fit w-full rounded-lg p-3 sm:p-4 ${bgColor}`}>
        {/* <img src={techDict[tech]} alt={tech} className="w-full aspect-square object-contain" /> */}
        <Image
          src={techDict[tech]}
          alt={tech}
          className="aspect-square w-full object-contain"
          sizes="30vw"
        />
      </div>
      <p className="pb-4 pt-1 text-center text-sm font-semibold md:text-base">{tech}</p>
    </div>
  );
}
