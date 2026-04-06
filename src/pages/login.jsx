import {
  Input,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Divider,
  notification,
  message,
} from "antd";
import { AntDesignOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../services/api.service";
import { useState } from "react";
const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    setIsLoading(true)
    const res = await LoginApi(values.email, values.password)
    if(res.data){
       message.success("Đăng nhập thành công")
       navigate("/")
    }
    else{
       notification.error({
              message: "Đăng nhập thất bại",
              description: JSON.stringify(res.message)
       })
    }
    setIsLoading(false)
  };
  return (
    <>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        //       onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[16, 16]} justify={"center"}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              layout="vertical"
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Email invalid!",
                },
                {
                  required: true,
                  message: "Email không dc để trống",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              layout="vertical"
              label="Password"
              name="password"
              rules={[
              //   {
              //     pattern: new RegExp(
              //       "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,16}$",
              //     ),
              //     message: "Password invalid!",
              //   },
                {
                     required: true,
                     message: "Password không dc để trống"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item>
              <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
                Login
              </Button>
            </Form.Item>
            <div>
              <Link to={"/"}>
                Go to the homepage
                <ArrowRightOutlined />{" "}
              </Link>
            </div>
          </Col>
        </Row>
      </Form>
      <Divider />
      <div>
        Chưa có tài khoản <Link to={"/register"}>đăng ký tại đây</Link>
      </div>
    </>
  );
};
export default LoginPage;
