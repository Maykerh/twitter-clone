import React from "react";
import PropTypes from "prop-types";

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

Timeline.propTypes = {
    timelineData: PropTypes.array.isRequired,
};

export default Timeline;
