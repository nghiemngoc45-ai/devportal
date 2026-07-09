# Screen Catalog

## Sign In

Route: `signin`

Muc tieu:

- Dang nhap va demo nhanh theo role.

Thanh phan:

- Header co logo, ngon ngu, tro giup.
- Form email/password, remember me, forgot password, continue.
- Demo role: Quan tri vien -> `dashboard`, Doanh nghiep -> `dnDashboard`, Nhan vien placeholder.

## Admin Dashboard

Route: `dashboard`

Panel:

- KPI overview: Doanh nghiep, Developer, Mini App, Nguoi dung.
- Canh bao can xu ly: Mini App cho kiem duyet, Doanh nghiep cho phe duyet, Developer cho xac minh.
- Chart tang truong theo thang voi series Mini App, Doanh nghiep, Developer.
- Top 5 Mini App.
- Hoat dong gan day.

State:

- Toggle hien/an tung series chart.

## Doanh Nghiep List

Route: `doanhNghiep`

Panel:

- KPI cards theo tong doanh nghiep, dang hoat dong, cho duyet, tam khoa/ngung.
- Search theo ten/MST/email.
- Tabs: Tat ca, Cho duyet, Hoat dong, Tam khoa, Ngung hoat dong.
- Table: doanh nghiep, MST, quy mo, nguoi dung, lan hoat dong, trang thai, thao tac.
- Pagination.

Actions:

- Xem -> `chiTietDoanhNghiep`.
- Hoat dong -> Tam khoa, Ngung.
- Cho duyet -> Duyet, Tu choi.
- Tam khoa -> Mo khoa, Ngung.

## Chi Tiet Doanh Nghiep

Route: `chiTietDoanhNghiep`

Panel:

- Header thong tin doanh nghiep.
- Tabs: Tong quan, Mini App, Hoat dong.
- Thong tin phap ly/lien he.
- Danh sach thanh vien.
- Danh sach Mini App cua doanh nghiep.
- Activity log.

Navigation:

- Back ve danh sach nguon.
- Mo thanh vien -> `chiTietThanhVien`.
- Mo Mini App -> `chiTietMiniApp`.

## Chi Tiet Thanh Vien

Route: `chiTietThanhVien`

Panel:

- Profile thanh vien/developer.
- Cac doanh nghiep lien quan.
- Cac Mini App lien quan.
- Hoat dong gan day.

Navigation:

- Back ve man nguon.
- Mo doanh nghiep -> `chiTietDoanhNghiep`.
- Mo Mini App -> `chiTietMiniApp`.

## Admin Mini App List

Route: `miniApp`

Panel:

- KPI: Tong Mini App, Published, Cho duyet, Draft.
- Search theo ten Mini App.
- Filter danh muc va doanh nghiep.
- Tabs: Tat ca, Published, Cho duyet, Draft, Tu choi, Tam an.
- Table: Mini App, doanh nghiep, danh muc, version, trang thai, thao tac.

Actions:

- Xem -> `chiTietMiniApp`.
- Cho duyet -> Duyet thanh `Đã xuất bản` hoac Tu choi thanh `Từ chối`.
- Da xuat ban -> Tam an.
- Tam an -> Khoi phuc thanh `Đã xuất bản`.

## Chi Tiet Mini App

Route: `chiTietMiniApp`

Panel:

- Header thong tin Mini App, doanh nghiep, version, trang thai.
- Tabs chi tiet nhu tong quan, version, thanh vien, API, don vi su dung, hoat dong.
- Co the mo tu nhieu nguon: Admin Mini App, DN Mini App, chi tiet doanh nghiep, chi tiet thanh vien, chi tiet API.

Navigation:

- Back ve `prevScreen` da luu khi mo chi tiet.

## Enterprise Dashboard

Route: `dnDashboard`

Panel:

- KPI: Mini App, API, Don vi su dung, Nguoi dung, API Calls hom nay.
- Mini App duoc cai nhieu nhat.
- Canh bao version chua cap nhat.
- Bang phien ban Mini App.
- API su dung nhieu nhat, API loi nhieu nhat.
- Hoat dong gan day va viec can xu ly.

## Enterprise Mini App List

Route: `dnMiniApp`

Panel:

- Header `Mini App`, subtitle quan ly Mini App cua doanh nghiep.
- CTA `+ Tạo Mini App` -> `dnCreateMiniApp`.
- KPI: Mini App, Business API, Don vi su dung, Luot cai dat.
- Search theo ten Mini App.
- Filter danh muc.
- Tabs: Tat ca, Published, Cho duyet, Draft, Tu choi.
- Table: Mini App, version, don vi su dung, trang thai, thao tac.

Actions:

- Da xuat ban -> Xem, Upload Version, Thu hoi neu `donViSuDung === 0`.
- Ban nhap -> Xem, Chinh sua, Gui duyet, Xoa.
- Tu choi -> Xem ly do, Chinh sua, Gui lai.
- Cho duyet -> Xem, Rut yeu cau.

## Create Mini App Step 1

Route: `dnCreateMiniApp`

Muc tieu:

- Nhap thong tin co ban va thong tin marketplace.

Panel:

- Stepper tao Mini App.
- Form: ten Mini App, danh muc, mo ta.
- Upload logo, banner, anh gioi thieu.
- Tags ung dung.
- Preview marketplace sticky.
- Luu nhap va Tiep tuc.

State:

- Preview cap nhat theo name/category/description.
- Tiep tuc -> `dnCreateMiniAppStep2`.

## Create Mini App Step 2

Route: `dnCreateMiniAppStep2`

Muc tieu:

- Chon cach tao Mini App.

Lua chon:

- `template`: dung template marketplace.
- `self_build`: doanh nghiep tu build va upload web bundle.

Rule:

- Mac dinh chua chon phuong thuc.
- Nut tiep tuc chi kha dung khi da chon phuong thuc.
- Card duoc chon moi co visual selected.

## Don Vi Su Dung List

Route: `donViSuDung`

Panel:

- KPI don vi, nguoi dung, Mini App da cai, Mini App/don vi.
- Search theo ten don vi.
- Filter loai don vi, tinh thanh, Mini App, trang thai.
- Table don vi va thao tac xem chi tiet.

## Chi Tiet Don Vi Su Dung

Route: `chiTietDonViSuDung`

Panel:

- Header thong tin don vi.
- Tabs: thong tin tong quan, Mini App da cai dat, lich su cai dat.
- Search/filter Mini App da cai.
- Modal tam khoa va kich hoat lai.

Actions:

- Tam khoa don vi.
- Kich hoat lai don vi.

## API Management

Route: `apiManagement`

Panel:

- CTA Import OpenAPI/Swagger.
- CTA them API.
- KPI tong API, Published, Draft.
- Search theo ten API hoac endpoint.
- Filter HTTP method.
- Tabs: Tat ca, Published, Draft.
- Table API, method, endpoint, version, trang thai, thao tac.

## Chi Tiet API

Route: `chiTietAPI`

Panel:

- Breadcrumb API Management / Chi tiet API.
- Header API, method, endpoint, version, status.
- Tabs: thong tin API, version API, tai lieu API, Mini App su dung API.
- Modal them/sua tai lieu API.
- Drawer/modal tao/sua version API.

## API Monitoring

Route: `apiMonitoring`

Panel:

- KPI API dang su dung, doanh nghiep goi API, Mini App goi API, request/error/latency.
- Chart theo doi request va error.
- Top API co request nhieu nhat.
- Top API co ty le loi cao nhat.
- Top Mini App su dung API nhieu nhat.

## Mau Mini App

Route: `mauMiniApp`

Panel:

- KPI tong template, dang phat hanh, nhap.
- Search theo ten template.
- Filter/tabs trang thai.
- Table template, loai, version, so Mini App, developer, cap nhat cuoi, trang thai, thao tac.
- CTA tao mau -> `trinhTaoMau`.

## Trinh Tao Mau

Route: `trinhTaoMau`

Panel:

- Step 1: thong tin template, danh muc, mo ta.
- Step 2: thiet ke template, them man hinh, chon loai man hinh, chon component.
- Preview dien thoai.

Actions:

- Luu nhap -> tao template `draft`.
- Phat hanh -> tao template `published`.

## Xem Mau Mini App

Route: `xemMauMiniApp`

Panel:

- Xem/chinh sua thong tin template.
- Cap nhat template.
- Xoa template.
- Dong ve `mauMiniApp`.

## Ho Tro

Route: `hoTro`

Panel:

- Tabs: Tat ca, Cho xu ly, Dang xu ly, Da hoan thanh.
- Search theo tieu de.
- Filter doanh nghiep, muc do, trang thai.
- Table ticket, muc do, trang thai, ngay tao.
- Refresh clear filter.

## Bao Cao

Route: `baoCao`

Panel:

- Filter loai bao cao, thoi gian, doanh nghiep.
- Table bao cao, dinh dang, ngay tao.
- Download action.

## Quan Ly He Thong

Route: `quanLyHeThong`

Tabs:

- Tong quan.
- Bao mat.
- Thong bao.
- Nhat ky.
- Sao luu.

State:

- Form cau hinh he thong.
- Toggle 2FA, email/push/system notification.
- Pagination nhat ky.
