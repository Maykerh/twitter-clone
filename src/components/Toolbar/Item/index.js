import React from "react";

import { Container } from "./styles";

function Item({ active, name, value }) {
    return (
        <Container active={active}>
            <div className="title">
                <span>{name}</span>
            </div>
            <div className="value">
                <span>{value}</span>
            </div>
        </Container>
    );
}

export default Item;
