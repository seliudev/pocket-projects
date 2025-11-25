import React from "react";
import {useState} from "react";

const LightSwitch: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div
        className={`flex justify-center items-center h-screen ${isOn ? "bg-yellow-200" : "bg-gray-600"} transition-colors duration-500`}>
        <button
            className="hover:cursor-pointer"
            onClick={() => setIsOn(!isOn)}>
            <div className={`h-8 w-6 ${isOn ? "bg-slate-300" : "bg-slate-200"}`}></div>
            <div className={`h-8 w-6 ${isOn ? "bg-slate-200" : "bg-slate-300"}`}></div>
        </button>
        </div>
    );
};

export default LightSwitch;
