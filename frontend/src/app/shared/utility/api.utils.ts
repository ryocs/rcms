import {getToken, getUserFromStorage} from './user.utils';

const apiUrl = "http://localhost:5000/api";


export enum apiMethods {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}

export const makeApiCall = (url: string, method: apiMethods, contentType: string = "", body: any = undefined) => {

    let token = undefined;
    console.log(getToken());

    if (getToken() != undefined) {
        token = `Bearer ${getToken()}`;
    }

    interface IDictionary {
        [index: string]: any;
    }

    let options: RequestInit = {
        method: method.toString(),
        headers: undefined,
        body: undefined
    };

    const requestHeaders: HeadersInit = new Headers();

    if (token != undefined) requestHeaders.set('Authorization', token);
    if (contentType != undefined) requestHeaders.set('Content-Type', contentType);
    if (body != undefined) options.body = body;

    options.headers = requestHeaders;

    console.log(apiUrl + url, options);

    return fetch(apiUrl + url, options);
}