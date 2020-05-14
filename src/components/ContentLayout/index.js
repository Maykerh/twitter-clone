import React from "react";

import { CenterContainer, RightContainer } from "./styles";

function ContentLayout({ centerComponent, rightComponent }) {
    return (
        <>
            <CenterContainer>{centerComponent}</CenterContainer>
            <RightContainer>{rightComponent}</RightContainer>
        </>
    );
}

export default ContentLayout;
