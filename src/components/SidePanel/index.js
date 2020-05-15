import React, { useState, useEffect } from "react";

import Panel from "./Panel";
import NewsCard from "./NewsCard";
import UserCard from "./UserCard";

import { Container } from "./styles";

const fakeNews = [
    {
        id: 1,
        topic: "Sports",
        time: "2 hours ago",
        text: "Aliquam vel elit eu eros semper auctor.",
    },
    {
        id: 2,
        topic: "Pop",
        time: "2 hours ago",
        text:
            "Nunc diam ligula, ultricies ut dignissim in, pulvinar efficiturnisl. Praesent viverra blandit urna a venenatis.",
    },
    {
        id: 3,
        topic: "Sports",
        time: "3 hours ago",
        text: "Aliquam ornare, sem vitae ullamcorper efficitur, augue orci.",
    },
    {
        id: 4,
        topic: "Politics",
        time: "4 hours ago",
        text: "Integer efficitur viverra tincidunt. Ut consequat placerat tempor.",
    },
];

const fakeSuggestions = [
    { id: 1, name: "Myles", userName: "@Myles" },
    { id: 1, name: "Mark", userName: "@Mark" },
    { id: 1, name: "Brian", userName: "@Brian" },
    { id: 1, name: "Scott", userName: "@Scott" },
];

function SidePanel() {
    const onClickCard = () => alert("not implemented");

    return (
        <Container>
            <Panel title="What's happening" onShowMore={onClickCard}>
                {fakeNews.map((data, index) => (
                    <NewsCard
                        key={index}
                        id={data.id}
                        topic={data.topic}
                        time={data.time}
                        text={data.text}
                        onClick={onClickCard}
                    />
                ))}
            </Panel>
            <Panel title="Who to follow " onShowMore={onClickCard}>
                {fakeSuggestions.map((data, index) => (
                    <UserCard
                        key={index}
                        id={data.id}
                        name={data.name}
                        userName={data.userName}
                        onClick={onClickCard}
                        onFollow={onClickCard}
                    />
                ))}
            </Panel>
        </Container>
    );
}

export default SidePanel;
