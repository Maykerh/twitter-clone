import React from "react";

import { Container, TweetHeader, TweetContent } from "./styles";

function TweetCard() {
    return (
        <Container>
            <TweetHeader>
                <div>
                    <img src="" alt="" />
                    <div>
                        <span>Twiter</span> @twiter - Apr 5
                    </div>
                </div>
            </TweetHeader>
            <TweetContent>
                This is a tweet This is a tweet This is a tweet This is a tweet
            </TweetContent>
        </Container>
    );
}

export default TweetCard;
