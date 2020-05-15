import React, { useState } from "react";
import PropTypes from "prop-types";

import { FiCamera } from "react-icons/fi";

import { Container, EmptyImg } from "./styles";
import { secondaryFontColor } from "../../styles/variables";

function ImageInput({ base64Image, onChange, width, height, isRound, id }) {
    const [file, setFile] = useState(base64Image || null);

    function handleChange() {
        const newFile = document.getElementById(id).files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                setFile(reader.result);
                onChange(reader.result);
            },
            false
        );

        if (newFile) {
            reader.readAsDataURL(newFile);
        }
    }

    return (
        <Container width={width} height={height} isRound={isRound}>
            <label htmlFor={id}>
                {file ? (
                    <img src={file} alt="" id={`${id}-preview`} />
                ) : (
                    <EmptyImg isRound={isRound}>
                        <FiCamera size={32} color={secondaryFontColor} />
                    </EmptyImg>
                )}
                <input
                    type="file"
                    id={id}
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                />
            </label>
        </Container>
    );
}

ImageInput.defaultProps = {
    base64Image: null,
    isRound: false,
    width: "100%",
    height: "100%",
};

ImageInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    base64Image: PropTypes.string,
    isRound: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default ImageInput;
