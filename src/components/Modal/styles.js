import styled from "styled-components";
import { primaryBlue, secondaryBlue } from "../../styles/variables";

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    width: 100%;
    text-align: right;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
        height: 30px;
    }

    > div {
        display: flex;
        align-items: center;

        > span {
            font-size: 20px;
            font-weight: bold;
            margin-left: 10px;
        }
    }

    svg {
        border-radius: 50px;
        padding: 5px;
        margin-top: 5px;
        color: ${primaryBlue};

        &:hover {
            background-color: ${secondaryBlue};
        }
    }
`;
