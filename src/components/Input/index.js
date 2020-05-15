import React from "react";
import PropTypes from "prop-types";

import { Wrapper, StyledInput, Label } from "./styles";

function Input({ name, labelText, value, onChange }) {
    function handleChange(newValue) {
        onChange(newValue.target.value);
    }

    return (
        <Wrapper>
            <Label htmlFor={name}>{labelText}</Label>
            <StyledInput onChange={handleChange} value={value} />
        </Wrapper>
    );
}

Input.defaultProps = {
    name: null,
    labelText: null,
    value: "",
};

Input.propTypes = {
    name: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;
