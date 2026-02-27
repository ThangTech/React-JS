import { Table} from "antd";
import {EditOutlined, DeleteOutlined } from "@ant-design/icons"
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
const UserTable = (props) => {
  const {dataUsers, loadUser} = props;
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
              <>
                     <a href="#">{record._id}</a>
              </>
        )
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
       <div style={{display: "flex", gap: "20px"}}>
        <EditOutlined 
        style={{cursor: "pointer", color: "green"}}
        onClick={() => {
              setDataUpdate(record)
              setIsModalUpdate(true)
        }}
        
        />
        <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
       </div>
    ),
  },
  ];

       return(
       <>
              <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
              <UpdateUserModal
              isModalUpdate={isModalUpdate}
              setIsModalUpdate={setIsModalUpdate}
              dataUpdate={dataUpdate}
              setDataUpdate={setDataUpdate}
              loadUser={loadUser}
       />
       </>
);

};
export default UserTable;
