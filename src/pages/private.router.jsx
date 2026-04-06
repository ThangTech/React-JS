import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate, Link} from "react-router-dom";
import { Result, Button } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>;
  }
  return (
    <>
      <Result
        status="403"
        title="Oops"
        subTitle={"Bạn cần đăng nhập"}
        extra={
          <Button type="primary">
            <Link to={"/"}>Back Home</Link>
          </Button>
        }
      />
    </>
  );
};
export default PrivateRoute;
