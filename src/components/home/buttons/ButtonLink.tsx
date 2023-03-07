import "./ButtonLink.scss";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
    path: string;
    text: string;
}

const ButtonLink = ({ path, text }: ButtonLinkProps) => {
    return (
        <div className="button-link-wrapper">
            <Link to={path} className="button-link">
                <span>{text}</span>
            </Link>
        </div>
    );
};

export default ButtonLink;
