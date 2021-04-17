import {getToken, getUserFromStorage} from '../utility/userUtility';

const apiUrl = "http://localhost:5000/api";


export const apiMethods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const makeApiCall = (url,method, contentType = apiMethods.GET, body = undefined) => {

    let token = undefined;
    console.log(getToken());

    if (getToken() != undefined) {
        token = `Bearer ${getToken()}`;
    }

    let options = {
        method: method,
        headers: {}
    };

    if (token != undefined) options.headers['Authorization'] = token;
    if (contentType != undefined) options.headers['Content-Type'] = contentType;
    if (body != undefined) options.body = body;

    console.log(apiUrl + url, options);

    return fetch(apiUrl + url, options);
}