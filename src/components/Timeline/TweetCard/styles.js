import styled from "styled-components";
import {
    secondaryFontColor,
    primaryFontColor,
    secondaryBlue,
    primaryBlue,
} from "../../../styles/variables";

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 10px;
`;

export const TweetContent = styled.div`
    width: 100%;
`;

export const TweetHeader = styled.div`
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: ${secondaryFontColor};

    span {
        font-weight: bold;
        margin-right: 3px;
        font-size: 16px;
        color: ${primaryFontColor};
    }
`;

export const TweetText = styled.div`
    width: 100%;
    font-size: 15px;
    padding: 10px 10px;
    box-sizing: border-box;
`;

export const TweetFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FooterBtn = styled.div`
    height: 20px;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${secondaryFontColor};

    > div {
        height: 35px;
        width: 35px;
        border-radius: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }

    > span {
        font-size: 12px;
        margin-left: 2px;
    }

    &:hover > div {
        background-color: ${secondaryBlue};
        color: ${primaryBlue};
    }

    &:hover > span {
        color: ${primaryBlue};
    }
`;
