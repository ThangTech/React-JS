import { useEffect, useState } from "react";
import { Input, Button, notification } from "antd";
import { Modal } from "antd";
import { updateUser } from "../../services/api.service";
const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const {isModalUpdate, setIsModalUpdate, dataUpdate, setDataUpdate, loadUser} = props;
  useEffect(() => {
    if(dataUpdate)
    {
       setFullName(dataUpdate.fullName);
       setId(dataUpdate._id);
       setPhone(dataUpdate.phone);
    }
  }, [dataUpdate])
  const handleSubmit = async () => { 
    setIsModalUpdate(true);
    const res = await updateUser(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "update user",
        description: "update user success",
      });
      resetModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetModal = () => {
    setIsModalUpdate(false);
    setFullName("");
    setId("");
    setPhone("");
    setDataUpdate(null)
  };
  return (
    <Modal
      title="Update user"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdate}
      onOk={handleSubmit}
      onCancel={resetModal}
      maskClosable={false}
      okText={"Save"}
    >
       <div>
        <span>Id</span>
        <Input
          value={id}
          disabled
        />
      </div>
      <div>
        <span>Full Name</span>
        <Input
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Phone number</span>
        <Input
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
