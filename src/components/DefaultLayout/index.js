import React from "react";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHome, AiOutlineFileSearch } from "react-icons/ai";

import { primaryBlue } from "../../styles/variables";

import { AppContainer, Container, MenuContainer, Menu, MenuItem, ContentContainer } from "./styles";

function DefaultLayout({ children }) {
    return (
        <AppContainer>
            <Container>
                <MenuContainer>
                    <Menu>
                        <MenuItem>
                            <div>
                                <GrTwitter size={25} color={primaryBlue} />
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
