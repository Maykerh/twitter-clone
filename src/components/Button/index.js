import React from "react";
import PropTypes from "prop-types";

import { primaryBlue } from "../../styles/variables";

import { Container } from "./styles";

const Button = ({ text, width, color, onClick }) => {
    return (
        <Container width={width} color={color} onClick={onClick}>
            <span>{text}</span>
        </Container>
    );
};

Button.defaultProps = {
    width: null,
    color: primaryBlue,
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    color: PropTypes.string,
};

export default Button;
