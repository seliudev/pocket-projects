import {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return(
        <div className="text-4xl flex justify-center h-screen items-center bg-gray-700">
            <button
                className="text-white w-8 rounded-md text-4xl bg-red-400 hover:cursor-pointer"
                onClick={() => {
                    setCount(count - 1);
                }}
            >-</button>
            <div className="m-4 text-white w-10 text-center">{count}</div>
            <button
                className="text-white w-8 rounded-md text-4xl bg-emerald-400 hover:cursor-pointer"
                onClick={() => {
                    setCount(count + 1);
                }}>+</button>
        </div>
    );

};

export default App;
