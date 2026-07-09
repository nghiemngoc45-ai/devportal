# Business Workflows

## 1. Dang Nhap Theo Role

Trigger:

- User submit form dang nhap hoac click demo role.

Flow:

1. Neu submit form hoac chon Quan tri vien: vao `dashboard`.
2. Neu chon Doanh nghiep: vao `dnDashboard`.
3. Neu chon Nhan vien: hien nhu lua chon demo/placeholder neu chua co portal nhan vien.

Output:

- Khoi tao shell dung role.

## 2. Admin Duyet Doanh Nghiep

Actor: Quan tri vien.

Flow:

1. Mo `doanhNghiep`.
2. Loc tab `Chờ duyệt`.
3. Chon action `Duyệt`.
4. Trang thai doanh nghiep chuyen sang `Hoạt động`.
5. Count tren status tabs va KPI duoc tinh lai.
6. Page reset ve 1.

Alternative:

- Action `Từ chối` trong prototype hien tai giu ve `Chờ duyệt`; khi lam san pham that nen tao status `Từ chối` rieng hoac bat buoc nhap ly do tu choi.

## 3. Admin Khoa/Mo Khoa/Ngung Doanh Nghiep

Actor: Quan tri vien.

Flow khoa:

1. Doanh nghiep dang `Hoạt động`.
2. Click `Tạm khóa`.
3. Trang thai thanh `Tạm khóa`.

Flow mo khoa:

1. Doanh nghiep dang `Tạm khóa`.
2. Click `Mở khóa`.
3. Trang thai thanh `Hoạt động`.

Flow ngung:

1. Doanh nghiep dang `Hoạt động` hoac `Tạm khóa`.
2. Click `Ngừng`.
3. Trang thai thanh `Ngừng hoạt động`.

Business note:

- He thong that nen kiem tra Mini App/API dang active truoc khi ngung doanh nghiep.
- Can ghi audit log cho moi transition.

## 4. Admin Duyet Mini App

Actor: Quan tri vien.

Flow:

1. Mo `miniApp`.
2. Loc tab `Chờ duyệt`.
3. Click `Duyệt`.
4. Mini App chuyen sang `Đã xuất bản`.
5. Marketplace co the hien thi Mini App neu backend publish thanh cong.

Alternative:

- Click `Từ chối` -> Mini App chuyen sang `Từ chối`.
- He thong that nen bat buoc nhap ly do tu choi va gui thong bao cho doanh nghiep.

## 5. Admin Tam An/Khoi Phuc Mini App

Flow tam an:

1. Mini App dang `Đã xuất bản`.
2. Admin click `Tạm ẩn`.
3. Trang thai thanh `Tạm ẩn`.
4. Mini App khong hien thi tren marketplace nhung lich su/version van duoc giu.

Flow khoi phuc:

1. Mini App dang `Tạm ẩn`.
2. Admin click `Khôi phục`.
3. Trang thai thanh `Đã xuất bản`.

## 6. Doanh Nghiep Tao Mini App

Actor: Doanh nghiep.

Entry:

- `dnMiniApp` -> click `+ Tạo Mini App`.

Step 1: `dnCreateMiniApp`

1. Nhap ten Mini App.
2. Chon danh muc.
3. Nhap mo ta.
4. Upload logo, banner, anh gioi thieu.
5. Chon tag ung dung.
6. Xem preview marketplace.
7. Click `Lưu nháp` de tao ban nhap, hoac `Tiếp tục` de sang step 2.

Step 2: `dnCreateMiniAppStep2`

1. Chon `Dùng Template` hoac `Tự Build`.
2. Khi chua chon, khong cho tiep tuc.
3. Khi chon template, chuyen sang man chon template neu duoc implement.
4. Khi chon tu build, chuyen sang cau hinh/upload bundle neu duoc implement.

State output:

- Mini App moi ban dau nen la `Bản nháp`.
- Sau khi submit review thi chuyen sang `Chờ duyệt`.

## 7. Doanh Nghiep Quan Ly Mini App Cua Minh

Actor: Doanh nghiep.

Flow gui duyet:

1. Mini App dang `Bản nháp`.
2. Click `Gửi duyệt`.
3. Trang thai thanh `Chờ duyệt`.

Flow rut yeu cau:

1. Mini App dang `Chờ duyệt`.
2. Click `Rút yêu cầu`.
3. Trang thai thanh `Bản nháp`.

Flow gui lai:

1. Mini App dang `Từ chối`.
2. Doanh nghiep xem ly do, chinh sua.
3. Click `Gửi lại`.
4. Trang thai thanh `Chờ duyệt`.

Flow thu hoi:

1. Mini App dang `Đã xuất bản`.
2. Chi hien `Thu hồi` neu `donViSuDung === 0`.
3. Click `Thu hồi`.
4. Trang thai thanh `Bản nháp`.

Flow xoa:

1. Mini App dang `Bản nháp`.
2. Click `Xóa`.
3. Mini App bi xoa khoi list.

## 8. Don Vi Su Dung Tam Khoa Va Kich Hoat Lai

Actor: Quan tri vien.

Flow tam khoa:

1. Mo `chiTietDonViSuDung`.
2. Click tam khoa.
3. Xac nhan modal.
4. Don vi thanh `Tạm khóa`.
5. Cac Mini App cua don vi nen tam ngung hoat dong trong he thong that.

Flow kich hoat:

1. Don vi dang `Tạm khóa` hoac `Ngừng hoạt động`.
2. Click kich hoat lai.
3. Xac nhan modal.
4. Don vi thanh `Hoạt động`.

## 9. Quan Ly API Va Version

Actor: Quan tri vien.

Flow xem:

1. Mo `apiManagement`.
2. Search theo ten API hoac endpoint.
3. Filter method va status.
4. Click xem chi tiet.

Flow tai lieu:

1. Mo `chiTietAPI`.
2. Tab tai lieu API.
3. Them/sua tai lieu.
4. Luu metadata tai lieu.

Flow version:

1. Mo tab version API.
2. Tao version moi hoac sua version.
3. Co the upload tai lieu OpenAPI/Swagger.

Business note:

- API `Draft` khong nen cho Mini App production tich hop.
- API `Published` can co version, endpoint va tai lieu ro rang.

## 10. Template Builder

Actor: Quan tri vien.

Flow tao:

1. Mo `mauMiniApp`.
2. Click tao mau -> `trinhTaoMau`.
3. Nhap ten, danh muc, mo ta.
4. Sang buoc thiet ke.
5. Them man hinh template.
6. Chon loai man hinh: Dashboard, List, Detail, Form.
7. Tick component phu hop.
8. Luu nhap hoac phat hanh.

Output:

- Luu nhap tao template `draft`.
- Phat hanh tao template `published`.

## 11. Xu Ly Ho Tro

Actor: Quan tri vien/support.

Flow:

1. Mo `hoTro`.
2. Loc theo tab, doanh nghiep, muc do, trang thai.
3. Uu tien ticket `Cao` va `Chờ xử lý`.
4. Cap nhat trang thai tu `Chờ xử lý` -> `Đang xử lý` -> `Đã hoàn thành`.

Business note:

- Prototype hien tai chua co action transition truc tiep tren ticket, nhung status model da san sang cho backend workflow.
