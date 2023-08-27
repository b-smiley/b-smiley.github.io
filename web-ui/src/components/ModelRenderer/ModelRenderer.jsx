import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
  Loader,
} from "@react-three/drei";
import "./ModelRenderer.scss";
import { AxesHelper } from "three";
import "./ModelRenderer.scss";

function Model({ filePath, ...props }) {
  const { scene } = useGLTF(filePath); // Use the provided filePath
  const axesHelper = new AxesHelper(5); // Show the origin of the model
  scene.add(axesHelper);
  return <primitive object={scene} {...props} />;
}

const ModelRenderer = ({ filePath, fullScreen=false, fullScreenDescription="" }) => {
  const [allowOrbit, setAllowOrbit] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(fullScreen);

  // When the user is scrolling on the page disable orbit controls
  useEffect(() => {
    const handleScroll = () => {
      setAllowOrbit(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // When the user clicks inside the scene enable orbit controls
  useEffect(() => {
    const handleScroll = () => {
      setAllowOrbit(true);
    };
    window.addEventListener("click", handleScroll);
    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, []);

  // When the user clicks the fullscreen button open a new tab with the model in fullscreen
  const enterFullScreen = () => {
    window.open(
      `${window.location.origin}/model-viewer?filePath=${filePath}`,
      "_blank"
    );
  };

  // Change the height depending on card or fullscreen
  const height = isFullScreen ? "90vh" : "250px";

  return (
    <div className="ModelRenderer">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{ position: "absolute", width: "100%", height: height }}
      >
        <Suspense fallback={null}>
        <color attach="background" args={["#dbdbdb"]} />
        <OrbitControls
        enabled={allowOrbit}
        />

        <PresentationControls speed={1.5} global zoom={0.3} >
          <Stage 
          environment={"city"}
          shadows={false}
          >
          <Model 
          scale={0.01} 
          filePath={filePath} 
          />
          </Stage>
        </PresentationControls>
        </Suspense>
      </Canvas>
      <Loader />
      {/* Display different information depending on if it is fullscreen */}
      {isFullScreen ? (
        <div>
          <p>Deeper Description: {fullScreenDescription}</p>
        </div>
      ) : (
        <div>
          {/* Add a spacer same size as canvas  */}
          <div style={{ height: height }}></div>
          <button className="fullscreen-button" onClick={enterFullScreen}>
            Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};
export default ModelRenderer;
