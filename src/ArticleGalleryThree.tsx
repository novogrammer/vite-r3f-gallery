import { Canvas, PrimitiveProps, useLoader } from "@react-three/fiber";
import styles from "./ArticleGalleryThree.module.scss";
// import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Float, PerspectiveCamera } from "@react-three/drei";


function Suzanne(props:Partial<PrimitiveProps>) {
  const gltf = useLoader(GLTFLoader, "./assets/Suzanne.glb");
  const merged=Object.assign(
    Object.assign({},props),
    {
      object:gltf.scene.clone()
    }
  );
  
  return (
    <primitive {...merged}/>
  );
}


export default function ArticleGalleryThree() {
  
  return (
    <article className={styles["component"]}>
      <div className={styles["component__view-wrapper"]}>
        <Canvas className={styles["component__view"]}>
          <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 0, 5]} />
          {/* <mesh>
            <boxGeometry args={[2,2,2]} />
            <meshStandardMaterial color={new THREE.Color(0xff00ff)} />
          </mesh> */}
          <Float>
            <Suzanne position={[-1,0,-2]}/>
          </Float>
          <Float>
            <Suzanne position={[1,0,0]}/>
          </Float>
          {/* <OrbitControls position={[0,0,2]} target={[0,0,0]}/> */}
          {/* <Stats/> */}
        </Canvas>
      </div>
      <h3 className={styles["component__title"]}>Article Three Title</h3>
    </article>
  );
}
