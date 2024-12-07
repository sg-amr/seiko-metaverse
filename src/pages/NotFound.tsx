import { useEffect, useState } from 'react'

export default function NotFoundPage() {
    const [path, setPath] = useState<string | null>("");
    useEffect(() => {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        setPath(params.get("path"));
    }, [])

    if (!path) {
        return (
            <div>NotFoundPage</div>
        )
    } else {
        return (
            <div>再読み込みした？</div>
        )
    }
}
