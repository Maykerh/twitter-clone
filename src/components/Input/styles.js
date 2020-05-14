import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 15px;
`;

export const StyledInput = styled.input`
    height: 40px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #dadada;
    color: #7b7b7b;
    font-size: 16px;
    padding: 20px 2px;
    box-sizing: border-box;
    margin-bottom: 3px;
    margin-top: 2px;
    outline: 0;

    ::placeholder {
        color: #dadada;
    }
`;

export const Label = styled.label.attrs(props => ({
    htmlFor: props.for ? props.for : null,
}))`
    color: #656565;
    font-weight: bolder;
    margin-left: 2px;
`;
