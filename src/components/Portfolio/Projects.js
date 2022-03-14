import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { create, index, update as updateProject, deleteProject } from '../../services/projects'
import onDataChange from '../../services/utilities/onDataChange';

import Select from 'react-select';

// const technologies = [
//     {value: 'HTML', label: 'HTML'},
//     {value: 'CSS', label: 'CSS'},
//     {value: 'Javascript', label: 'Javascript'},
//     {value: 'Node', label: 'Node'},
//     {value: 'Express', label: 'Express'},
//     {value: 'React', label: 'React'},
//     {value: 'React Native', label: 'React Native'},
//     {value: 'Docker', label: 'Docker'},
// ]

// const customStyles = {
//     input: (styles) => ({ ...styles}),
//     option: (styles) => ({ ...styles }),
//     control: (styles) => ({ ...styles, background: 'transparent', border: '1px solid #555', ':hover': {
//         border: '1px solid #555'
//     }}),
//     dropdownIndicator: (styles) => ({...styles, color: '#fefefe'}),
//     indicatorSeparator: (styles) => ({}),
//     indicatorsContainer: (styles) => ({...styles, background: '#000'}),
//     placeholder: (styles) => ({ ...styles, color: '#555' }),
//     singleValue: (styles) => ({ ...styles, width: '100%' }),
//   }

// export default function Projects({ owner }) {
//     const [form, setForm] = useState(false)
//     const [update, setUpdate] = useState(false)
//     const [formData, setFormData] = useState({})
//     const [projects, setProjects] = useState(null)
//     const [imageStyle, setImageStyle] = useState(null)
//     const [page, setPage] = useState(parseInt(localStorage.getItem('page')) || 1)
//     const [img, setImg] = useState(0)
//     const [error, setError] = useState('')

//     function handleOnChange(e) {
//         onDataChange(e, formData, setFormData)
//     }

//     async function handleOnSubmit(e) {
//         try {
//             e.preventDefault()
//             const p = await create({ ...formData, email: owner.email })
//             setProjects(p)
//             setPage(1)
//             setFormData({})
//             setForm(false)
//         } catch(e) {
//             setError(e.message)
//         }
//     }

//     async function handleDelete() {
//         await deleteProject(projects.project._id, {email: owner.email})
//         setProjects(await index(`?page=${1}`))
//         setPage(1)
//     }

//     async function handleUpdate(e) {
//         try {
//             e.preventDefault()
//             const p = await updateProject(projects.project._id, { ...formData, email: owner.email })
//             setProjects(p)
//             setFormData({})
//             setForm(false)
//             setUpdate(false)
//         } catch(e) {
//             setError(e.message)
//         }
//     }

//     async function updateForm(){
//         setFormData({
//             name: projects.project.name,
//             description: projects.project.description,
//             technologies: projects.project.technologies,
//             github: projects.project.github,
//             link: projects.project.link,
//         })
//         setForm(true)
//         setUpdate(true)
//     }

//     useEffect(function() {
//         try {
//             (async () => setProjects(await index(`?page=${page}`)))()
//         } catch(e) {
//             console.log(e.message)
//         }
//     }, [page, update])

//     return (
//         <div className='Portfolio'>
//             {error && <p>{error}</p>}
//             <Link className='arrow-left' to='/'>{'</'} previous page</Link>
//             <div style={{overflow: 'visible'}}>
//                 <h1>Projects</h1>
//                 {projects && projects.totalPages >= 1 && !form && 
//                     <div className='Project'>
//                         <h2>{projects.project.name}</h2>
//                         <div class='Project-actions'>
//                             <a href={projects.project.github} target="_blank">Github</a>
//                             <a href={projects.project.link} target="_blank">Link</a>
//                         </div>
//                         <p>{projects.project.description}</p>
//                         <img src={`data:image;base64, ${projects.project.image[img]}`}/>
//                     </div>
//                 }
//                 {projects && !!!projects.totalPages && !form &&
//                     <div className='Project'>
//                         <p>No project added yet</p>
//                         { owner && <button onClick={() => setForm(true)}>Add a new project</button> }
//                     </div>
//                 }
//                 {form && 
//                     <form className='second-form' onSubmit={!update ? handleOnSubmit:handleUpdate} autoComplete='off'>
//                         <h4>Add a project here</h4>
//                         <input value={formData.name || ''} type='text' name='name' placeholder='React-Skills' required onChange={handleOnChange}/>
//                         <label htmlFor='image'>Upload an image</label>
//                         <input type='file' name='image' onChange={handleOnChange} required={!update ? true:false}/>
//                         <textarea value={formData.description} name='description' placeholder='A cool project with real world use.' onChange={handleOnChange}></textarea>
//                         <Select
//                             value={formData.technologies ? formData.technologies.map(t => ({value: t, label: t})):''}
//                             className='select'
//                             closeMenuOnSelect={false}
//                             defaultValue='HTML'
//                             isMulti
//                             options={technologies}
//                             styles={customStyles}
//                             onChange={(options) => setFormData({ ...formData, technologies: options.map(opt => opt.value)})}
//                             width='80%'
//                             style={customStyles}
//                             focus={() => ({})}
//                         />
//                         <input value={formData.github || ''} type='text' name='github' placeholder='Github' onChange={handleOnChange} required/>
//                         <input value={formData.link || ''} type='text' name='link' placeholder='Paste link here' onChange={handleOnChange} required/>
//                         <button onClick={() => setForm(false)} >back to projects</button>
//                         <input type='submit'/>
//                     </form>
//                 }
//                 {   projects && projects.totalPages >= 1 && !form &&
//                     <div className='controls'>
//                         <button onClick={(e) => {
//                             localStorage.setItem('page', page-1)
//                             setPage(page-1)
//                         }} style={page === 1 ? {display: 'none'}:{}}>{'</'} previous project</button>
//                         <button onClick={(e) => {
//                             localStorage.setItem('page', page+1)
//                             setPage(page+1)
//                         }} style={(projects.totalPages === page && {display: 'none'}) || {}}>next project {'/>'}</button>
//                     </div>
//                 }
//                 {   projects && projects.totalPages >= 1 && !form &&
//                     <>
//                     <h4 class='technologies-title'>Technologies used</h4>
//                     <div class='technologies'>
//                         {projects.project.technologies.map(t => <p>{t}</p>)}
//                     </div>
//                     </>
//                 }
//                 {owner && projects && projects.totalPages >= 1 && !form &&
//                     <div style={{marginTop: '2em'}} className='Project'>
//                         <button onClick={() => setForm(true)}>Add a new project</button>
//                         <button style={{marginLeft: '1em'}} onClick={updateForm}>Update</button>
//                         <button className='delete-btn' style={{marginLeft: '1em'}} onClick={handleDelete}>Want to delete this ?</button>
//                     </div>
//                 }
//             </div>
//             <Link className='arrow-right' to='/#work'>next page {'/>'}</Link>
//         </div>
//     )
// }

export default function Projects() {
    return (
        <h1>Projects</h1>
    )
}