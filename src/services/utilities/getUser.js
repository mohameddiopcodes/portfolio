export default function() {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(window.atob(token.split('.')[1])) : null
}