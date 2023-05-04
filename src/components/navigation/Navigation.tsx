import { Link } from "react-router-dom";
import "./Navigation.scss";
import enterImg from "../../assets/images/log-img.png";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

const Navigation: React.FC = () => {
    interface NavLink {
        id: number;
        name: string;
        path: string;
    }
    interface UserQuery {
        succces: boolean;
        data: Data;
        message: string;
    }

    interface Data {
        user: User;
    }

    interface User {
        created_at: string;
        email: string;
        id: number;
        name: string;
        updated_at: string;
    }

    const [screenWidth, setScreenWidth] = useState<number>();
    const queryClient = useQueryClient();
    const user: UserQuery | undefined = queryClient.getQueryData("login");
    console.log(user);

    const navLinks: NavLink[] = [
        { id: 1, name: "Filmy", path: "/" },
        { id: 2, name: "Seriale", path: "/" },
        { id: 3, name: "Ranking", path: "/" },
        { id: 4, name: user ? `Hej ${user.data.user.name}!` : "Zaloguj się", path: "/login" },
    ];

    const handleResize = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                    <h1>
                        Film<span className="yellow">weeb</span>
                    </h1>
                </Link>
                <input
                    className="search"
                    type="text"
                    name="serach"
                    id="search"
                    placeholder={
                        screenWidth && screenWidth < 765
                            ? "Pozwól nam pomóc :)"
                            : "Wyszukaj film, serial lub sławe kina ..."
                    }
                />
                <div className="links">
                    {navLinks.map((link) =>
                        link.name === "Zaloguj się" ? (
                            <Link className="link" key={link.id} to={link.path}>
                                {link.name}
                                <img src={enterImg} alt="" />
                            </Link>
                        ) : (
                            <Link className="link" key={link.id} to={link.path}>
                                {link.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};
export default Navigation;
