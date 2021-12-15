export default async function(url, method = 'GET', body = null) {
    const contentTypeJSON = { 'Content-Type': 'application/json' }
    const options = {
        method,
        headers: (body && contentTypeJSON) || null,
        body: (body && JSON.stringify(body)) || null
    }

    const res = await fetch(url, options)
    if(!res.ok) throw new Error((await res.json()).message)
    return res.json()
}