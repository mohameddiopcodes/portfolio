import sendRequest from "./utilities/sendRequest"

const BASE_URL = '/api/work'

export function create(body) {
    return sendRequest(BASE_URL, 'POST', body)
}

export function index(query = '') {
    return sendRequest(BASE_URL + query)
}

export function show(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function update(id, body) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', body)
}

export function deleteWork(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}