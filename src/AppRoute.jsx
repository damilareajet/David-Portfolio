import { Routes, Route } from "react-router-dom"; 

import Home from "./Pages/Home";

const AppRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            );
        };
        
    export default AppRoute;
        