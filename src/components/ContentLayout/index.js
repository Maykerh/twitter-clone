import React from "react";

import { Container, CenterContainer, RightContainer } from "./styles";

function ContentLayout({ centerComponent, rightComponent }) {
    return (
        <Container>
            <CenterContainer>{centerComponent}</CenterContainer>
            <RightContainer>{rightComponent}</RightContainer>
        </Container>
    );
}

export default ContentLayout;
