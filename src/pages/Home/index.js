import React from "react";
import { Link } from "react-router-dom";

import ContentLayout from "../../components/ContentLayout";
import ContentHeader from "../../components/ContentHeader";
import Timeline from "../../components/Timeline";
import TweetInput from "../../components/TweetInput";

import { Container, RightContainer, CenterContainer } from "./styles";

const Home = props => {
    const Home = (
        <div>
            <ContentHeader title={"Home"} />
            <TweetInput />
            <Timeline />
            {"HOOOOOOOOOME"} <Link to={"/user-profile"}>GO TO PROFILE</Link>
        </div>
    );
    return (
        <ContentLayout
            centerComponent={Home}
            rightComponent={<div>{"COnteudo"}</div>}
        ></ContentLayout>
    );
};

export default Home;
