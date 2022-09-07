import React, { Component } from "react";
import {withToggler} from "./HOCs/withToggler";


const Menu = (props) => {
    return (
        <div>
            <button onClick={props.toggle} >
            {props.on ? "Hide" : "Show"} Menu
            </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                    <ul>
                        <li><a href="#">Your Profile</a></li>
                        <li><a href="#">Your Repositories</a></li>
                        <li><a href="#">Your Stars</a></li>
                        <li><a href="#">Your Gists</a></li>
                        <li><a href="#">Your Page</a></li>
                    </ul>

            </nav>
        </div>
    )
}

const SuperChargedMenuComponent = withToggler(Menu, {defaultOnValue: true})
export default SuperChargedMenuComponent