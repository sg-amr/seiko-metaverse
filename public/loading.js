// 要素を取得
const rootEle = document.getElementById("root");
const loadingEle = document.getElementById("loading");

let intervalId;

let displayMode = undefined;

displayMode = "light";

const init = () => {
    rootEle.style.display = "none";
    loadingEle.style.display = "block";

    const createTitle = (x, y) => {
        const loadingTitle = document.createElement("h1");
        loadingTitle.style.fontSize = "4rem";
        loadingTitle.style.fontFamily = "sans-serif";
        loadingTitle.style.fontWeight = "100";
        loadingTitle.style.position = "absolute";
        loadingTitle.style.zIndex = "10";
        loadingTitle.style.top = y;
        loadingTitle.style.marginLeft = x;
        loadingTitle.style.textAlign = "center";
        loadingTitle.style.transform = "translate(0, -50%)";
        loadingTitle.style.color = displayMode == "dark" ? "#fff" : "#000";
        return loadingTitle;
    }
    const loadingTitle = createTitle("60%", "60%");
    const title = createTitle("10%", "25%");

    const setTitle = (element, text) => {
        element.textContent = text;
    }
    setTitle(loadingTitle, "Loading...");
    title.innerHTML = `<span class="char">星</span><span>光</span><span>メ</span><span>タ</span><span>バ</span><span>ー</span><span>ス</span>`;
    Array.from(title.children).forEach(item => {
        item.classList.add("char");
    })

    const loader = document.createElement("div");
    loader.classList.add("loader");

    loadingEle.appendChild(loadingTitle);
    loadingEle.appendChild(title);
    loadingEle.appendChild(loader);

    const titleList = ["Loading.   ", "Loading..  ", "Loading... ", "Loading...."]
    let loadingTitleProgress = 0;
    let titleProgress = 0;

    // callbackを設定
    intervalId = window.setInterval(() => {
        // loading-title
        setTitle(loadingTitle, titleList[loadingTitleProgress % titleList.length]);
        loadingTitleProgress++;

        // title
        Array.from(title.children).forEach(item => {
            item.classList[titleProgress % 6 == 0 ? "add" : "remove"]("is-active");
            titleProgress++;
        })
    }, 500)
}

const finishLoading = () => {
    rootEle.style.display = "block";
    loadingEle.style.display = "none";
    clearInterval(intervalId);
}


init();
window.onload = finishLoading;