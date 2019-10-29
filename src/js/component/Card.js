import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = () => (
	<div className="text-center mt-5">
		<h1>I am a card</h1>
	</div>
);
