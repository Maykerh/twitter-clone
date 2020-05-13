import styled from "styled-components";
import { borderGray } from "../../styles/variables";

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const CenterContainer = styled.div`
    max-width: 600px;
    min-width: 300px;
    width: 100%;
    border-right: 1px solid ${borderGray};
    border-left: 1px solid ${borderGray};
`;

export const RightContainer = styled.div`
    width: 100%;
    margin-left: 10px;

    > div {
        width: 350px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;
