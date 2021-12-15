export default function onDataChange(e, state, setter) {
    if(e.target.files) {
        e.target.files[0].arrayBuffer()
            .then(data => {
                setter({...state, [e.target.name]: Buffer.from(data).toString('base64')})
            })
            .catch(e => console.log(e))
        return
    }
    setter({...state, [e.target.name]: e.target.value})
}