import React from 'react';
import EESA from './EESA';
import LightDance from './Lightdance';
import MakeNTU from './MakeNTU';

export default function Extra() {
  return (
    <div className="w-full space-y-4 rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'<Others />'}</h1>
      <EESA />
      <LightDance />
      <MakeNTU />
    </div>
  );
}
