import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { useEffect } from "react";

import { MdClose } from "react-icons/md";

import { Container, Header, Title } from "./styles";
import Button from "../Button";

export default function MyModal({ title, getContent, isOpen, onClose, onSave, width, height }) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    return (
        <Container>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick
                style={{
                    content: {
                        width: `${width}%`,
                        height: `${height}%`,
                    },
                }}
            >
                <Header>
                    <div>
                        <MdClose onClick={onClose} size={25} />
                        <span>{title}</span>
                    </div>
                    <Button text={"Save"} onClick={onSave} />
                </Header>
                <div>{getContent()}</div>
            </Modal>
        </Container>
    );
}

MyModal.defaultProps = {
    width: 500,
    height: 500,
};

MyModal.propTypes = {
    title: PropTypes.string.isRequired,
    getContent: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};
