import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cat } from "../pages/Cat";
import { Dog } from "../pages/Dog";
import { Clients } from "../pages/Clients";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cats" element={<Cat/>}/>
            <Route path="/dogs" element={<Dog/>}/>
            <Route path="/clients/:id" element={<Clients/>}/>
        </Routes>
    )
}