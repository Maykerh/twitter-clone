import React from "react";
import { Link } from "react-router-dom";

import { GrTwitter } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";

import SidePanel from "../SidePanel";

import { primaryBlue } from "../../styles/variables";

import {
    AppContainer,
    MenuContainer,
    Menu,
    MenuItem,
    ContentContainer,
    CenterContainer,
    RightContainer,
} from "./styles";

/**
 * Ajusta a posição dos elementos fixos da página de acordo com o scroll principal
 */
function handlePageScroll() {
    const fixedElements = document.getElementsByClassName("vertical-fixed");
    const scrollableAra = document.getElementById("scrollable-area");

    for (let i = 0; i < fixedElements.length; i++) {
        fixedElements[i].style.transform = `translate3d(0, ${scrollableAra.scrollTop}px, 0)`;
    }

    /**
     * Caso o conteúdo do painel da direita esteja cortado, faz o scroll somente no painel
     * ao rolar pra cima ou pra baixo a partir de qualquer posição na página
     */
    if (scrollableAra.scrollTop > window.lastScrollTop) {
        document.getElementById("side-panel").scrollTop +=
            scrollableAra.scrollTop - window.lastScrollTop;
    } else {
        document.getElementById("side-panel").scrollTop -=
            window.lastScrollTop - scrollableAra.scrollTop;
    }

    window.lastScrollTop = scrollableAra.scrollTop;
}

/**
 * Adiciona os eventos globais
 */
function addEventListeners() {
    const scrollableAra = document.getElementById("scrollable-area");

    scrollableAra && scrollableAra.addEventListener("scroll", handlePageScroll);
}

function DefaultLayout({ children }) {
    return (
        <AppContainer id={"app-container"} onLoad={addEventListeners}>
            <MenuContainer>
                <Menu>
                    <MenuItem>
                        <Link to={"/"}>
                            <div>
                                <GrTwitter size={25} color={primaryBlue} />
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/"}>
                            <div>
                                <AiOutlineHome size={32} />
                                <span>Home</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/user-profile"}>
                            <div>
                                <AiOutlineUser size={32} />
                                <span>Profile</span>
                            </div>
                        </Link>
                    </MenuItem>
                </Menu>
            </MenuContainer>
            <ContentContainer id="scrollable-area">
                <CenterContainer>{children}</CenterContainer>
                <RightContainer className={"vertical-fixed"} id={"side-panel"}>
                    <SidePanel />
                </RightContainer>
            </ContentContainer>
        </AppContainer>
    );
}

export default DefaultLayout;
