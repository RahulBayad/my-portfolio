import { FirstPersonControls, GizmoHelper, GizmoViewcube, GizmoViewport, MeshReflectorMaterial, OrbitControls, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useRef } from 'react'

function AnimateMesh() {
  const meshRef = useRef()

  // const { speed, color } = useControls({
  //   color: '#ff0000',
  //   speed : {
  //     value: 0.005,
  //     min: 0.0,
  //     max: 0.03,
  //     step: 0.001,
  //   }
  // })

  useFrame(() => {
    // meshRef.current.rotation.x += 0.005
    // meshRef.current.rotation.y += 0.005
    // meshRef.current.rotation.z += 0.001
    // meshRef.current.rotation.x += speed
    // meshRef.current.rotation.y += speed
    // meshRef.current.rotation.z += speed
  })
  return (
    <group>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 2, 2]} ></cylinderGeometry>
        {/* <boxGeometry args={[2, 2, 2]} ></boxGeometry> */}
        <meshStandardMaterial  color="#0077ff"/>
        {/* <meshBasicMaterial color={0x00bfff} wireframe/> */}
        
      </mesh>
        <Text
        position={[2, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Rahul
      </Text>

    </group>
  )
}

const Hero = () => {

  return (
    <div className="grid grid-cols-2 mt-4 w-2xl gap-4 borde border-gray-500 justify-center">
      <div className='h-full font-medium'>
        <h1 className='text-3xl'>Shaping
          {
            ['Ideas', 'Designs, Concepts'].map(val => (
              <span>{val}</span>
            ))
          }

        </h1>
        <h1 className='text-3xl'>into Real Projects</h1>
        <h1 className='text-3xl'>that deliver results</h1>
      </div>
      <figure className='border h-82'>
        {/* <img src='' className='border w-full h-full' /> */}
        <Canvas>
          {/* Debugging  */}
            <GizmoHelper alignment='bottom-left' margin={[60,60]}>
              <GizmoViewport />
            </GizmoHelper>

            {/* below for keyboard controls  */}
            {/* <FirstPersonControls movementSpeed={3} /> */}
            {/* <gridHelper args={[20, 20, 0xff0000]} />
            <axesHelper args={[5]} /> */}

            {/* for mouse control  */}
            <OrbitControls />
            <AnimateMesh/>
            <ambientLight intensity={0.2} position={[5,5,3]}/>
            <spotLight intensity={80} position={[5,5,3]} />
            {/* <directionalLight intensity={0.5} position={[5,5,3]} /> */}
        </Canvas>
      </figure>
    </div>
  )
}

export default Hero