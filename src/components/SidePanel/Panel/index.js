import React from "react";

import { Container, Header, Footer } from "./styles";

function Panel({ children }) {
    return (
        <Container>
            <Header>{"What's happening"}</Header>
            {children}
            <Footer onClick={() => alert("not implemented")}>
                <a href="##">
                    <div>Show more</div>
                </a>
            </Footer>
        </Container>
    );
}

export default Panel;
