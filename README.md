# Practise React

Ứng dụng React với hệ thống xác thực người dùng (Access Token & User Info).

## Công Nghệ

- React + Vite
- Axios + Interceptor
- React Router

## Cơ Chế Xác Thực

### Với thông tin user đăng nhập:

- Bạn cần lưu thông tin lại, để sử dụng ở các component khác nhau, vì Header cần hiển thị thông tin user đã đăng nhập
- **Mỗi lần F5 (refresh website), thông tin này sẽ bị mất.** Có cơ chế để lấy lại thông tin người dùng
- **Giải pháp:** Gọi API backend (truyền access token)

### Với access_token:

- Bạn lưu vào **local storage**
- **Mỗi lần F5 (refresh website), bạn không bị mất** thông tin token này
- Cấu hình để mỗi lần gọi API, sẽ **tự động truyền thêm token ở header**

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Cấu Trúc Dự Án

- `components/` - Các component (layout, todo, user)
- `pages/` - Login, Register, User, Book
- `services/` - API service & Axios Interceptor
- `style/` - CSS files
