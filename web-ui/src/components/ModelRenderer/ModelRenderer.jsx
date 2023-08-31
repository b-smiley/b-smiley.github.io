import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
  Loader,
} from "@react-three/drei";
import "./ModelRenderer.scss";
import "./ModelRenderer.scss";

function Model({ filePath, scale, ...props }) {
  const { scene } = useGLTF(filePath); // Use the provided filePath

  return <primitive object={scene} {...props} />;
}

const ModelRenderer = ({ filePath, scale ,fullScreen=false, autoload=false}) => {
  const [allowOrbit, setAllowOrbit] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(fullScreen);
  const [loadModel, setLoadModel] = useState(autoload);
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
  const height = isFullScreen ? "100vh" : "350px";

  // If the model is not in the viewport then unload it if it is loaded
  // TODO
        


  return (
    <div className="ModelRenderer">
      {loadModel || isFullScreen ?
      
      <div>
      <Canvas
        dpr={[1, 2]}
        style={{ position: "absolute", width: "100%", height: height, borderRadius: "4px" }}
        // Make the scene always face the y axis
        camera={{ fov: 45, rotation: [0, 0, 0] }}
      >
        <Suspense fallback={null}>
        <color attach="background" args={["#dbdbdb"]} />
        <OrbitControls
        // Disable zooming, panning and rotating 
        // if the user is not interacting with the scene
          enabled={true}
          enableZoom = {allowOrbit}
          enablePan = {allowOrbit}
          enableRotate = {allowOrbit}

          // Auto rotate the model until the user interacts with the specific scene
          autoRotate={true}
          autoRotateSpeed={1}
        />

        <PresentationControls 
        speed={1.5} 
        global 
        zoom={0.3} 
        // Make the scene always face the y axis
        target={[0, 0, 0]}
        autoRotate={true}
        autoRotateSpeed={0.5}

        >
          <Stage 
          environment={"night"}
          shadows={false}
          >
          <Model 
          scale={scale}
          filePath={filePath} 
          />
          </Stage>
        </PresentationControls>
        </Suspense>
      </Canvas>
      <Loader />
      {/* Display different information depending on if it is fullscreen */}
      {isFullScreen ? (
        <></>
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
    // Show a button if not in fullscreen
    : isFullScreen ? <></>
   : <button className="load-model-button" onClick={() => setLoadModel(true)}>Load Model</button>
    } 
    </div>
    
  );
};
  
export default ModelRenderer;
