# Business Rules

## Global List Rules

- Moi list screen phai co search, filter, tabs status neu object co status.
- Khi search/filter/tab thay doi, reset page ve 1.
- Count tren tab phai tinh tu data sau moi transition.
- Pagination range dung format `Hiển thị x-y / total`.
- Neu khong co row, hien `Không có dữ liệu`.
- Action column chi hien action hop le theo status hien tai.

## Navigation Rules

- `signin` la route cong khai trong prototype.
- Admin shell dung `Sidebar`.
- Doanh nghiep shell dung `SidebarDN`.
- Detail Mini App can luu `prevScreen` de back ve dung nguon.
- Detail doanh nghiep can luu `dnBackScreen`.
- Detail thanh vien can luu `devBackScreen`.

## Status Badge Rules

Nhom success:

- `Hoạt động`
- `Đã xuất bản`
- `Published`
- `Đang phát hành`
- `Đã hoàn thành`

Nhom warning:

- `Chờ duyệt`
- `Bản nháp`
- `Draft`
- `Nháp`
- `Chờ xử lý`
- `Đang xử lý`

Nhom danger:

- `Từ chối`
- Loi API, loi upload, loi OAuth2, loi timeout.

Nhom neutral:

- `Tạm khóa`
- `Ngừng hoạt động`
- `Tạm ẩn`

## Doanh Nghiep Rules

- Doanh nghiep `Chờ duyệt` co the duoc admin `Duyệt`.
- Doanh nghiep `Hoạt động` co the `Tạm khóa` hoac `Ngừng`.
- Doanh nghiep `Tạm khóa` co the `Mở khóa` hoac `Ngừng`.
- Doanh nghiep `Ngừng hoạt động` khong hien action thay doi trong prototype.
- Search doanh nghiep nen match ten, MST, email, nguoi dai dien.
- Khi chuyen status, cap nhat count tab va KPI lien quan.
- San pham that nen bat buoc nhap ly do khi tu choi/khoa/ngung.

## Mini App Rules Cho Admin

- Admin co the xem moi Mini App.
- Mini App `Chờ duyệt` co action `Duyệt` va `Từ chối`.
- Mini App `Đã xuất bản` co action `Tạm ẩn`.
- Mini App `Tạm ẩn` co action `Khôi phục`.
- Mini App `Bản nháp` va `Từ chối` trong admin list chu yeu de xem/kiem tra.
- Filter Mini App admin gom danh muc va doanh nghiep.
- Search Mini App admin match ten Mini App.

## Mini App Rules Cho Doanh Nghiep

- Doanh nghiep chi quan ly Mini App cua minh.
- `+ Tạo Mini App` bat dau wizard tao moi.
- Mini App `Bản nháp` co action: Xem, Chinh sua, Gui duyet, Xoa.
- Mini App `Chờ duyệt` co action: Xem, Rut yeu cau.
- Mini App `Từ chối` co action: Xem ly do, Chinh sua, Gui lai.
- Mini App `Đã xuất bản` co action: Xem, Upload Version.
- Mini App `Đã xuất bản` chi co action `Thu hồi` khi `donViSuDung === 0`.
- Xoa chi nen cho phep voi `Bản nháp` va khi chua co phu thuoc.

## Create Mini App Rules

- Ten Mini App la bat buoc.
- Danh muc la bat buoc.
- Logo la bat buoc theo UI label.
- Banner va anh gioi thieu la thong tin marketplace nen co.
- Preview phai cap nhat theo form input.
- Step 2 mac dinh chua co selection.
- Khong duoc hien card selected neu user chua chon.
- Nut tiep tuc cua Step 2 chi enabled khi `method != null`.
- Neu `method = template`, flow tiep theo la chon template marketplace.
- Neu `method = self_build`, flow tiep theo la cau hinh/upload web bundle.

## Don Vi Su Dung Rules

- Don vi co status `Hoạt động`, `Tạm khóa`, `Ngừng hoạt động`.
- Khi tam khoa don vi, tat ca Mini App da cai cua don vi nen tam ngung trong backend that.
- Khi kich hoat lai, Mini App tiep tuc hoat dong neu version va license hop le.
- Filter gom loai don vi, tinh thanh, Mini App da cai, trang thai.
- Chi tiet don vi phai hien danh sach Mini App da cai va lich su cai dat.

## API Rules

- API status gom `Published` va `Draft`.
- `Draft` khong nen duoc dung boi Mini App production.
- API `Published` can co method, endpoint, version va tai lieu.
- Search API match ten API hoac endpoint.
- Filter method gom `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.
- Tao/sua version API nen yeu cau version va tai lieu OpenAPI/Swagger neu publish.
- API detail phai cho biet Mini App nao dang su dung API.

## Template Rules

- Template status gom `draft` va `published`.
- `published` hien label `Đang phát hành`.
- `draft` hien label `Nháp`.
- Template builder co 2 buoc: thong tin va thiet ke.
- Man hinh template co loai: Dashboard, List, Detail, Form.
- Moi loai man hinh co component mac dinh khac nhau.
- Luu nhap tao template `draft`.
- Phat hanh tao template `published`.
- Xoa template nen bi chan neu da co Mini App production phu thuoc trong san pham that.

## Ho Tro Rules

- Ticket co muc do `Cao`, `Trung bình`, `Thấp`.
- Ticket co status `Chờ xử lý`, `Đang xử lý`, `Đã hoàn thành`.
- Uu tien xu ly ticket `Cao` va `Chờ xử lý`.
- Search ticket match tieu de.
- Filter gom doanh nghiep, muc do, trang thai.

## Quan Ly He Thong Rules

- Thay doi bao mat/notification nen co audit log.
- 2FA la toggle rieng.
- Mat khau toi thieu va thoi gian phien la number input.
- Nhat ky he thong can pagination.
- Sao luu can lich sao luu ro rang.
