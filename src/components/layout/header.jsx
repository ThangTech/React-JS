// import "../../style/layout/header.css"
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { Link, NavLink } from "react-router"; //Link de chuyen huong giua cac trang khac nhau ma khong can tai lai trang
//NavLink de biet duoc trang nao dang duoc chon và co the them class active
const Header = () => {
  const [current, setCurrent] = useState("");
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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
