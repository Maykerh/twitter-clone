import React, { useState } from "react";

import { FiCamera } from "react-icons/fi";

import { Container, EmptyImg } from "./styles";
import { secondaryFontColor } from "../../styles/variables";

export default function AvatarInput() {
    const [file, setFile] = useState(null);

    function handleChange() {
        const newFile = document.getElementById("avatar").files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            function() {
                setFile(reader.result);
            },
            false
        );

        if (newFile) {
            reader.readAsDataURL(newFile);
        }
    }

    return (
        <Container>
            <label htmlFor="avatar">
                {file ? (
                    <img src={file} alt="" id="avatar-preview" />
                ) : (
                    <EmptyImg>
                        <FiCamera size={32} color={secondaryFontColor} />
                    </EmptyImg>
                )}
                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                />
            </label>
        </Container>
    );
}
