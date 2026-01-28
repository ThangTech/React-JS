import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUser } from "../../services/api.service";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = async() => {
       const res = await createUser(fullName, email, password, phone);
       if(res.data){
              notification.success({
              message: "create user",
              description: "create user success"
       })
              console.log(res.data)
       }
  }
  return (
    <div>
      <div>
          <span>Full Name</span>
          <Input value={fullName}
          onChange={(event) => {setFullName(event.target.value)}}
           />
        </div>
        <div>
          <span>Email</span>
          <Input value={email}
          onChange={(event) => {setEmail(event.target.value)}}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password value={password}
          onChange={(event) => {setPassword(event.target.value)}}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input value={phone}
          onChange={(event) => {setPhone(event.target.value)}}
          />
        </div>
        <div>
              <Button type="primary"
              onClick={handleClick}
              >Create user</Button>
        </div>
</div>
  );
};
export default UserForm;
