import React from "react";
import { Switch, Route } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout";

import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";

export default function Routes() {
    return (
        <Switch>
            <DefaultLayout>
                <Route path="/" exact component={Home} />
                <Route path="/user-profile" component={UserProfile} />
            </DefaultLayout>
        </Switch>
    );
}
