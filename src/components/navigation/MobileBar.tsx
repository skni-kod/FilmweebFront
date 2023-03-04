import ranking from "../../assets/images/ranking.png";
import likes from "../../assets/images/likes.png";
import trending from "../../assets/images/trending.png";
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const MobileBar: React.FC = () => {
    return (
        <div className="mobile-bar">
            <Link to="/">
                <img src={user} alt="" />
            </Link>
            <Link to="/">
                <img src={trending} alt="" />
            </Link>
            <Link to="/">
                <img src={likes} alt="" />
            </Link>
            <Link to="/">
                <img src={ranking} alt="" />
            </Link>
        </div>
    );
};

export default MobileBar;
