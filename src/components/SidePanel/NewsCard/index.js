import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function NewsCard({ topic, timeString, text, onClick }) {
    return (
        <Container>
            <a href="##" onClick={onClick}>
                <div>
                    <span id="topic">{`${topic} - ${timeString}`}</span>
                    <span id="text">{text}</span>
                </div>
            </a>
        </Container>
    );
}

NewsCard.propTypes = {
    topic: PropTypes.string.isRequired,
    timeString: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default NewsCard;
