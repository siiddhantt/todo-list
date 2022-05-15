import React from 'react'
import {FaGithub} from "react-icons/fa";

export default function Footer() {
    let footerStyle = {
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "30px",   /* Height of the footer */
        background: "#6cf"
    }
    return (
        <footer className="text-center text-muted text-decoration-none bg-dark " style={footerStyle}>
            <a href='https://github.com/siiddhantt'> <FaGithub/> siiddhantt</a>
        </footer>    
    )
}