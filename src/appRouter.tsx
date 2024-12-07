import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// all page components
import IndexPage from "./pages/index.tsx";
import AboutPage from "./pages/about.tsx";
import PlayPage from "./pages/play.tsx";
import SettingPage from "./pages/setting.tsx";
import UserPage from "./pages/user.tsx";
import SigninPage from "./pages/signin.tsx";
import SignupPage from "./pages/signup.tsx";
import NotFoundPage from "./pages/NotFound.tsx";

// layout components
import Layout from "./layout/layout.tsx"

const WrappedIndexPage = () => {
    const [path, setPath] = useState<string | null>("");
    const navigation = useNavigate();

    useEffect(() => {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        setPath(params.get("path"));
        if (!path) return;
        navigation(path);
    }, [])
    return (
        <>
            <IndexPage />
        </>
    )
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout><WrappedIndexPage /></Layout>} />
                <Route path='/about' element={<Layout><AboutPage /></Layout>} />
                <Route path='/play' element={<Layout><PlayPage /></Layout>} />
                <Route path='/setting' element={<Layout><SettingPage /></Layout>} />
                <Route path='/user' element={<Layout><UserPage /></Layout>} />
                <Route path='/signin' element={<Layout><SigninPage /></Layout>} />
                <Route path='/signup' element={<Layout><SignupPage /></Layout>} />

                <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;