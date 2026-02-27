import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUser } from "../../services/api.service";
import { Modal } from 'antd';
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = async() => {
       setIsModalOpen(true)
       const res = await createUser(fullName, email, password, phone);
       if(res.data){
              notification.success({
              message: "create user",
              description: "create user success"
              })
              setIsModalOpen(false)       
       }
       else{
             notification.error({
              message: "Error create user",
              description: JSON.stringify(res.message)
             }) 
       }


  }
  return (
    <div>
       <div style={{display: "flex", justifyContent: "space-between"}}>
              <h3>Table users</h3>
              <Button type="primary"
              onClick={() => {setIsModalOpen(true)}}
              >Create user</Button>
       </div>
        <Modal
        title="Create user"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => {setIsModalOpen(false)}}
        maskClosable={false}
        okText={"Create"}
      >
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
      </Modal>
</div>
  );
};
export default UserForm;
