import { OrbitControls, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Loading from '../../components/ui/Loading'

function AnimateMesh() {
  const meshRef = useRef()
  const textRef = useRef()


  useFrame(() => {
    meshRef.current.rotation.y += 0.002
  })
  return (
    <group>
      <mesh ref={meshRef} >
        <sphereGeometry args={[2.5, 50, 50, 50]} ></sphereGeometry>
        <meshBasicMaterial color={0xfa000e} args={[1]} wireframe />
      </mesh>

    </group>
  )
}

const Hero = () => {

  return (
    <div className="relative grid grid-cols-2 px-6 py-4  h-screen">
      <div className="z-10 mt-4 gap-4 justify-center">
        <div className='h-full  font-medium flex-center'>
          <div className='uppercase'>
            <h1 className='text-6xl'>Shaping&nbsp;
              {
                ['Ideas', 'Designs, Concepts'].map(val => (
                  <em>{val}, </em>
                ))
              }

            </h1>
            <h1 className='text-6xl'>into Real Projects</h1>
            <h1 className='text-6xl'>that deliver results</h1>

          </div>
        </div>
      </div>
      <figure className=' top-0 '>
        <Suspense fallback={<Loading />}>
          <Canvas>
            <AnimateMesh />
            <OrbitControls></OrbitControls>
            <ambientLight intensity={0.2} position={[5, 5, 3]} />
            <directionalLight intensity={0.5} position={[5, 5, 3]} />
          </Canvas>
        </Suspense>
      </figure>
    </div>
  )
}

export default Hero