import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Favorites from "./views/Favorites.js";
import Details from "./views/Details.js";

import Profile from "./views/Profile.js";
import EditProfile from "./views/EditProfile.js";
import Login from "./views/Login.js";
import Registration from "./views/Registration.js";
import Ratings from "./views/Ratings.js";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/favorites" component={Favorites} />
						<Route path="/details/:theid" component={Details} />
						<Route path="/profile" component={Profile} />

						<Route path="/editprofile" component={EditProfile} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Registration} />
						<Route path="/ratings" component={Ratings} />
						<Route path="/single/" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
