import "../../style/layout/header.css"

const Header = () => {
  return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/user">Users</a>
        </li>
        <li>
          <a href="/product">Products</a>
        </li>
      </ul>
  );
};
export default Header