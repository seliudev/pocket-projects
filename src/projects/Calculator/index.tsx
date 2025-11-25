import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState("");

    const appendToDisplay = (val: string) => setDisplay((prev) => prev + val);
    const clearDisplay = () => setDisplay("");
    const calculate = () => {
        try {
            setDisplay(eval(display).toString()); // simple eval-based calculation
        } catch {
            setDisplay("Error");
        }
    };

    const buttonClass =
        "w-24 h-24 rounded-full text-3xl font-bold text-indigo-100 bg-indigo-800 hover:bg-indigo-600 active:bg-indigo-400";
    const operatorClass =
        "w-24 h-24 rounded-full text-3xl font-bold text-indigo-800 bg-indigo-300 hover:bg-indigo-200 active:bg-indigo-100";

    return ( <div className="flex items-center justify-center h-screen bg-indigo-900"> <div className="font-sans bg-indigo-400 rounded-3xl max-w-md overflow-hidden p-6"> <input
        value={display}
        readOnly
        className="w-full p-5 text-left text-[5rem] bg-indigo-200 text-indigo-800 border-none mb-6"
    />

        <div className="grid grid-cols-4 gap-4">
            {/* Row 1 */}
            {["7", "8", "9", "+"].map((val) => (
                <button
                    key={val}
                    onClick={() => appendToDisplay(val)}
                    className={val === "+" ? operatorClass : buttonClass}
                >
                    {val}
                </button>
            ))}

            {/* Row 2 */}
            {["4", "5", "6", "-"].map((val) => (
                <button
                    key={val}
                    onClick={() => appendToDisplay(val)}
                    className={val === "-" ? operatorClass : buttonClass}
                >
                    {val}
                </button>
            ))}

            {/* Row 3 */}
            {["1", "2", "3", "*"].map((val) => (
                <button
                    key={val}
                    onClick={() => appendToDisplay(val)}
                    className={val === "*" ? operatorClass : buttonClass}
                >
                    {val}
                </button>
            ))}

            {/* Row 4 */}
            <button onClick={() => appendToDisplay("0")} className={buttonClass}>
                0
            </button>
            <button onClick={() => appendToDisplay(".")} className={buttonClass}>
                .
            </button>
            <button
                onClick={calculate}
                className={`${buttonClass} bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-300`}
            >
                =
            </button>
            <button onClick={clearDisplay} className={operatorClass}>
                C
            </button>
        </div>
    </div>
    </div>
);
};

export default Calculator;
