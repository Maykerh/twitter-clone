import styled from "styled-components";
import { borderGray } from "../../styles/variables";

export const CenterContainer = styled.div`
    max-width: 600px;
    min-width: 300px;
    margin-right: 10px;
    margin-left: 10px;
    width: 100%;
    height: 100%;
    display: table;
    border-right: 1px solid ${borderGray};
    border-left: 1px solid ${borderGray};

    > div {
        height: 100%;
    }
`;

export const RightContainer = styled.div`
    width: 50%;

    > div {
        width: 350px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;
