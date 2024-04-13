import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const SkillCube = () => {
  const mesh = useRef();

  // Rotate the cube continuously
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial attachArray="material" color="white" /> {/* Set default material for all sides */}
      {[0, 1, 2, 3, 4, 5].map((index) => ( // Create textures for each side
        <meshStandardMaterial key={index} attachArray="material" map={new TextureLoader().load('../../assets/skills/node.png')} />
      ))}
    </mesh>
  );
};

const SkillCubeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SkillCube />
    </Canvas>
  );
};

export default SkillCubeScene;