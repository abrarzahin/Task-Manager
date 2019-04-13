import store from '../store';


export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    const token={
        username:'abrar'
    }
    setToken(token);
    
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {

    return 'abrar';
}
export function getUserId() {
    return 1;
}
