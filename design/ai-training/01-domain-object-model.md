# Domain Object Model

## Doanh Nghiep

Doanh nghiep la to chuc phat trien Mini App va goi API.

Truong chinh:

- `id`: khoa noi bo.
- `ten`: ten doanh nghiep.
- `mst`: ma so thue.
- `thanhVien`: so thanh vien/developer.
- `miniApp`: tong Mini App thuoc doanh nghiep.
- `daPublish`: so Mini App da phat hanh.
- `nguoiDung`: tong nguoi dung lien quan.
- `thamGia`: ngay tham gia portal.
- `lanCuoiHoatDong`: moc hoat dong gan nhat.
- `trangThai`: `Hoạt động`, `Chờ duyệt`, `Tạm khóa`, `Ngừng hoạt động`.
- `moTa`, `loaiHinh`, `website`, `nguoiDaiDien`, `email`, `sdt`, `diaChi`.

Quan he:

- Mot doanh nghiep co nhieu thanh vien.
- Mot doanh nghiep so huu nhieu Mini App.
- Mot doanh nghiep co the goi nhieu API thong qua Mini App.

## Thanh Vien / Developer

Thanh vien la nguoi thuoc doanh nghiep va tham gia phat trien/quan tri Mini App.

Truong chinh:

- `id`: ma thanh vien.
- `developerID`: ma developer.
- `ten`, `email`, `sdt`, `chucDanh`.
- `vaiTro`: vi du `Quản trị viên`, `Developer`, `Biên tập viên`, `Kiểm duyệt viên`.
- `thamGia`: ngay tham gia.
- `trangThaiTK`: trang thai tai khoan.
- `soDoanhNghiep`, `soMiniApp`, `soPublished`.

Quan he:

- Thanh vien co the thuoc mot hoac nhieu doanh nghiep.
- Thanh vien co the co vai tro khac nhau theo doanh nghiep/Mini App.

## Mini App

Mini App la ung dung nho duoc doanh nghiep phat trien va phat hanh len marketplace.

Truong chinh:

- `appId`: ma Mini App, vi du `APP-000001`.
- `ten`: ten Mini App.
- `doanhNghiep`: chu so huu.
- `danhMuc`: `Giáo dục`, `Tiện ích`, `Tài chính`, `Dịch vụ`.
- `phienBan`: version hien tai.
- `trangThai`: `Đã xuất bản`, `Chờ duyệt`, `Bản nháp`, `Từ chối`, `Tạm ẩn`.
- Theo ngu canh doanh nghiep: `donViSuDung`, `luotCaiDat`.

Quan he:

- Mini App thuoc mot doanh nghiep.
- Mini App co nhieu version.
- Mini App co the cai dat tai nhieu don vi su dung.
- Mini App co the su dung nhieu API.
- Mini App co the duoc tao tu Template.

## Don Vi Su Dung

Don vi su dung la truong, phong/so giao duc hoac to chuc da cai Mini App.

Truong chinh:

- `id`, `ten`, `maDonVi`.
- `loai`: `Trường THPT`, `Trường THCS`, `Trường Tiểu học`, `Sở GD&ĐT`, `Phòng GD&ĐT`.
- `tinhThanh`, `diaChi`.
- `nguoiDaiDien`, `email`, `dienThoai`.
- `ngayKichHoat`, `hanSuDung`.
- `miniApps`: danh sach ten Mini App da cai.
- `trangThai`: `Hoạt động`, `Tạm khóa`, `Ngừng hoạt động`.
- `nguoiDung`: so nguoi dung cua don vi.

Quan he:

- Mot don vi cai dat nhieu Mini App.
- Trang thai don vi anh huong den trang thai su dung Mini App da cai.

## API

API la dich vu duoc nen tang cung cap cho Mini App tich hop.

Truong chinh:

- `id`, `ten`.
- `method`: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.
- `endpoint`: duong dan API.
- `version`: version hien tai.
- `trangThai`: `Published`, `Draft`.

Quan he:

- API co nhieu phien ban.
- API co nhieu tai lieu.
- API duoc nhieu Mini App su dung.
- API co monitoring: request count, error rate, latency, uptime.

## Template / Mau Mini App

Template la bo mau tao Mini App nhanh.

Truong chinh:

- `id`, `ten`.
- `loai`: `Giáo dục`, `Tài chính`, `Khảo sát`, `Truyền thông`, `Y tế`, `Thương mại`.
- `phienBan`.
- `miniApp`: so Mini App da dung template.
- `developer`: so developer/nguoi dung template.
- `capNhatCuoi`.
- `trangThai`: `published`, `draft`.
- `moTa`.
- `templateScreens`: danh sach man hinh mau, gom `name` va `loai`.

## Ho Tro

Ticket ho tro ghi nhan van de cua doanh nghiep/developer.

Truong chinh:

- `id`, `tieuDe`.
- `doanhNghiep`, `nguoiGui`.
- `mucDo`: `Cao`, `Trung bình`, `Thấp`.
- `trangThai`: `Chờ xử lý`, `Đang xử lý`, `Đã hoàn thành`.
- `ngayTao`.

## Bao Cao

Bao cao la file/xuat du lieu tong hop.

Truong chinh:

- `id`, `ten`.
- `thoiGian`.
- `dinhDang`: `Excel`, `PDF`.
- `ngayTao`.

## Cau Hinh He Thong

Cau hinh he thong gom thong tin co ban, bao mat, thong bao, nhat ky va sao luu:

- Ten he thong, email he thong, hotline.
- Mat khau toi thieu, thoi gian phien, 2FA, gioi han login.
- Email/push/system notification.
- Nhat ky hanh dong admin.
- Lich sao luu.
