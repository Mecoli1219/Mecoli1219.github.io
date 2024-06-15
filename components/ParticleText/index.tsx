import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader';
import Environment from './Environment';

const style: React.CSSProperties = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  display: 'block',
  top: 0,
  left: 0,
  zIndex: '-9999',
};

// "      NTUEE\nLIGHTDANCE"
export default function ParticleText({ text }: { text: string }) {
  const preload = () => {
    const manager = new THREE.LoadingManager();
    manager.onLoad = function () {
      if (typo !== undefined && particle !== undefined) {
        const environment = new Environment(typo, particle, text);
      }
    };

    var typo: Font;
    const loader = new FontLoader(manager);
    const font = loader.load(
      './static/Black Jack_Regular.json',
      // "./static/Dancing Script OT_Regular.json",
      // "./static/JetBrains Mono Medium_Italic.json",
      // "./static/JetBrains Mono Medium_Regular.json",
      // "./static/font.json",
      function (font) {
        typo = font;
      },
    );
    const particle = new THREE.TextureLoader(manager).load('./static/particle.png');
  };
  useEffect(() => preload());
  return <div id="magic" style={style}></div>;
}
