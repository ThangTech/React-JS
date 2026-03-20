import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatar } from "../../services/api.service";
const ViewModal = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } = props;
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const handleOnChangeFile = () => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0];
        if(file){
              setSelectedFile(file)
              setPreview(URL.createObjectURL(file))
        } 
    }
   const handleUpdateUserAvatar = async () => {
       //step 1: upload file
       const res = await handleUploadFile(selectedFile, "avatar");
       if(res.data){
              const newAvatar = res.data.fileUploaded;
              const resAvatar = await updateUserAvatar( newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
              if(resAvatar.data){
                   setIsDetailOpen(false);
                   setSelectedFile(null);
                   setPreview(null)
                   await loadUser();
                   notification.success({
                     message: "Success upload",
                     description: "Cap nhat thanh cong"
              })    
              }
              else{
                    notification.error({
                     message: "Error update avatar",
                     description: JSON.stringify(resAvatar.message)
              })  
              }
       }
       else{
              notification.error({
                     message: "Error upload",
                     description: JSON.stringify(res.message)
              })

       }

       //step 2: update user
   }
  return (
    <>
      <Drawer
        width={"40vw"}
        title="Chi tiết user"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => {
             setDataDetail(null)
             setIsDetailOpen(false) 
        }}
        open={isDetailOpen}
      >
        {dataDetail ? <>
        <p>Id : {dataDetail._id}</p>
        <br />
        <p>Name: {dataDetail.fullName}</p>
        <br />
        <p>Email: {dataDetail.email}</p>
        <br />
        <p>Phone: {dataDetail.phone}</p>
        <br />
        <p>Avatar:</p>
        <div>
             <img 
             height={200} width={300}
             src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>

        </div>
        <div>
              <label htmlFor="btnUpload" style={{padding: "5px", backgroundColor: "green", borderRadius: "50px", color: "white", cursor: "pointer"}}>Upload Avatar</label>
              <input type="file" hidden id="btnUpload" 
              onChange={(event) => handleOnChangeFile(event)}/>
        </div>
        {preview &&
       <>
        <div>
             <img 
             height={200} width={300}
             src={preview}/>
             <Button type="primary" style={{display: "block"}} onClick={() => handleUpdateUserAvatar()}>Save</Button>
        </div>
        </>
       }
        {/* <Button type="primary">Upload Image</Button> */}
        </> : <p>Some thing went wrong...</p>}
      </Drawer>
    </>
  );
};

export default ViewModal;
