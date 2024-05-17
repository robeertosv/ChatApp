import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Auth from './pages/Auth'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App