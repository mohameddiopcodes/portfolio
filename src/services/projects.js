import sendRequest from "./utilities/sendRequest"

const BASE_URL = '/api/projects'

export function create(body) {
    return sendRequest(BASE_URL, 'POST', body)
}

export function index() {
    return sendRequest(BASE_URL)
}

export function show(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function update(id, body) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', body)
}

export function deleteProject(id, body) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', body)
}
