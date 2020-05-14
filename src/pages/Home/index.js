import React from "react";

import ContentLayout from "../../components/ContentLayout";
import ContentHeader from "../../components/ContentHeader";
import Timeline from "../../components/Timeline";
import TweetInput from "../../components/TweetInput";

import { Container, RightContainer, CenterContainer, ContentWrapper } from "./styles";

const Home = props => {
    function getAvatarUrl() {
        return JSON.parse(localStorage.getItem("twt-profile")).avatarUrl;
    }

    function getUserName() {
        return JSON.parse(localStorage.getItem("twt-profile")).name;
    }

    const HomeComponent = (
        <div>
            <ContentHeader title={"Home"} />
            <ContentWrapper>
                <TweetInput avatarUrl={getAvatarUrl()} name={getUserName()} />
                <Timeline />
            </ContentWrapper>
        </div>
    );

    return (
        <ContentLayout centerComponent={HomeComponent} rightComponent={<div>{"COnteudo"}</div>} />
    );
};

export default Home;
