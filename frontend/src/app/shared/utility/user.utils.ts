export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user')!);
}

export const setUser = (userdata: any) => {
    localStorage.setItem('user', JSON.stringify(userdata));
}

export const deleteUser = () => {
    localStorage.clear();
}

export const getToken = () => {
    return getUserFromStorage()?.token;
}