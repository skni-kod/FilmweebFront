import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "../../interfaces/navLinks";
import logo from "../../assets/images/logo.png";
import "./footer.scss";

const Footer: React.FC = () => {
    const navLinks: NavLink[] = [
        { id: 1, name: "Filmy", path: "/" },
        { id: 2, name: "Seriale", path: "/" },
        { id: 3, name: "Ranking", path: "/" },
    ];
    return (
        <footer>
            <a href="#" className="logo">
                <img src={logo} />
                <h2>
                    Film<span className="yellow">weeb</span>
                </h2>
            </a>
            <div className="footer-links">
                {navLinks.map((link) => (
                    <Link className="link" key={link.id} to={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="credentials">
                Wszystkie prawa zastrzeżone &copy;2023 SKNI Kod
            </div>
        </footer>
    );
};

export default Footer;
