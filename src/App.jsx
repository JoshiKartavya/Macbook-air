import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, EnvironmentCube, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import './app.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  useGSAP(()=>{
    gsap.from('#title', {
      y:-200,
      opacity:0,
      delay: 1
    }),

    gsap.from('#sub', {
      y:-200,
      opacity:0,
      delay: 2
    }),

    gsap.from('#para', {
      y:-200,
      opacity:0,
      delay: 3
    })
  })

  return (
    <div className='w-full h-screen'>
      <div className="navbar w-full h-16 absolute top-0 left-1/2 -translate-x-1/2 pt-8 flex flex-row justify-between items-center px-12">
        <div className="logo text-white text-xl">
          <i className="ri-apple-fill"></i>
        </div>
        <div className="links flex flex-row gap-4">
        {["iphone", "ipad", "services", "products", "macbook"].map((e) =>(
          <a href="">
            <h3 className='text-white text-sm font-[400] tracking-tighter'>{e}</h3>
          </a>
        ))}
        </div>
      </div>

      <div className=' flex flex-col items-center absolute top-32 left-1/2 -translate-x-1/2 '>
        <h3 id='title' className='text-white text-7xl font-light tracking-tighter'>macbook pro.</h3>
        <h5 id='sub' className='text-white text-xl font-normal'>oh so pro!</h5>
        <p id='para' className='text-white text-sm w-3/4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere a recusandae pariatur minima.</p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={["./studio_small_09_2k.exr"]} />
        <OrbitControls />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App