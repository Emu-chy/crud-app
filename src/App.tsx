import React, { FC } from "react";
import "./App.css";
import "rsuite/dist/rsuite.min.css";
import Home from "./components/pages/home/Home";

const App: FC = () => {
    return (
        <div className="App">
            <Home/>
        </div>
    );
};

export default App;
