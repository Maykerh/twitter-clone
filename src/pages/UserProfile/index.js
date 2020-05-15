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
import Loading from "../../components/Loading";
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

    function getFormattedDate(timestamp) {
        return (
            timestamp &&
            format(new Date(timestamp), "'Joined' MMMM yyyy", {
                locale: enUS,
            })
        );
    }

    function notImplemented() {
        alert("Not implemented");
    }

    return Object.keys(userData).length === 0 ? null : (
        <Container>
            <EditModal
                data={userData}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                afterSave={newData => {
                    setUserData({ ...userData, ...newData });
                    setIsModalOpen(false);
                }}
            />
            <ContentHeader title={userData.name} />
            <ContentWrapper>
                <Cover src={userData.cover} />
                <AvatarWrapper>
                    <Avatar
                        url={userData.avatar}
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
                        {`@${userData.userName}`}
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
                        <span>{getFormattedDate(userData.dateJoined)}</span>
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
                    <div onClick={notImplemented}>
                        <span>Tweets & replies</span>
                    </div>
                    <div onClick={notImplemented}>
                        <span>Media</span>
                    </div>
                    <div onClick={notImplemented}>
                        <span>Likes</span>
                    </div>
                </ViewList>
                {isLoading || timelineData.length === 0 ? (
                    <Loading />
                ) : (
                    <Timeline timelineData={timelineData} />
                )}
            </ContentWrapper>
        </Container>
    );
}

export default UserProfile;
