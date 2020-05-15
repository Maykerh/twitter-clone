import React from "react";

import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import AvatarInput from "../../../components/AvatarInput";

function EditModal({ data, isOpen, onClose }) {
    function getViewContent() {
        return (
            <div>
                <AvatarInput />
                <Input labelText="Name" name="name" value={data.name} />
                <Input labelText="Bio" name="name" value={data.description} />
                <Input labelText="Location" name="name" value={data.location} />
            </div>
        );
    }

    return (
        <Modal
            title={"Edit profile"}
            getContent={getViewContent}
            isOpen={isOpen}
            onSave={data => console.log(["salvou", data])}
            onClose={onClose}
            width={70}
            height={70}
        />
    );
}

export default EditModal;
