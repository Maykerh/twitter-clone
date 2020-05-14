import styled from "styled-components";
import { borderGray } from "../../styles/variables";

export const Container = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;

    label {
        height: 120px;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            height: 120px;
            width: 120px;
            border-radius: 50%;
            border: 2px solid ${borderGray};
        }

        input {
            display: none;
        }
    }
`;

export const EmptyImg = styled.div`
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #eee;

    > svg {
        position: absolute;
    }
`;
