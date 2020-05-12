import React from "react";

import { AppContainer, Container, MenuContainer, Menu, MenuItem, ContentContainer } from "./styles";

import { GrTwitter } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHome, AiOutlineFileSearch } from "react-icons/ai";

function DefaultLayout({ children }) {
    return (
        <AppContainer>
            <Container>
                <MenuContainer>
                    <Menu>
                        <MenuItem>
                            <div>
                                <GrTwitter size={25} color={"#1da1f2"} />
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div>
                                <AiOutlineHome size={32} />
                                <span>Home</span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div>
                                <AiOutlineFileSearch size={32} />
                                <span>Explore</span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div>
                                <AiOutlineUser size={32} />
                                <span>Profile</span>
                            </div>
                        </MenuItem>
                    </Menu>
                </MenuContainer>
                <ContentContainer>{children}</ContentContainer>
            </Container>
        </AppContainer>
    );
}

export default DefaultLayout;
