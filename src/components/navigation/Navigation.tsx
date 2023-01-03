import { Link } from "react-router-dom";
import "./navigation.scss";
import enterImg from "../../assets/images/log-img.png";
import { useEffect, useState } from "react";

const Navigation: React.FC = () => {
  interface navLinks {
    id: number;
    name: string;
    path: string;
  }

  const navLinks: navLinks[] = [
    { id: 1, name: "Filmy", path: "/" },
    { id: 2, name: "Seriale", path: "/" },
    { id: 3, name: "Ranking", path: "/" },
    { id: 4, name: "Zaloguj się", path: "/" },
  ];

  const [screenWidth, setScreenWidth] = useState<number>();
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
          <h1>
            Fill<span className="yellow">weeb</span>
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
                <img src={enterImg} />
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
