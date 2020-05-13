import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import Avatar from "../Avatar";
import Button from "../Button";

import { Container, FooterOptions } from "./styles";

function TweetInput() {
    const [tweet, setTweet] = useState("");

    return (
        <Container>
            <Avatar />
            <div id="input">
                <TextareaAutosize
                    placeholder="What's happening?"
                    value={tweet}
                    maxLength={280}
                    onChange={e => setTweet(e.target.value)}
                />
                <FooterOptions>
                    <Button text={"Tweet"} />
                </FooterOptions>
            </div>
        </Container>
    );
}

export default TweetInput;
