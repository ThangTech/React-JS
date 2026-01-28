import UserForm from "../components/user/userForm";
import UserTable from "../components/user/userTable";
import "../style/user/userForm.css";
const UserPage = () => {
  return (
    <div className="user-form">
      <div>
              <UserForm/>
       </div>
      <div>
        <UserTable />
      </div>
</div>
  );
};
export default UserPage;
