export const setUser = (user,token,timeInMillis = 1000*60*10) => {
    user.token = token;
    user.expiry = new Date().getTime() + timeInMillis;
    localStorage.setItem('user', JSON.stringify(user));
}

export const setExpiry = (timeInMillis = 1000*60*10) => {
    const item = getUser();
    if (!item) return null;
    item.expiry = new Date().getTime() + timeInMillis;
    localStorage.setItem('user', JSON.stringify(item));
}

export const getUser = () => {
    const item = localStorage.getItem('user');
    if (!item) return null;
    return JSON.parse(localStorage.getItem('user'));
}

export const getToken = () => {
    const item = getUser();
    if (!item) return null;
    return item.token;
}

export const getExpiry = () => {
    const item = getUser();
    if (!item) return null;
    return item.expiry;
}

export const getUserId = () => {
    const item = getUser();
    if (!item) return null;
    return item.id;
}

export const isExpired = () => {
    const item = getExpiry();
    if (!item) return true;
    const date = new Date().getTime();
    return item <= date;
}


