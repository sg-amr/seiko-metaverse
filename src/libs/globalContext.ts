import User from "./user";

// displayMode dark-mode, light-mode, default-mode(osに合わせる)
type displaySetting = "dark" | "light" | "default";
type displayMode = "dark" | "light";

class GlobalContext {
    // public
    displaySetting: displaySetting;
    user: User;

    // private
    _displayMode: displayMode;

    constructor() {
        this.user = new User();
        this._displayMode = "light";
        this.displaySetting = "default";
        this.init();
    }

    init() {
        // displayModeの変更をlisten
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            this._checkDisplayMode(event);
        });
    }

    _checkDisplayMode(event: MediaQueryListEvent) {
        // displayModeがdefaultの時だけ変更する
        if (!(this.displaySetting == "default")) return;
        if (event.matches) {
            this._displayMode = "dark";
        } else {
            this._displayMode = "light";
        }
    }

    getDisplayMode() {
        return this._displayMode;
    }
}

export default GlobalContext;