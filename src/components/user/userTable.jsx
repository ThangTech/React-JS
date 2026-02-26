import { Table} from "antd";
import { fetchAllUser } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
       {_id: "thang", fullName: 21, email: "ok"},
       {_id: "name", fullName: 21, email: "hcm"}
]);
       useEffect(() => {
              console.log("run effect")
              loadUser();
       }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    }
  ];
  const loadUser = async() => {
       const res = await fetchAllUser();
       setDataUsers(res.data)
  }
  console.log(">> run render 111")

       return(
       <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
);

};
export default UserTable;
