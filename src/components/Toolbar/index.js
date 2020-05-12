import React from "react";

import Item from "./Item";

import { Container, ToolbarWrapper } from "./styles";

function Toolbar() {
    return (
        <Container>
            <ToolbarWrapper>
                <Item active={true} name={"TWEETS"} value={"1,750"} />
                <Item active={false} name={"PHOTOS/VIDEOS"} value={"35"} />
                <Item active={false} name={"FOLOWING"} value={"131"} />
                <Item active={false} name={"FOLLOWERS"} value={"29.8M"} />
                <Item active={false} name={"FAVORITES"} value={"26"} />
            </ToolbarWrapper>
            <div>opa</div>
        </Container>
    );
}

export default Toolbar;
