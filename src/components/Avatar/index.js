import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Avatar({ url, width, height, name }) {
    return (
        <Container width={width} height={height}>
            <img src={url || `https://ui-avatars.com/api/?name=${name}`} alt="Avatar" />
        </Container>
    );
}

Avatar.defaultProps = {
    url: null,
    width: "50px",
    height: "50px",
    name: "x",
};

Avatar.propTypes = {
    url: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
};
