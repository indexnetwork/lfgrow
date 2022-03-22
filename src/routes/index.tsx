import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import CreateIndex from "../pages/CreateIndex";
import IndexDetails from "../pages/IndexDetails";
import MyIndexes from "../pages/MyIndexes";

const AppRoutes = () => (
	<Switch>
		<Route path="/" exact component={Landing} />
		<Route path="/home" exact component={Home} />
		<Route path="/create" exact component={CreateIndex} />
		<Route path="/my-indexes" exact component={MyIndexes} />
		<Route path="/indexes/:indexId" exact component={IndexDetails} />
		<Redirect to="/" />
	</Switch>
);

export default AppRoutes;
