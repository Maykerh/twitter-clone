import React, { useState, useEffect } from "react";
import _ from "lodash";
import { BsCalendar } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { db } from "../../firebase";

import ContentHeader from "../../components/ContentHeader";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import EditModal from "./EditModal";

import {
    Container,
    ContentWrapper,
    Cover,
    AvatarWrapper,
    InfoWrapper,
    Name,
    UserName,
    Description,
    DateJoined,
    Status,
    ViewList,
    Location,
} from "./styles";
import Timeline from "../../components/Timeline";

function UserProfile() {
    const [userData, setUserData] = useState({});
    const [timelineData, setTimelineData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUserData = () => {
            db.ref("/users/1")
                .once("value")
                .then(snapshot => {
                    const data = snapshot.val();

                    setUserData({ ...data, id: snapshot.key });
                });
        };

        loadUserData();
    }, []);

    useEffect(() => {
        const loadUserTweets = () => {
            setIsLoading(true);

            db.ref(`/tweets/${userData.id}`)
                .once("value")
                .then(snapshot => {
                    const data = snapshot.val();

                    setTimelineData(_.toArray(data).reverse());
                    setIsLoading(false);
                });
        };

        loadUserTweets();
    }, [userData]);

    return isLoading ? (
        <div>Carregando...</div>
    ) : (
        <Container>
            <EditModal data={userData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ContentHeader title={userData.name} />
            <ContentWrapper>
                <Cover />
                <AvatarWrapper>
                    <Avatar
                        url={userData.avatarUrl}
                        name={userData.name}
                        width={"150px"}
                        height={"150px"}
                    />
                    <Button
                        text={"Edit Profile"}
                        width={"130px"}
                        onClick={() => setIsModalOpen(true)}
                    />
                </AvatarWrapper>
                <InfoWrapper>
                    <Name>{userData.name}</Name>
                    <UserName>
                        {userData.userName}
                        {" - "}
                        <span id="counter">{`${userData.tweets} tweets`}</span>{" "}
                    </UserName>
                    <Description>{userData.description}</Description>
                    <Location>
                        <GrLocation size={18} />
                        <span>{userData.location}</span>
                    </Location>
                    <DateJoined>
                        <BsCalendar size={18} />
                        <span>
                            {format(userData.dateJoined, "'Joined' MMMM yyyy", {
                                locale: enUS,
                            })}
                        </span>
                    </DateJoined>
                    <div>
                        <Status>
                            <span>{userData.following}</span>
                            Following
                        </Status>
                        <Status>
                            <span>{userData.followers}</span>
                            Followers
                        </Status>
                    </div>
                </InfoWrapper>
                <ViewList active={1}>
                    <div>
                        <span>Tweets</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Tweets & replies</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Media</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Likes</span>
                    </div>
                </ViewList>
                <Timeline timelineData={timelineData} />
            </ContentWrapper>
        </Container>
    );
}

export default UserProfile;
