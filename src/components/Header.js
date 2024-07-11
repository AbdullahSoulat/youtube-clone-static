import React from "react";
import menuSVG from "../images/icons/menu.svg"
import logoSVG from "../images/icons/logo .svg"
import searchSVG from "../images/icons/search.svg"
import voiceSVG from "../images/icons/voice.svg"
import threeDotSVG from "../images/icons/three-dots.svg"
import signInSVG from "../images/icons/sign-in.svg"

export default function Header() {
    return (
        <header>
            <div className="menu-logo">
                <img src={menuSVG} alt="menu icon" />
                <img src={logoSVG} alt="logo icon" />
            </div>
            <div>
                <img src={searchSVG} alt="search icon" />
                <img src={voiceSVG} alt="voice search icon" />
            </div>
            <div>
                <img src={threeDotSVG} alt="three dot icon" />
                <img src={signInSVG} alt="sign in button" />
            </div>
        </header>
    )
}