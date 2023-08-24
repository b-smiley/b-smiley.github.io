import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import "./ModelRenderer.scss";
import { AxesHelper } from "three";

import "./ModelRenderer.scss";

function Model({ filePath, ...props }) {
  const { scene } = useGLTF(filePath); // Use the provided filePath
  const axesHelper = new AxesHelper(5);
  scene.add(axesHelper);
  return <primitive object={scene} {...props} />;
}

interface ModelRendererProps {
  filePath: string;
}
const ModelRenderer: React.FC<ModelRendererProps> = ({ filePath }) => {
  const controlsRef = useRef();

  const handleControlsChange = () => {
    if (controlsRef.current) {
      controlsRef.current.target.copy(controlsRef.current.target);
    }
  };
  return (
    <div className="ModelRenderer">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{ position: "absolute", width: "100%", height: "250px" }}
      >
        <color attach="background" args={["#dbdbdb"]} />
        <OrbitControls
          target={[0, 0, 0]}
          ref={controlsRef}
          onChange={handleControlsChange}
        />

        <PresentationControls >
          <Stage 
          environment={"city"}
          shadows={false}
          >
            <Model scale={0.01} filePath={filePath} />
          </Stage>
        </PresentationControls>
      </Canvas>
      {/* Add a empty div as a spacer TODO fix this */}
      <div style={{ height: "250px" }}></div>
    </div>
  );
};
export default ModelRenderer;
