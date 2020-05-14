import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import "./styles/global.css";

function App() {
    (function fakeLogin() {
        localStorage.setItem(
            "twt-profile",
            '{"avatarUrl": "https://pbs.twimg.com/profile_images/1389213280/OgAAANmkk6Kx8ebiAORq1MgHAYu30W90u6PTs0A4Z6qiLeneJ485Mh42Cn2EZoS5OTTR7AlDQRGU5i1ilJejOpnFsfMAm1T1UNriALlCN4ZHqt5Te21nfh-IMrHR_400x400.jpg", "name": "Mayke"}'
        );
    })();

    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
