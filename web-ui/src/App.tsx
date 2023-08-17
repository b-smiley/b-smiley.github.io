import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
function Model(props:any) {
  const { scene } = useGLTF('/GameConsole.glb')
  return <primitive object={scene} {...props} />
}
function App() {
  return (
    <div className="App">
       <h1>Three.js GLB Renderer</h1>
        <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position":"absolute", width: 500, height: 500 } }>
          <color attach="background" args={['#101010']} />
          <PresentationControls speed={1.5} global zoom = {0.3} polar={[-0.1, Math.PI /4]}>
            <Stage environment={"city"}>
              <Model scale={0.01}/>
            </Stage>

          </PresentationControls>
        </Canvas>
    </div>
  )
}

export default App