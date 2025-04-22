import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar.jsx";
import Body from "./Components/body/body.jsx";
import Modal from "./Components/modal/modal.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
    const [margin, setMargin] = useState(false);
    return (
        <>
            <Navbar onToggle={() => setMargin(!margin)} />
            <Body isExpanded={margin} />
            <Modal />
        </>
    );
}

export default App;
