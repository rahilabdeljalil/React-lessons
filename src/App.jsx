import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/home.jsx";//+

function App(){
    return (
        <Home />
    )
}

createRoot(document.getElementById('root')).render(
    <App/>
)

