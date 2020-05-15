import styled from "styled-components";

import {
    borderGray,
    secondaryFontColor,
    backgroundGray,
    backgroundGrayHover,
    primaryFontColor,
    primaryBlue,
} from "../../../styles/variables";

export const Container = styled.div`
    border-bottom: 1px solid ${borderGray};

    &:hover {
        background-color: ${backgroundGrayHover};
    }

    a {
        text-decoration: none;

        > div {
            padding: 10px 15px;
            display: flex;
            flex-direction: column;
            text-justify: newspaper;
        }
    }

    #topic {
        font-size: 12px;
        color: ${secondaryFontColor};
    }

    #text {
        font-size: 16px;
        font-weight: bold;
        color: ${primaryFontColor};
    }
`;
