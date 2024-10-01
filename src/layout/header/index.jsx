import React, { useState } from "react";
// import "./header.scss";
import { Icon } from "@shared/icon";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <header className="container  bg-primary-light  dark:bg-primary-dark  dark:text-primary-dark">
            header
        </header>
    );
};

export default Header;
