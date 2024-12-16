// Named Exports
export const login = (username, password) => {
    // API call to authenticate user
    return fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => res.json());
};

export const logout = () => {
    // API call to logout user
    return fetch('/api/logout', { method: 'POST' });
};

// Default Export
export default function isAuthenticated() {
    return !!localStorage.getItem('authToken');
}
