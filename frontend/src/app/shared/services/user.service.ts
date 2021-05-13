import { setUser,deleteUser } from '../utility/user.utils';
import { apiMethods, makeApiCall } from "../utility/api.utils"

export const login = (username: string, password: string) => {
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