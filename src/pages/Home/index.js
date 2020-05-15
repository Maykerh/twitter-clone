import React, { useEffect, useState } from "react";
import _ from "lodash";
import { db } from "../../firebase";

import ContentHeader from "../../components/ContentHeader";
import Timeline from "../../components/Timeline";
import TweetInput from "../../components/TweetInput";

import { Container, ContentWrapper } from "./styles";

const Home = () => {
    const [userData, setUserData] = useState({});
    const [timelineData, setTimelineData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUserData = () => {
            setUserData(JSON.parse(localStorage.getItem("twt-session")));
        };

        loadUserData();
    }, []);

    useEffect(() => {
        const loadTimeline = () => {
            setIsLoading(true);

            db.ref("/fakeTimeline")
                .once("value")
                .then(snapshot => {
                    const data = snapshot.val();

                    setTimelineData(_.toArray(data).reverse());
                    setIsLoading(false);
                });
        };

        loadTimeline();
    }, []);

    function postTweet(tweetText) {
        const tweetData = {
            comments: 0,
            avatarUrl: userData.avatarUrl || null,
            likes: 0,
            retweets: 0,
            date: new Date().getTime(),
            name: userData.name,
            userName: userData.userName,
            description: tweetText,
        };

        db.ref(`/tweets/${userData.id}`)
            .push(tweetData)
            .then(() => {
                const newData = [tweetData, ...timelineData];

                setTimelineData(newData);

                db.ref(`/fakeTimeline`).push(tweetData);
            });
    }

    return isLoading ? (
        <div>Carregando...</div>
    ) : (
        <Container>
            <ContentHeader title={"Home"} />
            <ContentWrapper>
                <TweetInput
                    avatarUrl={userData.avatarUrl}
                    name={userData.name}
                    onTweet={postTweet}
                />
                <Timeline timelineData={timelineData} />
            </ContentWrapper>
        </Container>
    );
};

export default Home;
