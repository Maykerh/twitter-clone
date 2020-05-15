import styled from "styled-components";

export const Container = styled.button`
    width: ${props => (props.width ? props.width : null)};
    height: 40px;
    min-width: 80px;
    color: #fff;
    background-color: ${props => props.color};
    border: none;
    border-radius: 20px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: 0;

    :active {
        border-top: 2px inset ${props => props.color};
    }
`;
