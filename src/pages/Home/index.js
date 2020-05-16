import React, { useEffect, useState } from "react";
import _ from "lodash";
import { db } from "../../firebase";

import ContentHeader from "../../components/ContentHeader";
import Timeline from "../../components/Timeline";
import TweetInput from "../../components/TweetInput";
import Loading from "../../components/Loading";

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
                db.ref(`/users/${userData.id}/tweets`)
                    .once("value")
                    .then(snapshot => {
                        const tweetCount = snapshot.val();

                        db.ref(`/users/${userData.id}`).update({ tweets: tweetCount + 1 });
                    });
            });
    }

    return (
        <Container>
            <ContentHeader title={"Home"} />
            <ContentWrapper>
                <TweetInput
                    avatarUrl={userData.avatar || ""}
                    userName={userData.name || ""}
                    onTweet={postTweet}
                />
                {isLoading || timelineData.length === 0 ? (
                    <Loading />
                ) : (
                    <Timeline timelineData={timelineData} />
                )}
            </ContentWrapper>
        </Container>
    );
};

export default Home;
