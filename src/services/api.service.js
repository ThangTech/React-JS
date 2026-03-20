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
const deleteUser = (id) => {
       const url = `/api/v1/user/${id}`
       return axios.delete(url);
}
const fetchAllUser = () => {
       const url = "/api/v1/user?current=1&pageSize=1";
       return axios.get(url)
}
const handleUploadFile = (file, folder) => {
       const url = `/api/v1/file/upload`
       let config = {
              headers: {
                     "upload-type": folder,
                     "Content-Type": "multipart/form-data" 
              }
       }
       const bodyFormData = new FormData();
       bodyFormData.append("fileImg", file)

       return axios.post(url, bodyFormData, config)
}
const updateUserAvatar = (avatar, _id, fullName, phone) => {
       const url = "/api/v1/user";
       const data = {
              _id: _id,
              avatar: avatar,
              fullName: fullName,
              phone: phone
       }
       return axios.put(url, data)
}
export {createUser, updateUser, fetchAllUser, deleteUser, handleUploadFile, updateUserAvatar}