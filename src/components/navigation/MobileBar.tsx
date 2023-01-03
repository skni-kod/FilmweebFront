import ranking from "../../assets/images/ranking.png";
import likes from "../../assets/images/likes.png";
import trending from "../../assets/images/trending.png";
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const MobileBar: React.FC = () => {
  return (
    <div className="mobile-bar">
      <Link to="/">
        <img src={user} />
      </Link>
      <Link to="/">
        <img src={trending} />
      </Link>
      <Link to="/">
        <img src={likes} />
      </Link>
      <Link to="/">
        <img src={ranking} />
      </Link>
    </div>
  );
};

export default MobileBar;
