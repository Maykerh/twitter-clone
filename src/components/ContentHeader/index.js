import React from "react";

import { Container } from "./styles";

function ContentHeader({ title }) {
    return (
        <Container className="vertical-fixed">
            <span>{title}</span>
        </Container>
    );
}

export default ContentHeader;
