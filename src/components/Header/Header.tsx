import "./Header.css";
import React from "react";

interface HeaderProps {}

function Header({}: HeaderProps) {
    return (
        <div className="Header">
            <h3>Today is... 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default React.memo(Header);
