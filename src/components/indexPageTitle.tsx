import { useEffect, useRef } from "react";

function IndexPageTitle() {
    const titleEleRef = useRef<HTMLHeadingElement>(null);
    const setTitleActive = (to: boolean) => {
        if (titleEleRef.current) {
            if (to) {
                titleEleRef.current.style.textShadow = "2px 0px 3px rgba(0, 256, 256, 1), -2px 0px 3px rgba(256, 0, 256, 1)";
            } else {
                titleEleRef.current.style.textShadow = "none";
            }
        }
    }
    useEffect(() => {
        let titleState = false;
        const titleAnimationInterval = window.setInterval(() => {
            titleState = !titleState;
            setTitleActive(titleState);
        }, 100);
        const stopAnimationTimeout = window.setTimeout(() => {
            clearInterval(titleAnimationInterval);
            setTitleActive(false);
        }, 1000);
        return () => {
            clearInterval(titleAnimationInterval);
            clearTimeout(stopAnimationTimeout);
        };
    }, [])
    return (
        <>
            <h1 style={{
                fontSize: "13vw",
                textAlign: "center",
                color: "#fff",
                fontFamily: "dot-font",
                paddingLeft: "3vw"
            }} ref={titleEleRef}>
                星光メタバース
            </h1>
        </>
    )
}

export default IndexPageTitle;