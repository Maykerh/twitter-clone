import React from "react";
import { db } from "./firebase";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import "./styles/global.css";

function App() {
    (function fakeLogin() {
        db.ref("/users/1")
            .once("value")
            .then((snapshot) => {
                const { name, userName, avatarUrl } = snapshot.val();

                localStorage.setItem(
                    "twt-session",
                    JSON.stringify({ name, userName, avatarUrl, id: snapshot.key })
                );
            });
    })();

    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
