import React from "react";
import { Canvas } from "@react-three/fiber";
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
  return (
    <div className="ModelRenderer">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute", width: "100%", height: "400px" }}
      >
        <color attach="background" args={["#b2b2b2"]} />
        <OrbitControls />

        <PresentationControls speed={1.5} global zoom={0.3}>
          <Stage environment={"city"}>
            <Model scale={0.01} filePath={filePath} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelRenderer;
