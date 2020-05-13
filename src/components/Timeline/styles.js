import styled from "styled-components";
import { borderGray } from "../../styles/variables";

export const Container = styled.div`
    width: 100%;
`;

export const CardWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid ${borderGray};
`;
