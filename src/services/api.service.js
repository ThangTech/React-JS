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
const updateUser = (_id, fullName, phone) => {
       const url = "/api/v1/user";
       const data = {
              _id: _id,
              fullName: fullName,
              phone: phone
       }
       return axios.put(url, data)
}
const fetchAllUser = () => {
       const url = "/api/v1/user";
       return axios.get(url)
}
export {createUser, updateUser, fetchAllUser}