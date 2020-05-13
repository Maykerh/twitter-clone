import React from "react";

import { Container } from "./styles";

function ContentHeader({ title }) {
    return (
        <Container>
            <span>{title}</span>
        </Container>
    );
}

export default ContentHeader;
