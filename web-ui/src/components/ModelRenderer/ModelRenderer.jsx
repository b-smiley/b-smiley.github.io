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

function Model({ filePath, scale, ...props }) {
  const { scene } = useGLTF(filePath); // Use the provided filePath
  const axesHelper = new AxesHelper(1); // Show the origin of the model
  scene.add(axesHelper);
  return <primitive object={scene} {...props} />;
}

const ModelRenderer = ({ filePath, scale ,fullScreen=false,  }) => {
  const [allowOrbit, setAllowOrbit] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(fullScreen);
  const [hasScrolled, setHasScrolled] = useState(false);

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
      setHasScrolled(true);
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

  return (
    <div className="ModelRenderer">
      <Canvas
        dpr={[1, 2]}
        style={{ position: "absolute", width: "100%", height: height, borderRadius: "4px" }}
        // Make the scene always face the y axis
        camera={{ fov: 45, rotation: [0, 0, 0] }}
      >
        <Suspense fallback={null}>
        <color attach="background" args={["#dbdbdb"]} />
        <OrbitControls
        enabled={allowOrbit}
        // Prevent the user from zooming out too far
        // TOOD Auto rotate the model if the user has not scrolled and not in fullscreen
        // autoRotate={true}
        // autoRotateSpeed={0.5}
        />

        <PresentationControls 
        speed={1.5} 
        global 
        zoom={0.3} 
        // Make the scene always face the y axis
        target={[0, 0, 0]}

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
          {/* TODO fix <button className="fullscreen-button" onClick={enterFullScreen}>
            Fullscreen
          </button> */}
        </div>
      )}
    </div>
  );
};
export default ModelRenderer;
