import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #cacaca;
    border-radius: 10px;
    width: 100%;
    background-color: #fff;
`;

export const TweetHeader = styled.div`
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-size: 12px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            background-color: blue;
            margin-right: 10px;
        }

        div > span {
            font-weight: bold;
            margin-right: 5px;
            font-size: 16px;
        }
    }
`;

export const TweetContent = styled.div`
    width: 100%;
    font-size: 30px;
    padding: 10px 10px;
    box-sizing: border-box;
`;
