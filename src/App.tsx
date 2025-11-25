import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./projects/Counter";
import Calculator from "./projects/Calculator";
import LightSwitch from "./projects/LightSwitch";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavBar />

                <main className="flex-grow container mx-auto px-4 py-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/calculator" element={<Calculator />} />
                        <Route path="/light-switch" element={<LightSwitch />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
