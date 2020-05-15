import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import Avatar from "../Avatar";
import Button from "../Button";

import { Container, FooterOptions } from "./styles";

function TweetInput({ avatarUrl, userName, onTweet }) {
    const [tweet, setTweet] = useState("");

    return (
        <Container>
            <Avatar url={avatarUrl} name={userName} />
            <div id="input">
                <TextareaAutosize
                    placeholder="What's happening?"
                    value={tweet}
                    maxLength={280}
                    onChange={e => setTweet(e.target.value)}
                />
                <FooterOptions>
                    <Button
                        text={"Tweet"}
                        onClick={() => {
                            onTweet(tweet);
                            setTweet("");
                        }}
                    />
                </FooterOptions>
            </div>
        </Container>
    );
}

export default TweetInput;
