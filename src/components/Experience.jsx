import {
  Environment,
  Float,
  OrbitControls,
  SoftShadows,
} from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      <SoftShadows focus={0.05} size={60} samples={22} />
      <Float
        rotation={[-0.4, -0.05, -0.04]}
        floatIntensity={0.5}
        speed={0.75}
        rotationIntensity={0}
      >
        <Book position={[0, -0.15, 1.1]} />
      </Float>
      <Environment preset="park"></Environment>
      <directionalLight
        position={[0, 5, 5]}
        intensity={7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={1.7} rotation-x={-Math.PI / 6} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.6} />
      </mesh>
    </>
  );
};
