import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 15px;
    align-items: center;
    box-sizing: border-box;
    border-bottom: ${props => (props.active ? "3px solid #345579" : null)};
    user-select: none;
    cursor: pointer;

    div.title {
        font-size: 12px;
        color: #7b7b7b;
    }

    div.value {
        font-size: 16px;
        font-weight: bold;
    }
`;
