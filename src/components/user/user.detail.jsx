import { Drawer } from "antd";

const ViewModal = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <>
      <Drawer
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
        </> : <p>Some thing went wrong...</p>}
      </Drawer>
    </>
  );
};

export default ViewModal;
