import styled from "styled-components";
import { primaryBlue, secondaryBlue } from "../../styles/variables";

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;

    @media (max-width: 1250px) {
        width: 20%;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    height: 100%;
`;

export const Menu = styled.div`
    width: 200px;
    justify-self: flex-start;

    @media (max-width: 1250px) {
        width: 70px;
    }
`;

export const MenuItem = styled.div`
    height: 50px;
    user-select: none;
    cursor: pointer;
    margin-bottom: 5px;

    a {
        text-decoration: none;
        color: inherit;
    }

    a > div {
        padding: 0 10px;
        height: 100%;
        border-radius: 50px;
        display: inline-flex;
        align-items: center;

        > span {
            font-size: 19px;
            font-weight: bold;
            margin-left: 15px;

            @media (max-width: 1250px) {
                display: none;
            }
        }

        transition: all 0.2s;
    }

    a > div:hover {
        background-color: ${secondaryBlue};
        color: ${primaryBlue};
    }
`;
