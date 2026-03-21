import UserForm from "../components/user/userForm";
import UserTable from "../components/user/userTable";
import "../style/user/userForm.css";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/api.service";
const UserPage = () => {
       const [dataUsers, setDataUsers] = useState([]);
       const [current, setCurrent] = useState(1);
       const [pageSize, setPageSize] = useState(10);
       const [total, setTotal] = useState(0);
       useEffect(() => {
              loadUser();
       }, [current, pageSize]);
       const loadUser = async() => {
       const res = await fetchAllUser(current, pageSize);
       if(res.data){

              setDataUsers(res.data.result)
              setCurrent(res.data.meta.current);
              setPageSize(res.data.meta.pageSize);
              setTotal(res.data.meta.total)
       }
  }
  return (
    <div className="user-form">
      <div>
              <UserForm loadUser={loadUser}/>
       </div>
      <div>
        <UserTable 
        dataUsers={dataUsers}
        loadUser={loadUser}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        />
      </div>
</div>
  );
};
export default UserPage;
