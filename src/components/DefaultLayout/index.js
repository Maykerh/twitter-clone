import React, { useRef } from "react";
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

function DefaultLayout({ children, location }) {
    const scrollableAreaRef = useRef();

    /**
     * Ajusta a posição dos elementos fixos da página de acordo com o scroll principal
     */
    function handlePageScroll() {
        const fixedElements = document.getElementsByClassName("vertical-fixed");
        const scrollableArea = scrollableAreaRef.current;

        for (let i = 0; i < fixedElements.length; i++) {
            fixedElements[i].style.transform = `translate3d(0, ${scrollableArea.scrollTop}px, 0)`;
        }

        /**
         * Caso o conteúdo do painel da direita esteja cortado, faz o scroll somente no painel
         * ao rolar pra cima ou pra baixo a partir de qualquer posição na página
         */
        if (scrollableArea.scrollTop > window.lastScrollTop) {
            document.getElementById("side-panel").scrollTop +=
                scrollableArea.scrollTop - window.lastScrollTop;
        } else {
            document.getElementById("side-panel").scrollTop -=
                window.lastScrollTop - scrollableArea.scrollTop;
        }

        window.lastScrollTop = scrollableArea.scrollTop;
    }

    /**
     * Adiciona os eventos globais
     */
    function addEventListeners() {
        scrollableAreaRef.current &&
            scrollableAreaRef.current.addEventListener("scroll", handlePageScroll);
    }

    /**
     * Reseta o scroll ao trocar de pagina para ajustar o translate dos elementos fixos
     */
    function resetScroll() {
        if (scrollableAreaRef.current) {
            scrollableAreaRef.current.scrollTop = 0;
        }
    }

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
                    <MenuItem active={location.pathname === "/"}>
                        <Link to={"/"}>
                            <div>
                                <AiOutlineHome size={32} />
                                <span>Home</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem active={location.pathname === "/user-profile"}>
                        <Link to={"/user-profile"}>
                            <div>
                                <AiOutlineUser size={32} />
                                <span>Profile</span>
                            </div>
                        </Link>
                    </MenuItem>
                </Menu>
            </MenuContainer>
            <ContentContainer id="scrollable-area" ref={scrollableAreaRef} onLoad={resetScroll}>
                <CenterContainer>{children}</CenterContainer>
                <RightContainer className={"vertical-fixed"} id={"side-panel"}>
                    <SidePanel />
                </RightContainer>
            </ContentContainer>
        </AppContainer>
    );
}

export default DefaultLayout;
