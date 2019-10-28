import React from "react"
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
		super(props);

	}

    render(){
        return(
            <h1>This is the login modal</h1>
        )
    }
}