import UserForm from "../components/user/userForm";
import UserTable from "../components/user/userTable";
import "../style/user/userForm.css";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/api.service";
const UserPage = () => {
       const [dataUsers, setDataUsers] = useState([]);
       useEffect(() => {
              loadUser();
       }, []);
       const loadUser = async() => {
       const res = await fetchAllUser();
       setDataUsers(res.data)
  }
  return (
    <div className="user-form">
      <div>
              <UserForm loadUser={loadUser}/>
       </div>
      <div>
        <UserTable 
        dataUsers={dataUsers}
        loadUser={loadUser}/>
      </div>
</div>
  );
};
export default UserPage;
