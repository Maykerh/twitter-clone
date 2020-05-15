import React, { useState } from "react";
import PropTypes from "prop-types";

import { db } from "../../../firebase";

import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import ImageInput from "../../../components/ImageInput";

import { Container } from "./styles";

function EditModal({ data, isOpen, onClose, afterSave }) {
    const [name, setName] = useState(data.name || "");
    const [location, setLocation] = useState(data.location || "");
    const [description, setDescription] = useState(data.description || "");
    const [avatar, setAvatar] = useState(data.avatar || "");
    const [cover, setCover] = useState(data.cover || "");

    function getViewContent() {
        return (
            <Container>
                <div id="cover-wrapper">
                    <ImageInput
                        id={"cover"}
                        base64Image={cover}
                        onChange={image64 => setCover(image64)}
                        height={"200px"}
                    />
                </div>
                <div id="avatar-wrapper">
                    <ImageInput
                        id={"avatar"}
                        base64Image={avatar}
                        onChange={image64 => setAvatar(image64)}
                        isRound
                        width={"120px"}
                        height={"120px"}
                    />
                </div>
                <Input labelText="Name" value={name} onChange={setName} />
                <Input labelText="Bio" value={description} onChange={setDescription} />
                <Input labelText="Location" value={location} onChange={setLocation} />
            </Container>
        );
    }

    function onSave() {
        db.ref(`/users/${data.id}`).update({ name, description, location, avatar, cover });

        afterSave({ name, description, location, avatar, cover });
    }

    return (
        <Modal
            title={"Edit profile"}
            getContent={getViewContent}
            isOpen={isOpen}
            onSave={onSave}
            onClose={onClose}
            width={70}
            height={70}
        />
    );
}

EditModal.propTypes = {
    data: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    afterSave: PropTypes.func.isRequired,
};

export default EditModal;
