import { navigate } from 'svelte-routing';
import { setUser,deleteUser } from '../utility/userUtility';
import { apiMethods, makeApiCall } from "./apiUtility";

export const login = (username, password) => {
    const body = {
        userName: username,
        password: password
    }

    return makeApiCall("/users/login",apiMethods.POST,"application/JSON", JSON.stringify(body)).then(r => r.json())
    .then(data => {
        console.log(data, "d");
            data.user.token = data.token;
            setUser(data.user);
    }).catch(e => console.log(e, "u"));
}

export const logout = () => {
    makeApiCall("/users/logout",apiMethods.GET).then(r => {
        deleteUser();
    })
}