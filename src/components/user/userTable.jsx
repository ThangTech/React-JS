import { notification, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewModal from "./user.detail";
import { deleteUser } from "../../services/api.service";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <>
            {index + 1}
          </>
        );
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <>
            <a
              href="#"
              onClick={() => {
                setDataDetail(record);
                setIsDetailOpen(true);
              }}
            >
              {record._id}
            </a>
          </>
        );
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "green" }}
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdate(true);
            }}
          />
          <Popconfirm
            title="Bạn muốn xóa người dùng"
            description="Chắc chắn muốn xóa"
            onConfirm={() => {
              handleDelete(record._id);
            }}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    if (res.data) {
      notification.success({
        message: "Xóa người dùng",
        description: "Xóa thành công",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Lỗi",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}
      pagination={
       {
              current: 1,
              pageSize: 10,
              showSizeChanger: true,
              total: total,
              showTotal: (total, range) => {
                     return (
                            <div>
                                   {range[0]}-{range[1]} trên {total} rpws
                            </div>
                     )
              }

       }
       
      }
      />
      <UpdateUserModal
        isModalUpdate={isModalUpdate}
        setIsModalUpdate={setIsModalUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewModal
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};
export default UserTable;
