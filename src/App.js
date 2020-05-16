import React, { useState } from "react";
import { db } from "./firebase";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import "./styles/global.css";

function App() {
    const [signed, setSigned] = useState(false);

    (function fakeLogin() {
        db.ref("/users/0")
            .once("value")
            .then(snapshot => {
                // Caso ainda não tenha inserido os dados iniciais na base
                const data = snapshot.val() || {};

                localStorage.setItem(
                    "twt-session",
                    JSON.stringify({
                        name: data.name,
                        userName: data.userName,
                        avatar: data.avatar,
                        id: snapshot.key,
                    })
                );

                setSigned(true);
            });
    })();

    if (!signed) {
        return null;
    }

    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
