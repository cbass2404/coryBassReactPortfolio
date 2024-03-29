import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationContainer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", {
                withCredentials: true,
            })
            .then((res) => {
                if (res.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }
                return res.data;
            })
            .catch((error) => {
                console.log("Error signing out: ", error);
            });
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN"
                    ? dynamicLink("/portfolio-manager", "Portfolio Manager")
                    : null}
            </div>
            <div className="right-side">
                CORY BASS
                {props.loggedInStatus === "LOGGED_IN" ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default withRouter(NavigationContainer);
