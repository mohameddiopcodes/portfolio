import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars } from '@react-three/drei';
import { OrbitControls, Html } from '@react-three/drei';
import Nav from './Nav'
import { useEffect, useRef, useState } from 'react';

// export default function Work() {
//     return (
//         <div class='Portfolio'>
//             <Link className='arrow-left' to='/#projects'>{'</'} previous page</Link>
//             <div className='Work'>
//                 <h1>Work</h1>
//                 <p>Coming soon...</p>
//             </div>
//         </div>
//     )
// }
function Sphere(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        <sphereGeometry args={[1, 32, 32]} roughness={0.1} metalness={0.1} />
      </mesh>
    )
  }

export default function Work() {
    const [loaded, setLoaded] = useState(false)
    const [seeMore, setSeeMore] = useState(false)
    const text = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            }, 150)
    }, [])

    function toggleSeeMore() {
        setSeeMore(!seeMore)
    }

    function addPlanet() {
      const [x,y,z] = Array(3).fill().map(() => Math.random() * 100)
    
      return (
        <Sphere position={[x, y, z]} />
      )
    }

    return (
        <Canvas camera={{ fov: 75, position: [0, 0, 0]}} className={loaded ? 'visible':'hidden'} id="Work">
            <Stars/>
            <OrbitControls/>
            <ambientLight />
            <pointLight color="#FFF" position={[10, 10, 10]} />
            {addPlanet}
            <Html position={[0, 0, 0]}>
              <form style={{filter: 'invert(100%)'}} className='second-form'>
                <h4>Feel free to Scroll around ➙</h4>
                <label htmlFor='name'><h4>NAME</h4></label>
                <input name='name' type='text'></input>
                <label htmlFor='email'><h4>EMAIL</h4></label>
                <input name='email' type='text'></input>
                <label htmlFor='number'><h4>PHONE NUMBER</h4></label>
                <input name='number' type='number'></input>
                <label htmlFor='description'><h4>MESSAGE</h4></label>
                <input name='name' type='text'></input>
                <input type='submit'></input>
              </form>
            </Html>
        </Canvas>
    )
}