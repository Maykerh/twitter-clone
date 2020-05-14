import styled from "styled-components";
import { borderGray } from "../../styles/variables";

export const Container = styled.div`
    padding: 12px;
    border-bottom: 1px solid ${borderGray};
    background-color: #fff;

    span {
        font-size: 20px;
        font-weight: 900;
    }
`;
