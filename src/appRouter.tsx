import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

// all page components
import IndexPage from "./pages/index.tsx";
import AboutPage from "./pages/about.tsx";
import PlayPage from "./pages/play.tsx";
import SettingPage from "./pages/setting.tsx";
import UserPage from "./pages/user.tsx";
import SigninPage from "./pages/signin.tsx";
import SignupPage from "./pages/signup.tsx";
import NotFoundPage from "./pages/notFound.tsx";
import PrivacyPage from "./pages/privacyPage.tsx";

// layout components
import Layout from "./layout/layout.tsx"
import LayoutPlay from "./layout/layoutPlay.tsx"

// import css
import "./global.css"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout><IndexPage /></Layout>} />
                <Route path='/about' element={<Layout><AboutPage /></Layout>} />
                <Route path='/setting' element={<Layout><SettingPage /></Layout>} />
                <Route path='/user' element={<Layout><UserPage /></Layout>} />
                <Route path='/signin' element={<Layout><SigninPage /></Layout>} />
                <Route path='/signup' element={<Layout><SignupPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />

                <Route path='/play' element={<LayoutPlay><PlayPage /></LayoutPlay>} />

                <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;