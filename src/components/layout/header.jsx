import "../../style/layout/header.css"
import {Link} from "react-router"; //Link de chuyen huong giua cac trang khac nhau ma khong can tai lai trang
const Header = () => {
  return (
      <ul>
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
      </ul>
  );
};
export default Header