import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: ${props => props.height};
    width: ${props => props.width};

    label {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            height: 100%;
            width: 100%;
            border-radius: ${props => (props.isRound ? "50%" : null)};
            border: 5px solid #fff;
        }

        input {
            display: none;
        }
    }
`;

export const EmptyImg = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => (props.isRound ? "50%" : null)};
    background-color: #eee;
    border: 5px solid #fff;
    box-sizing: border-box;

    > svg {
        position: absolute;
    }
`;
