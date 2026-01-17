import './style.css'


const MyComponent = () => {
       const name = "Thang";
       const age = 21;
       return (
              <>
              <div style={{fontStyle: "italic"}}>Đây là một component tự tạo</div>
              <div className='text'>Sử dụng fragment giúp tránh render thừa html</div>
              <div>Tôi là {name} và tôi {age} tuổi {console.log("Chào mọi người!!!")}</div>
              </>
       );
}
export default MyComponent;