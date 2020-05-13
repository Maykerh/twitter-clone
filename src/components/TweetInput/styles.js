import styled from "styled-components";
import { primaryFontColor, borderGray } from "../../styles/variables";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    border-bottom: 10px solid ${borderGray};

    div#input {
        width: 100%;
        margin-left: 10px;

        > textarea {
            width: 100%;
            border: none;
            resize: none;
            font-size: 20px;
            min-height: 50px;
            font-family: system-ui, sans-serif;
            color: ${primaryFontColor};
            padding: 5px;
            box-sizing: border-box;
            outline: 0;
        }
    }
`;

export const FooterOptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
