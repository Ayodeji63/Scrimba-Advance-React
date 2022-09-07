import React, { Component } from "react";
import ThemeContext from "./themeContext";

function Header () {
        return (
            <ThemeContext>
                {mode => (
                    <header className={`${mode}-theme`}>
                    <h2>{mode} Theme</h2>
                   </header>
                )}
            </ThemeContext>
           
        )
    }


export default Header