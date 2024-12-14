// user class

// import my own libs
import { hash } from "./common";
import { HttpGet, HttpPost, HttpSimpleGet } from "./backend";

class User {
    // public
    isLogin: boolean;
    userId: string | null;

    // private
    _sessionToken: string | null;

    constructor() {
        this.isLogin = false;
        this.userId = null;
        this._sessionToken = null;
    }

    _setSessionToken(newToken: string | null) {
        this._sessionToken = newToken;
        if (newToken !== null) {
            // cookieが使えるかどうか
            if (navigator.cookieEnabled) {
                document.cookie = `sessionToken=${newToken}`;
            }
        }
    }

    async login(userId: string, password: string) {
        const hashedPassword = hash(password);
        HttpSimpleGet(true, userId, hashedPassword).then(json => {
            if (json.ok) {
                // ログイン成功
                this.isLogin = true;
                this.userId = userId;
                this._setSessionToken(json.sessionToken);
                return true;
            } else {
                // ネットワークエラーもしくはログイン失敗
                this.isLogin = false;
                this.userId = null;
                this._setSessionToken(null);
                return json.message;
            }
        });
    }

    async signup(userId: string, password: string) {
        const hashedPassword = hash(password);
        HttpSimpleGet(false, userId, hashedPassword).then(json => {
            if (json.ok) {
                // サインアップ成功
                this.isLogin = true;
                this.userId = userId;
                this._setSessionToken(json.sessionToken);
                return true;
            } else {
                // ネットワークエラーもしくはサインアップ失敗
                this.isLogin = false;
                this.userId = null;
                this._setSessionToken(null);
                return json.message;
            }
        });
    }

    async getData(path: string) {
        if (this.isLogin) {
            if (this._sessionToken === null) throw new Error("sessionToken is null");
            return HttpGet(path, this._sessionToken);
        }
    }

    async postData(path: string, body: any) {
        if (this.isLogin) {
            if (this._sessionToken === null) throw new Error("sessionToken is null");
            return HttpPost(path, body, this._sessionToken);;;
        }
    }
}

export default User;