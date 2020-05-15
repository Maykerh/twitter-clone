import React from "react";

import ContentHeader from "../../components/ContentHeader";
import Timeline from "../../components/Timeline";
import TweetInput from "../../components/TweetInput";

import { Container, ContentWrapper } from "./styles";

const Home = () => {
    function getAvatarUrl() {
        return JSON.parse(localStorage.getItem("twt-profile")).avatarUrl;
    }

    function getUserName() {
        return JSON.parse(localStorage.getItem("twt-profile")).name;
    }

    return (
        <Container>
            <ContentHeader title={"Home"} />
            <ContentWrapper>
                <TweetInput avatarUrl={getAvatarUrl()} name={getUserName()} />
                <Timeline />
            </ContentWrapper>
        </Container>
    );
};

export default Home;
