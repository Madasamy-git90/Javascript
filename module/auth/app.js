import isAuthenticated, { login, logout } from './auth.js';

if (isAuthenticated()) {
    console.log('User is logged in.');
} else {
    login('user123', 'password123').then((data) => {
        console.log('User logged in:', data);
    });
}
