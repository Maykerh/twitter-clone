import React from "react";
import { Link } from "react-router-dom";

import TweetCard from "../../components/TweetCard";

import { Container, RightContainer, CenterContainer } from "./styles";

const Home = props => {
    console.log(props);
    return (
        <Container>
            <CenterContainer>
                <TweetCard />
                {"HOOOOOOOOOME"} <Link to={"/user-profile"}>GO TO PROFILE</Link>
            </CenterContainer>
            <RightContainer>
                <div>
                    <TweetCard />
                </div>
            </RightContainer>
        </Container>
    );
};

export default Home;
