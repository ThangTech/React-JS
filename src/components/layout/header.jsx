// import "../../style/layout/header.css"
import { Button, Menu, message } from "antd";
import { UserOutlined, HomeOutlined, BookOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router"; //Link de chuyen huong giua cac trang khac nhau ma khong can tai lai trang
import { AuthContext } from "../context/auth.context";
import { logOutApi } from "../../services/api.service";
//NavLink de biet duoc trang nao dang duoc chon và co the them class active
const Header = () => {
  const [current, setCurrent] = useState("");

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleLogout = async () => {
    const res = await logOutApi();
    if (res.data) {
      localStorage.removeItem("token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Đăng xuất thành công");
      navigate("/")
    }
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
      // có user
      {user.id && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "400px",
            margin: "10px 20px",
          }}
        >
          Chào mừng {user.fullName}{" "}
        </div>
      )}
      {!user.id ? (
        <Button
          type="primary"
          style={{
            position: "absolute",
            top: "0",
            right: "100px",
            margin: "10px 20px",
          }}
        >
          <Link to={"/login"}>Login</Link>
        </Button>
      ) : (
        <Button
          type="primary"
          style={{
            position: "absolute",
            top: "0",
            right: "100px",
            margin: "10px 20px",
          }}
          onClick={handleLogout}
        >
          <span>Logout</span>
        </Button>
      )}
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
