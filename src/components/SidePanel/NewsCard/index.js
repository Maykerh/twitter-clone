import React from "react";

import { Container } from "./styles";

function NewsCard({ topic, time, text, onClick }) {
    return (
        <Container>
            <a href="#" onClick={onClick}>
                <div>
                    <span id="topic">{`${topic} - ${time}`}</span>
                    <span id="text">{text}</span>
                </div>
            </a>
        </Container>
    );
}

export default NewsCard;
