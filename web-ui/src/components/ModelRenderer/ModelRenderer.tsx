import React from 'react';

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

import './ModelRenderer.scss';

function Model(props:any) {
  const { scene } = useGLTF('/3D-Models/GameConsole.glb')
  return <primitive object={scene} {...props} />
}



interface ModelRendererProps {
}
const ModelRenderer: React.FC<ModelRendererProps> = (props) => {
return (
<div className="ModelRenderer">
    <h1>ModelRenderer</h1>
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position":"absolute", width: 500, height: 500 } }>
          <color attach="background" args={['#101010']} />
          {/* //polar={[-0.1, Math.PI /4]} */}
          <PresentationControls speed={1.5} global zoom = {0.3} >
            <Stage environment={"city"}>
              <Model scale={0.01}/>
            </Stage>

          </PresentationControls>
        </Canvas>
</div>
);
}
export default ModelRenderer;
