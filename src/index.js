import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Ajusta a posição dos elementos fixos da página de acordo com o scroll principal
 */
function handlePageScroll() {
    const fixedElements = document.getElementsByClassName("vertical-fixed");
    const scrollableAra = document.getElementById("scrollable-area");

    for (let i = 0; i < fixedElements.length; i++) {
        fixedElements[i].style.transform = `translate3d(0, ${scrollableAra.scrollTop}px, 0)`;
    }

    if (scrollableAra.scrollTop > window.lastScrollTop) {
        document.getElementById("side-panel").scrollTop +=
            scrollableAra.scrollTop - window.lastScrollTop;
    } else {
        document.getElementById("side-panel").scrollTop -=
            window.lastScrollTop - scrollableAra.scrollTop;
    }

    window.lastScrollTop = scrollableAra.scrollTop;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

document.getElementById("scrollable-area").addEventListener("scroll", handlePageScroll);
