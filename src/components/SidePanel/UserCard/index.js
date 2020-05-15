import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../Avatar";
import Button from "../../Button";

import { Container } from "./styles";

function UserCard({ name, userName, onClickCard, onFollow }) {
    return (
        <Container>
            <a href="##" onClick={onClickCard}>
                <div>
                    <div>
                        <Avatar name={name} />
                        <div id="name-wrapper">
                            <span id="name">{`${name}`}</span>
                            <span id="user-name">{userName}</span>
                        </div>
                    </div>
                    <Button text={"Follow"} width={"80px"} onClick={onFollow} />
                </div>
            </a>
        </Container>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    onFollow: PropTypes.func.isRequired,
    onClickCard: PropTypes.func.isRequired,
};

export default UserCard;
