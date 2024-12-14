// constant
const BACKEND_URL = "BACKEND_URL";


// simple get request ....only use to login or signup
async function HttpSimpleGet(isLogin: boolean, id: string, hashedPassword: Promise<string>) {
    const targetUrl = BACKEND_URL + isLogin ? "/user/login" : "/user/signup";
    return hashedPassword
        .then(result => fetch(targetUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "id": id,
                "hashedPassword": result
            }
        })
        .then(res => res.json())
        .catch(err => {
            return {
                ok: false,
                message: err.message
            }
        }));
}

// get request
async function HttpGet(path: string, sessionToken: string) {
    const targetUrl = BACKEND_URL + path;
    return fetch(targetUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "sessionToken": sessionToken
        }
    }).then(res => res.json());
}

// post request
async function HttpPost(path: string, body: string, sessionToken: string) {
    const targetUrl = BACKEND_URL + path;
    return fetch(targetUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "sessionToken": sessionToken
        },
        body: body
    }).then(res => res.json());
}

export {
    HttpGet,
    HttpPost,
    HttpSimpleGet
}