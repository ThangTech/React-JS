import axios from "./axios.interceptor"

const createUser = (fullName, email, password, phone) => {
       const url = "/api/v1/user";
       const data = {
              fullName: fullName,
              email: email,
              password: password,
              phone: phone
       }
       return axios.post(url, data)
}
const updateUser = () => {

}
export {createUser, updateUser}