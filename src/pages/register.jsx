import { Input, Button, Modal, Form, notification, Row, Col } from "antd";
import { registerUser } from "../services/api.service";
import { useNavigate } from "react-router";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    const res = await registerUser(
      values.username,
      values.email,
      values.password,
      values.phone,
    );
    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Đăng ký thành công",
      });
      navigate("/user");
    } else {
      notification.error({
        message: "error",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
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
            label="Full Name"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            layout="vertical"
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            layout="vertical"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            layout="vertical"
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                //   type: "regexp",
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item>
            <Button type="primary" onClick={() => form.submit()}>
              Register
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default RegisterPage;
