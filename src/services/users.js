import sendRequest from "./utilities/sendRequest"

const BASE_URL = '/api/users'

export function login(body) {
    return sendRequest(BASE_URL, 'POST', body)
}

export function logout() {
    localStorage.removeItem('token')
}