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
    padding: 10px 20px;

    &:hover {
        background-color: ${backgroundGrayHover};
    }

    a {
        text-decoration: none;

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            button {
                color: ${primaryBlue};
                height: 30px;
                border-radius: 50px;
                border: 1px solid ${primaryBlue};
                background-color: transparent;
                letter-spacing: 0;
                align-self: center;
            }
        }
    }

    #name-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        #name {
            font-size: 16px;
            font-weight: bold;
            color: ${primaryFontColor};
        }

        #user-name {
            font-size: 12px;
            color: ${secondaryFontColor};
        }
    }
`;
