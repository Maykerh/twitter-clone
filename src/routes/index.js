import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";

export default function Routes() {
    return (
        <Switch>
            <Header>
                <Route path="/" exact component={Home} />
                <Route path="/user-profile" component={UserProfile} />
            </Header>
        </Switch>
    );
}
