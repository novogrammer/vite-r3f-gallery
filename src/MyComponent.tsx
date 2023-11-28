import { Canvas, PrimitiveProps, useLoader } from "@react-three/fiber";
import styles from "./MyComponent.module.scss";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


function Suzanne(props:Partial<PrimitiveProps>) {
  const gltf = useLoader(GLTFLoader, "./assets/Suzanne.glb");
  const merged=Object.assign(
    Object.assign({},props),
    {
      object:gltf.scene
    }
  );
  
  return (
    <primitive {...merged}/>
  );
}


export default function MyComponent() {
  return (
    <Canvas className={styles["component"]} frameloop="demand">
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 5]} />
      {/* <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color={new THREE.Color(0xff00ff)} />
      </mesh> */}
      <Suzanne/>
    </Canvas>
  );
}
