import { userStore } from "../stores";

export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const setUser = (userdata) => {
    localStorage.setItem('user', JSON.stringify(userdata));
    userStore.set(localStorage.getItem('user'));
}

export const deleteUser = () => {
    localStorage.clear();
    userStore.set(localStorage.getItem('user'));
}

export const getToken = () => {
    return getUserFromStorage()?.token;
}