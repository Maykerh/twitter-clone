import React from "react";

import TweetCard from "./TweetCard";

import { Container, CardWrapper } from "./styles";

function Timeline({ timelineData }) {
    function renderTimelineContent() {
        if (!timelineData) {
            return null;
        }

        return timelineData.map((tweet, index) => (
            <CardWrapper key={index}>
                <TweetCard data={tweet} />
            </CardWrapper>
        ));
    }

    return <Container>{renderTimelineContent()}</Container>;
}

export default Timeline;
