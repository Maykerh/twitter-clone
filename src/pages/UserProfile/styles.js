import styled from "styled-components";
import {
    primaryBlue,
    secondaryFontColor,
    primaryFontColor,
    secondaryBlue,
} from "../../styles/variables";

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 100%;

    > div#temp {
        height: 100%;
    }
`;

export const ContentWrapper = styled.div`
    box-sizing: border-box;
`;

export const Cover = styled.div`
    height: 200px;
    background-color: ${primaryBlue};
`;

export const AvatarWrapper = styled.div`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    img {
        z-index: 2;
        margin: 18px;
        margin-top: -85px;
        border: 5px solid #fff;
    }

    button {
        color: ${primaryBlue};
        height: 45px;
        border-radius: 50px;
        border: 1px solid ${primaryBlue};
        background-color: #fff;
        letter-spacing: 0;
        margin: 10px 15px 0 0;
    }
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
`;

export const Name = styled.span`
    font-weight: 900;
    font-size: 25px;
`;

export const UserName = styled.span`
    color: ${secondaryFontColor};
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Description = styled.span`
    margin-bottom: 10px;
`;

export const DateJoined = styled.div`
    color: ${secondaryFontColor};
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 5px;
    }

    > span {
        font-size: 18px;
    }
`;

export const Location = styled.div`
    color: ${secondaryFontColor};
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 5px;
    }

    > span {
        font-size: 18px;
    }
`;

export const Status = styled.span`
    margin-right: 20px;
    color: ${secondaryFontColor};
    font-size: 18px;
    margin-bottom: 10px;

    > span {
        color: ${primaryFontColor};
        font-weight: bold;
        margin-right: 5px;
    }
`;

export const ViewList = styled.div`
    width: 100%;
    height: 50px;
    display: flex;

    > div:nth-child(${props => props.active}) {
        border-bottom: 3px inset ${primaryBlue};
        color: ${primaryBlue};
    }

    > div {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
        color: ${secondaryFontColor};

        > span {
            font-size: 16px;
            font-weight: bold;
        }

        &:hover {
            background-color: ${secondaryBlue};
        }
    }
`;
