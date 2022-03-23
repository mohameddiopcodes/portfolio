import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars } from '@react-three/drei';
import { OrbitControls, Html } from '@react-three/drei';
import Nav from './Nav'
import { Suspense, useEffect, useRef, useState } from 'react';

import System from '../../3d/System'
import onDataChange from '../../services/utilities/onDataChange';
import { create } from '../../services/work';

const emptyForm = {name: '', email: '', phoneNumber: '', description: ''}

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
    const [formSubmited, setFormSubmited] = useState(false)
    const [error, setError] = useState('')
    const errorRef = useRef()
    const formRef = useRef()
    const [formData, setFormData] = useState(emptyForm)
    const text = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            }, 150) 
    }, [])

    useEffect((e = errorRef.current) => {
      if(e) {
        e.className = 'error error-visible'
        setTimeout(() => {
          e.className = 'error error-hidden'
        }, 2000)
        setTimeout(() => setError(''), 2500)
      }
    }, [error])
    
    function handleOnChange(e) {
        onDataChange(e, formData, setFormData)
    }

    async function handleOnSubmit(e) {
      try {
          e.preventDefault()
          const {name, email, phoneNumber, description} = formData
          if(!email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) ||
          !phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/) ||
          !name.match(/^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/)) {
            throw new Error('Invalid entry')
          }
          const p = await create({name, email, phoneNumber, description})
          setFormData(emptyForm)
          formRef.current.style.opacity = 0
          setTimeout(() => {
            formRef.current.style.display = 'none'
          }, 1000) 
          setFormSubmited(true)
      } catch(e) {
          e = setError(e.message)
      }
    }

    return (
      <>
        <Canvas className={loaded ? 'visible':'hidden'} id="Work">
            <Stars/>
            <OrbitControls/>
            <ambientLight intensity={.5} />
            <pointLight color="#FFF" position={[10, 10, 10]} />
            {/* <Suspense>
              <System position={[0,0,2]} />
            </Suspense> */}
            <Sphere position={[0, 0, 0]} />
            {
              formSubmited && (
                <Html position={[2, 1, 0]}>
                  <h1 style={{color: "#FFF"}}>✔️😎</h1>
                </Html>
              )
            }
        </Canvas>
        <form ref={formRef} onSubmit={handleOnSubmit} style={{position: 'absolute'}} className='contact-form'>
          {error && <p ref={errorRef} className='error error-hidden'>{error}</p>}
          <h3 style={{marginTop: '10vh'}}>Hey, let's connect.</h3>
          <p>I'd be glad to have a discussion with you about what we we can create together!</p>
          {/* <label htmlFor='name'><h4>Name</h4></label> */}
          <input onChange={handleOnChange} value={formData.name} placeholder='Please enter your name' name='name' type='text' autoComplete="off" autoFocus required></input>
          {/* <label htmlFor='email'><h4>Email</h4></label> */}
          <input onChange={handleOnChange} value={formData.email} placeholder='Email' name='email' type='text' autoComplete="off" required></input>
          {/* <label htmlFor='number'><h4>Phone number</h4></label> */}
          <input onChange={handleOnChange} value={formData.phoneNumber} placeholder='Phone number' name='phoneNumber' autoComplete="off" type='text' required></input>
          {/* <label htmlFor='description'><h4>Message</h4></label> */}
          <textarea onChange={handleOnChange} value={formData.description} placeholder='Briefly describe your needs' name='description' rows={10}></textarea>
          <input type='submit'></input>
        </form>
        </>
    )
}