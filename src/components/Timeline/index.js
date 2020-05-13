import React from "react";

import TweetCard from "./TweetCard";

import { Container, CardWrapper } from "./styles";

const fakeData = [
    {
        name: "Mayke",
        avatarUrl: null,
        userName: "@Mayke",
        date: new Date(),
        description:
            "Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in",
        comments: 5,
        retweets: 10,
        likes: 100,
    },
    {
        name: "Ze",
        avatarUrl: null,
        userName: "@Ze",
        date: new Date(),
        description:
            "In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. ",
        comments: null,
        retweets: null,
        likes: null,
    },
    {
        name: "Mutley",
        avatarUrl: null,
        userName: "@Mutley",
        date: new Date(),
        description:
            "Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever.",
        comments: 2000,
        retweets: 10000,
        likes: 1000000,
    },
];

function Timeline() {
    function renderTimelineContent() {
        const timelineContent = fakeData;

        return timelineContent.map(tweet => (
            <CardWrapper>
                <TweetCard data={tweet} />
            </CardWrapper>
        ));
    }

    return <Container>{renderTimelineContent()}</Container>;
}

export default Timeline;
