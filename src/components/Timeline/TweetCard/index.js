import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsUpload } from "react-icons/bs";

import Avatar from "../../Avatar";

import { Container, TweetHeader, TweetText, TweetContent, TweetFooter, FooterBtn } from "./styles";

function TweetCard({ data }) {
    return (
        <Container>
            <Avatar />
            <TweetContent>
                <TweetHeader>
                    <span>{data.name}</span>{" "}
                    {`${data.userName} - ${formatDistanceToNow(new Date(data.date))}`}
                </TweetHeader>
                <TweetText>{data.description}</TweetText>
                <TweetFooter>
                    <FooterBtn>
                        <div>
                            <BsChat size={18} />
                        </div>
                        <span>{data.comments}</span>
                    </FooterBtn>{" "}
                    <FooterBtn>
                        <div>
                            <AiOutlineRetweet size={18} />
                        </div>
                        <span>{data.retweets}</span>
                    </FooterBtn>{" "}
                    <FooterBtn>
                        <div>
                            <AiOutlineHeart size={18} />
                        </div>
                        <span>{data.likes}</span>
                    </FooterBtn>
                    <FooterBtn>
                        <div>
                            <BsUpload size={18} />
                        </div>
                    </FooterBtn>
                    <FooterBtn />
                </TweetFooter>
            </TweetContent>
        </Container>
    );
}

TweetCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        userName: PropTypes.string,
        date: PropTypes.number,
        description: PropTypes.string,
        comments: PropTypes.number,
        retweets: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
};

export default TweetCard;
