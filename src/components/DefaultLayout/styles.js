import styled from "styled-components";
import { primaryBlue, secondaryBlue, borderGray } from "../../styles/variables";

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ContentContainer = styled.div`
    width: 72%;
    height: 100%;
    display: flex;
    overflow: auto;

    @media (max-width: 1300px) {
        width: 90%;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 28%;
    height: 100%;
    min-width: 55px;

    @media (max-width: 1300px) {
        width: 10%;
    }
`;

export const CenterContainer = styled.div`
    max-width: 600px;
    min-width: 300px;
    width: 60%;
    height: 100%;
    min-height: 850px;
    display: table;
    border-right: 1px solid ${borderGray};
    border-left: 1px solid ${borderGray};

    > div {
        height: 100%;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const RightContainer = styled.div`
    width: 40%;
    overflow: hidden;

    > div {
        width: 350px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Menu = styled.div`
    width: 200px;
    justify-self: flex-start;

    @media (max-width: 1300px) {
        width: 70px;
    }
`;

export const MenuItem = styled.div`
    height: 50px;
    user-select: none;
    cursor: pointer;
    margin-bottom: 5px;
    color: ${props => (props.active ? primaryBlue : null)};

    @media (max-width: 1300px) {
        display: flex;
        justify-content: center;
    }

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

            @media (max-width: 1300px) {
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
