import "../../style/layout/header.css"
import {Link, NavLink} from "react-router"; //Link de chuyen huong giua cac trang khac nhau ma khong can tai lai trang
//NavLink de biet duoc trang nao dang duoc chon và co the them class active
const Header = () => {
  return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">Users</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
      </ul>
  );
};
export default Header