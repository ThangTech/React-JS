# Component
`Component` là một khối code.
Nó được định nghĩa bằng việc kết hợp HTML, CSS và Javascript.
Mục đích của `component` giúp tái sử dụng code.
Tên của một `component` bắt buộc bắt đầu bằng chữ in hoa.

## Định nghĩa một `component`
```js
const MyComponent = () => {
       return (
              <div>Đây là một component tự tạo</div>
       );
}
// Và sử dụng nó
<MyComponent></MyComponent>
//Nếu component không bắt đầu bằng chữ in hoa thì sẽ không chạy được.
```

