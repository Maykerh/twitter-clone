import styled from "styled-components";

import {
    borderGray,
    backgroundGray,
    backgroundGrayHover,
    primaryFontColor,
    primaryBlue,
} from "../../../styles/variables";

export const Container = styled.div`
    width: 350px;
    background-color: ${backgroundGray};
    border-radius: 10px;
`;

export const Header = styled.div`
    padding: 10px 15px;
    border-bottom: 1px solid ${borderGray};
    font-size: 20px;
    font-weight: bold;
    color: ${primaryFontColor};
`;

export const Footer = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
        background-color: ${backgroundGrayHover};
    }

    > a {
        text-decoration: none;
        font-size: 14px;
        color: ${primaryBlue};

        div {
            padding: 10px 15px;
        }
    }
`;
