import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * TODO: Estruturar melhor a chamada deesse pageScroll
 * */
function handlePageScroll() {
    const fixedElements = document.getElementsByClassName("vertical-fixed");

    for (let i = 0; i < fixedElements.length; i++) {
        fixedElements[i].style.transform = `translate3d(0, ${
            document.getElementById("scrollable-area").scrollTop
        }px, 0)`;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

document.getElementById("scrollable-area").addEventListener("scroll", handlePageScroll);
