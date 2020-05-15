import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function ContentHeader({ title }) {
    return (
        <Container className="vertical-fixed">
            <span>{title}</span>
        </Container>
    );
}

ContentHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ContentHeader;
