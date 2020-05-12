import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-left: -100px;
`;

export const ContentContainer = styled.div`
    background-color: green;
    display: flex;
    flex: 2;
`;

export const Menu = styled.div`
    width: 250px;
    justify-self: flex-start;
`;

export const MenuItem = styled.div`
    height: 50px;
    user-select: none;
    cursor: pointer;
    margin-bottom: 5px;

    > div {
        padding: 0 15px;
        height: 100%;
        border-radius: 50px;
        display: inline-flex;
        align-items: center;

        > span {
            font-size: 19px;
            font-weight: bold;
            margin-left: 15px;
        }

        transition: all 0.2s;
    }

    > div:hover {
        background-color: #e8f5fe;
        color: #1da1f2;
    }
`;
