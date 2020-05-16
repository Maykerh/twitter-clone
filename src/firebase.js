import * as firebase from "firebase/app";
import "firebase/database";
import _ from "lodash";

import { firebaseConfig } from "./firebaseConfig";

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

/**
 * Codigo extra para popular a base com os dados iniciais
 * Faz um reload da página ao abrir a primeira vez caso não tenha os dados do usuario na base
 * Não estaria aqui em uma aplicação real :P
 */
const initialData = {
    fakeTimeline: {
        "0": {
            comments: 5,
            date: 1589506297563,
            description:
                "Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in",
            likes: 100,
            name: "Mayke",
            retweets: 10,
            userName: "@Mayke",
        },
        "1": {
            date: 1589506297563,
            description:
                "In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. ",
            name: "Ze",
            userName: "@Ze",
        },
        "2": {
            comments: 2000,
            date: 1589506297563,
            description:
                "Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever.",
            likes: 1000000,
            name: "Mutley",
            retweets: 10000,
            userName: "@Mutley",
        },
        "3": {
            date: 1589506297563,
            description:
                "[2] In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. ",
            name: "Ze",
            userName: "@Ze",
        },
        "4": {
            comments: 2000,
            date: 1589506297563,
            description:
                "Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever.",
            likes: 1000000,
            name: "Mutley",
            retweets: 10000,
            userName: "@Mutley",
        },
        "5": {
            comments: 2000,
            date: 1589506297563,
            description:
                "Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever.",
            likes: 1000000,
            name: "Mutley",
            retweets: 10000,
            userName: "@Mutley",
        },
        "6": {
            comments: 2000,
            date: 1589506297563,
            description:
                "Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever.",
            likes: 1000000,
            name: "Mutley",
            retweets: 10000,
            userName: "@Mutley",
        },
    },
    tweets: [
        {
            "-M7PQXLwstsxfd_ZAWSk": {
                comments: 0,
                date: 1589581326742,
                description: "My first tweet",
                likes: 0,
                name: "Ivan Moody",
                retweets: 0,
                userName: "ivan_moody",
            },
        },
    ],
    users: [
        {
            avatar: "",
            cover: "",
            dateJoined: 1589506297563,
            description: "A cool guy",
            followers: 10,
            following: 5,
            location: "Joinville - SC",
            name: "Ivan Moody",
            tweets: 1,
            userName: "ivan_moody",
        },
    ],
};

db.ref(`/users`)
    .once("value")
    .then(snapshot => {
        const users = snapshot.val();

        if (_.toArray(users).length === 0) {
            db.ref("/")
                .set(initialData)
                .then(() => {
                    window.location.reload();
                });
        }
    });
