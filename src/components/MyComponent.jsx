import './style.css'


const MyComponent = () => {
       return (
              <>
              <div style={{fontStyle: "italic"}}>Đây là một component tự tạo</div>
              <div className='text'>Sử dụng fragment giúp tránh render thừa html</div>
              </>
       );
}
export default MyComponent;