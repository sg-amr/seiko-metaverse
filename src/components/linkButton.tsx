import React from "react";
import { Link } from "react-router-dom";

// bootstrap button component in react-router-dom Link component
function LinkButton({ targetPath, children, className }: { targetPath: string, children: React.ReactNode, className?: string }) {
    let classNameChecked: string;
    if (className === undefined) {
        classNameChecked = "";
    } else {
        classNameChecked = className;
    }
    return (
        <>
            <Link to={targetPath} className={classNameChecked}>
                <button type="button" className="btn btn-primary">
                    {children}
                </button>
            </Link>
        </>
    )
}

export default LinkButton;