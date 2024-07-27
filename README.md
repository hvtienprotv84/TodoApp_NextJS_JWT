# TodoList - NextJS - JWT Authentication
- NextJS
- ReactJS
- JWT Authentication
- Redux
- React-Hot-Toast
- NextJS-Top-Loader
- MongoDB 
(Trong dự án này tôi đang sử dụng `MongoDB Atlas` trực tiếp trên Cloud của MongoDB không cần tải về máy hoặc 
cũng có thể dùng `MongoDB Compass` ở Desktop)
- Tailwind CSS

## Chức Năng

- Xác Thực Người Dùng (Đăng Ký, Đăng Nhập, Đăng Xuất)
- Quản Lý Task (Todo) (Xem, Thêm, Chỉnh Sửa, Xóa và gắn mác Task Quan Trọng)
- Khôi Phục Mật Khẩu (Quên mật khẩu)
- Responsive Website và Mobile

## Quy Trình Cài Đặt

1. Cài Đặt:

   ```bash
   pnpm install
   ```

   hoặc

   ```bash
   npm install
   ```

   hoặc

   ```bash
   yarn install
   ```

2. Thay đổi file `.env.example` thành `.env` :
   ```env
   DBURL=<your_mongodb_connection_string>
   SECRET_KEY=<your_secret_key>
   ```
22. : Cách tạo khóa `SECRET_KEY`. Mở `Terminal` lựa chọn `git bash` và chạy lệnh `openssl rand -base64 32`

3. Chạy Server (Start Server):

   ```bash
   pnpm run dev
   ```

   hoặc

   ```bash
   npm run dev
   ```

   hoặc

   ```bash
   yarn dev
   ```

4. Chạy với port: `http://localhost:3000`.

# RUN
- `npm install`
- `npm run dev`