// import "../../style/layout/header.css"
import { Button, Menu } from "antd";
import { UserOutlined, HomeOutlined, BookOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; //Link de chuyen huong giua cac trang khac nhau ma khong can tai lai trang
import { AuthContext } from "../context/auth.context";
//NavLink de biet duoc trang nao dang duoc chon và co the them class active
const Header = () => {
  const [current, setCurrent] = useState("");
  
  const {user} = useContext(AuthContext);
  console.log(user)

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/user"}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/book"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
  ];
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Button type="primary" style={{position: "absolute", top: "0", right: "0", margin: "10px 20px"}}>
              <Link to={"/register"}>Register</Link>
      </Button>
      <Button type="primary" style={{position: "absolute", top: "0", right: "100px", margin: "10px 20px"}}>
              <Link to={"/login"}>Login</Link>
      </Button>
    </div>
    //       <ul>
    //         <li>
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/user">Users</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/book">Books</NavLink>
    //         </li>
    //       </ul>
  );
};
export default Header;
