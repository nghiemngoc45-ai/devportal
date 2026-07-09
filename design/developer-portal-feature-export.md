# Developer Portal Feature Export Specification

> Mục tiêu: file này là blueprint chức năng và UI/UX để một hệ thống khác có thể generate lại đầy đủ Developer Portal tương tự, nhưng dùng design system riêng của hệ thống đích. Không copy màu sắc, font, spacing cụ thể nếu hệ thống đích đã có design riêng; chỉ giữ cấu trúc màn hình, hành vi, trạng thái, dữ liệu, luồng và thành phần UI.

## 1. Product Scope

Developer Portal là hệ thống quản lý hệ sinh thái Mini App/API dành cho 2 nhóm người dùng chính:

1. **Quản trị viên nền tảng**
   - Quản lý tổng quan hệ sinh thái.
   - Quản lý doanh nghiệp phát triển Mini App.
   - Quản lý Mini App toàn nền tảng.
   - Quản lý đơn vị sử dụng đã cài Mini App.
   - Quản lý API, version API, tài liệu API, Mini App sử dụng API.
   - Theo dõi API Monitoring.
   - Quản lý mẫu Mini App/template builder.
   - Quản lý hỗ trợ, báo cáo, cấu hình hệ thống.

2. **Doanh nghiệp**
   - Dashboard riêng cho doanh nghiệp.
   - Quản lý Mini App của doanh nghiệp.
   - Tạo Mini App theo wizard nhiều bước.
   - Xem chi tiết Mini App và trạng thái kiểm duyệt/phát hành.

Ứng dụng là dashboard vận hành, không phải landing page. Màn đầu tiên sau đăng nhập phải là màn làm việc có dữ liệu thật/giả lập, bảng, bộ lọc, hành động và điều hướng.

## 2. Global UX Contract

### 2.1 Application Shell

Mọi màn sau đăng nhập dùng layout dashboard gồm:

- Sidebar cố định bên trái.
- Top bar cố định phía trên vùng nội dung.
- Vùng nội dung scroll độc lập.
- Các màn danh sách dùng header trang, KPI cards, filter/search, tabs trạng thái, bảng dữ liệu và pagination.
- Các màn chi tiết dùng breadcrumb/back button, header card, tabs nội dung, bảng con, drawer hoặc modal khi xem nhanh/chỉnh sửa.

### 2.2 Admin Sidebar

Sidebar Admin hiển thị logo/brand và danh sách menu:

- Tổng quan -> `dashboard`
- Doanh nghiệp -> `doanhNghiep`
- Mini App -> `miniApp`
- Đơn vị sử dụng -> `donViSuDung`
- API -> `apiManagement`
- API Monitoring -> `apiMonitoring`
- Mẫu Mini App -> `mauMiniApp`
- Hỗ trợ -> `hoTro`
- Báo cáo -> `baoCao`
- Quản lý hệ thống -> `quanLyHeThong`
- Đăng xuất -> `signin`

Yêu cầu:

- Menu active phải nổi bật theo design system của hệ thống đích.
- Item gồm icon + label.
- Sidebar phải hỗ trợ danh sách dài bằng scroll.
- Đăng xuất quay về màn đăng nhập.

### 2.3 Enterprise Sidebar

Sidebar Doanh nghiệp hiển thị tên doanh nghiệp và role `Doanh nghiệp`, gồm menu:

- Dashboard -> `dnDashboard`
- Mini App -> `dnMiniApp`
- API
- Nhân viên
- Vai trò & Phân quyền
- Báo cáo
- Hỗ trợ
- Thông tin doanh nghiệp
- Đăng xuất -> `signin`

Trong prototype hiện tại chỉ các route `dnDashboard`, `dnMiniApp`, `signin` có màn hoàn chỉnh; các menu còn lại vẫn phải render như menu điều hướng/placeholder nếu hệ thống đích cần full sidebar.

### 2.4 Top Bar

Top bar gồm:

- Breadcrumb hoặc tiêu đề route.
- Khu vực tiện ích bên phải: thông báo, trợ giúp, avatar user.
- Icon thông báo có indicator trạng thái chưa đọc.
- Avatar mở rộng profile menu nếu hệ thống đích hỗ trợ.

### 2.5 Reusable List Pattern

Các màn danh sách phải có:

- Page title + mô tả ngắn.
- KPI cards phía trên bảng.
- Search input nổi bật.
- Bộ lọc dạng select/dropdown.
- Tabs trạng thái có count.
- Bảng có hover row, status badge, action column.
- Empty state: hiển thị dòng `Không có dữ liệu`.
- Pagination: hiển thị range `Hiển thị x-y / total`, nút previous/next, page number.
- Khi search/filter/tab thay đổi, reset về page 1.

### 2.6 Status Badge Rules

Status badge dùng label rõ ràng, nền nhẹ, chữ nổi:

- Success: Hoạt động, Đã xuất bản, Published, Phát hành, Đã hoàn thành.
- Warning: Chờ duyệt, Draft, Bản nháp, Chờ xử lý, Đang xử lý.
- Danger: Từ chối, Error, Rejected.
- Neutral: Tạm khóa, Ngừng hoạt động, Tạm ẩn.

### 2.7 Navigation Rules

Route map chính:

```text
signin
dashboard
doanhNghiep
chiTietDoanhNghiep
chiTietThanhVien
chiTietMiniApp
developer
miniApp
donViSuDung
chiTietDonViSuDung
apiManagement
chiTietAPI
apiMonitoring
mauMiniApp
trinhTaoMau
xemMauMiniApp
hoTro
baoCao
quanLyHeThong
dnDashboard
dnMiniApp
dnCreateMiniApp
dnCreateMiniAppStep2
dnCreateMiniAppStep3
```

Back behavior:

- Danh sách -> chi tiết -> back phải quay về đúng danh sách trước đó.
- Chi tiết Mini App có thể mở từ Admin Mini App, Doanh nghiệp Mini App, chi tiết Doanh nghiệp, chi tiết Thành viên, chi tiết API; breadcrumb/sidebar phải phản ánh context nguồn.
- Chi tiết Thành viên có thể mở từ chi tiết Doanh nghiệp; back quay về chi tiết Doanh nghiệp hoặc danh sách nguồn.

## 3. Authentication Screen

Route: `signin`

Mục tiêu: đăng nhập và demo nhanh theo vai trò.

Bố cục:

- Header trên cùng gồm logo bên trái, icon ngôn ngữ và trợ giúp bên phải.
- Khu vực chính chia 2 cột trên desktop:
  - Cột visual minh họa/ảnh người dùng và avatar phụ.
  - Cột form đăng nhập dạng card.
- Mobile: chỉ cần form chính, visual có thể ẩn.

Form:

- Email input, icon mail, placeholder `What is your e-mail?`
- Password input, icon lock, nút show/hide password.
- Checkbox `Remember me`, mặc định checked.
- Link `Forgot password?`
- Button submit `Continue`.
- Link `Sign up`.

Demo role:

- 3 nút role: Quản trị viên, Doanh nghiệp, Nhân viên.
- Click Quản trị viên hoặc submit form -> vào `dashboard`.
- Click Doanh nghiệp -> vào `dnDashboard`.
- Nhân viên hiện như lựa chọn demo, có thể để placeholder nếu chưa có portal nhân viên.

## 4. Admin Dashboard

Route: `dashboard`

Mục tiêu: tổng quan sức khỏe hệ sinh thái.

Nội dung:

- KPI overview cards:
  - Doanh nghiệp
  - Developer
  - Mini App
  - Người dùng
- Mỗi card có label, giá trị tăng/giảm, mini bar chart.
- Card cảnh báo cần xử lý:
  - Mini App chờ kiểm duyệt
  - Doanh nghiệp chờ phê duyệt
  - Developer chờ xác minh
- Chart tăng trưởng hệ sinh thái theo tháng với 3 series:
  - Mini App
  - Doanh nghiệp
  - Developer
- Legend chart có checkbox/toggle để bật tắt từng series.
- Top 5 Mini App theo lượng người dùng/doanh thu.
- Hoạt động gần đây dạng timeline/list.

Tương tác:

- Toggle chart series ẩn/hiện line.
- Click cảnh báo có thể điều hướng đến danh sách tương ứng đã filter theo trạng thái.

## 5. Enterprise Dashboard

Route: `dnDashboard`

Mục tiêu: dashboard vận hành riêng cho doanh nghiệp đăng nhập.

Nội dung:

- KPI cards:
  - Mini App
  - API
  - Đơn vị sử dụng
  - Người dùng
  - API Calls hôm nay
- Khu Mini App:
  - Mini App được cài nhiều nhất.
  - Cảnh báo version: ví dụ có nhiều đơn vị chưa cập nhật phiên bản mới.
  - Bảng phiên bản Mini App: tên, version, số đơn vị đã cập nhật, chưa cập nhật, phần trăm.
- Khu API:
  - Top API sử dụng nhiều nhất.
  - API có lỗi nhiều nhất hôm nay.
- Hoạt động gần đây.
- Việc cần xử lý/action items.

Tương tác:

- Các item Mini App/API nên có thể click sang màn tương ứng nếu route tồn tại.
- Action items có thể điều hướng đến danh sách Mini App/API đã lọc.

## 6. Enterprise Mini App Management

Route: `dnMiniApp`

Mục tiêu: doanh nghiệp quản lý Mini App của chính mình.

Header:

- Title `Mini App`
- Subtitle `Quản lý Mini App của doanh nghiệp`
- Primary action `+ Tạo Mini App` -> `dnCreateMiniApp`

KPI cards:

- Mini App
- Business API
- Đơn vị sử dụng
- Lượt cài đặt

Filters:

- Search theo tên Mini App.
- Select danh mục: Tất cả danh mục, Giáo dục, Tiện ích, Tài chính, Dịch vụ.

Tabs:

- Tất cả
- Published
- Chờ duyệt
- Draft
- Từ chối

Bảng:

- STT
- Mini App: icon, tên, danh mục
- Version
- Đơn vị sử dụng
- Trạng thái
- Thao tác

Trạng thái:

- Đã xuất bản
- Chờ duyệt
- Bản nháp
- Từ chối
- Tạm ẩn

Action rules:

- Đã xuất bản:
  - Xem -> chi tiết Mini App
  - Upload Version
  - Thu hồi chỉ khả dụng khi `đơn vị sử dụng = 0`; thu hồi chuyển trạng thái về Bản nháp.
- Bản nháp:
  - Xem
  - Chỉnh sửa
  - Gửi duyệt -> Chờ duyệt
  - Xóa -> remove row khỏi bảng.
- Từ chối:
  - Xem lý do
  - Chỉnh sửa
  - Gửi lại -> Chờ duyệt
- Chờ duyệt:
  - Xem
  - Rút yêu cầu -> Bản nháp.

## 7. Enterprise Create Mini App Wizard

Wizard gồm 6 bước:

1. Thông tin
2. Chọn Template
3. Cấu hình
4. API
5. Upload
6. Hoàn tất

Mỗi bước phải có:

- Enterprise sidebar.
- Breadcrumb/back về danh sách Mini App.
- Stepper ngang hiển thị bước active/completed/upcoming.
- Footer hoặc vùng action cuối: Quay lại, Lưu nháp, Tiếp tục.

### 7.1 Step 1: Basic Information

Route: `dnCreateMiniApp`

Mục tiêu: nhập thông tin Mini App và xem preview marketplace.

Bố cục:

- Cột trái: form nhập liệu.
- Cột phải: sticky preview panel.

Form sections:

- Thông tin cơ bản:
  - Tên Mini App, required.
  - Mô tả ngắn/description, required.
  - Danh mục.
  - Tags/nhãn ứng dụng.
- Hiển thị marketplace:
  - Logo upload placeholder.
  - Banner upload placeholder.
  - Ảnh giới thiệu upload placeholder.

Preview:

- Hiển thị tên Mini App, mô tả, logo/banner placeholder.
- Preview cập nhật realtime theo input.
- Nếu chưa nhập tên, hiển thị placeholder `Tên Mini App`.
- Nếu chưa nhập mô tả, hiển thị placeholder mô tả.

Actions:

- `Lưu nháp`: lưu dữ liệu hiện tại ở trạng thái draft.
- `Tiếp tục`: sang `dnCreateMiniAppStep2`.

### 7.2 Step 2: Creation Method

Route: `dnCreateMiniAppStep2`

Mục tiêu: chọn cách tạo Mini App.

Options:

- `Dùng Template`: khởi tạo từ template marketplace.
- `Tự Build`: doanh nghiệp tự phát triển giao diện Mini App.

Yêu cầu quan trọng:

- Ban đầu không option nào được chọn.
- Cả 2 CTA/card ở trạng thái outline/unselected.
- Chỉ option được user chọn mới chuyển sang trạng thái active/filled theo design system.
- `Tiếp tục` disabled cho đến khi user chọn 1 option.

Actions:

- `Quay lại` -> `dnCreateMiniApp`
- `Tiếp tục`:
  - Nếu chọn `Dùng Template` -> `dnCreateMiniAppStep3`
  - Nếu chọn `Tự Build` -> bước cấu hình/build tương ứng hoặc placeholder step 3 tự build.

### 7.3 Step 3: Template Selection

Route: `dnCreateMiniAppStep3`

Mục tiêu: chọn template cụ thể trước khi tạo draft Mini App.

Yêu cầu màn hình:

- Header `Danh sách mẫu` hoặc `Chọn Template`.
- Search theo tên template.
- Filters:
  - Danh mục.
  - Loại template.
  - Sắp xếp.
- Grid card template.
- Panel tóm tắt `Đã chọn`.
- Khu `Lưu ý quan trọng`.

Template card:

- Ảnh preview.
- Tên template.
- Mô tả ngắn.
- Danh mục/loại.
- Thông tin số màn hình/component hoặc lượt dùng nếu có.
- Button `Chọn`.
- Button/icon preview ảnh.
- Button `Xem mẫu`.
- Active state rõ ràng khi đã chọn.

Interactions:

- Click `Chọn` set selected template và cập nhật panel `Đã chọn`.
- Click ảnh/preview mở drawer xem ảnh/template detail.
- Click `Xem mẫu` mở popup preview mẫu.
- `Tiếp tục` disabled nếu chưa chọn template.
- Click `Tiếp tục` khi đã chọn -> mở confirmation popup.
- Confirm popup -> tạo Mini App trạng thái Bản nháp và điều hướng đến detail draft Mini App.
- `Lưu nháp` lưu wizard state, không bắt buộc chọn template.
- `Quay lại` -> step 2.

## 8. Admin Business Management

Route: `doanhNghiep`

Mục tiêu: quản lý doanh nghiệp phát triển Mini App.

KPI cards:

- Tổng doanh nghiệp
- Chờ duyệt
- Hoạt động
- Tạm khóa
- Ngừng hoạt động

Search:

- Tìm theo tên doanh nghiệp, MST, email liên hệ.

Tabs:

- Tất cả
- Chờ duyệt
- Hoạt động
- Tạm khóa
- Ngừng hoạt động

Bảng:

- STT
- Doanh nghiệp: tên, MST, summary số Mini App/Developer/Published.
- Ngày đăng ký
- Lần cuối hoạt động
- Trạng thái
- Thao tác

Action rules:

- Mọi trạng thái có `Xem` -> chi tiết doanh nghiệp.
- Hoạt động: `Tạm khóa`, `Ngừng`.
- Chờ duyệt: `Duyệt` -> Hoạt động, `Từ chối`.
- Tạm khóa: `Mở khóa` -> Hoạt động, `Ngừng`.
- Ngừng hoạt động: chỉ xem hoặc action khôi phục nếu hệ thống đích cần.

## 9. Business Detail

Route: `chiTietDoanhNghiep`

Mục tiêu: xem 360 độ một doanh nghiệp.

Header:

- Breadcrumb từ Dashboard/Doanh nghiệp.
- Back button.
- Header card gồm tên doanh nghiệp, mô tả, status badge, MST, summary:
  - số thành viên
  - số Mini App
  - số Published
  - người dùng
- Action theo trạng thái: khóa/mở khóa/ngừng/duyệt nếu phù hợp.

Tabs:

- Tổng quan
- Mini App
- Hoạt động

Trong code còn có thành viên liên quan; hệ thống đích nên có tab/section Thành viên nếu cần đầy đủ luồng xem thành viên.

Tab Tổng quan:

- Card thông tin doanh nghiệp:
  - Tên
  - MST
  - Loại hình
  - Website
  - Địa chỉ
  - Mô tả
- Card thông tin tài khoản:
  - Trạng thái
  - Ngày tham gia
  - Lần cuối hoạt động
  - Tổng Mini App
  - Đã publish
- Card người đại diện:
  - Họ tên
  - Email
  - SĐT

Tab Mini App:

- Search Mini App.
- Filter danh mục/trạng thái.
- Bảng Mini App của doanh nghiệp: STT, Mini App, danh mục, version, trạng thái, thao tác xem.
- Empty state nếu không có dữ liệu.

Tab Hoạt động:

- Filter loại hoạt động:
  - Tất cả loại
  - Phê duyệt
  - Thành viên
  - Mini App
  - Cập nhật
  - Gửi hồ sơ
  - Khóa/Mở khóa
- Filter thời gian:
  - Tất cả thời gian
  - Hôm nay
  - 7 ngày qua
  - 30 ngày qua
- Timeline hoạt động có ngày, giờ, icon, tiêu đề, chi tiết dạng label/value.

Drawers:

- Member drawer khi xem nhanh thành viên.
- Mini App drawer khi xem nhanh Mini App.
- Drawer có nút xem chi tiết đầy đủ.

## 10. Developer/Member Detail

Route: `chiTietThanhVien`

Mục tiêu: xem hồ sơ developer/thành viên và liên kết tới doanh nghiệp/Mini App.

Header:

- Breadcrumb phụ thuộc nguồn mở.
- Back button.
- Header card gồm avatar/tên/email/role/status.
- Summary:
  - số doanh nghiệp tham gia
  - số Mini App

Tabs:

- Tổng quan
- Doanh nghiệp
- Mini App
- Nhật ký hoạt động

Tab Tổng quan:

- Thông tin cá nhân: tên, email, số điện thoại nếu có.
- Thông tin tài khoản: vai trò, trạng thái, ngày tham gia, lần cuối hoạt động.
- Tổng số doanh nghiệp, tổng số Mini App.
- Danh sách doanh nghiệp/Mini App nổi bật.

Tab Doanh nghiệp:

- Search/filter vai trò.
- Bảng doanh nghiệp tham gia: tên doanh nghiệp, vai trò, ngày tham gia, trạng thái, thao tác xem.
- Click xem mở drawer hoặc chi tiết doanh nghiệp.

Tab Mini App:

- Search Mini App.
- Bảng Mini App tham gia: tên, doanh nghiệp, trạng thái, vai trò, thao tác xem chi tiết Mini App.

Tab Nhật ký hoạt động:

- Search theo tiêu đề/chi tiết.
- Filter loại hoạt động:
  - Đăng nhập
  - Cập nhật Mini App
  - Tham gia doanh nghiệp
  - Tạo phiên bản
  - Gửi kiểm duyệt
  - Cập nhật tài khoản
  - Xuất bản Mini App
  - Rời doanh nghiệp
- Timeline/list hoạt động có thời gian, loại, tiêu đề, chi tiết.

## 11. Admin Mini App Management

Route: `miniApp`

Mục tiêu: quản lý Mini App toàn nền tảng.

KPI cards:

- Tổng Mini App
- Đã xuất bản
- Chờ duyệt
- Bản nháp/Từ chối/Tạm ẩn tùy dữ liệu.

Filters:

- Search theo tên Mini App.
- Select danh mục.
- Select doanh nghiệp.

Tabs:

- Tất cả
- Đã xuất bản
- Chờ duyệt
- Bản nháp
- Từ chối
- Tạm ẩn

Bảng:

- STT
- Mini App: icon, tên, danh mục
- Doanh nghiệp
- Version
- Trạng thái
- Thao tác

Action rules:

- Mọi trạng thái: `Xem` -> `chiTietMiniApp`.
- Chờ duyệt: duyệt/phát hành, từ chối/yêu cầu chỉnh sửa.
- Đã xuất bản: ẩn khỏi marketplace, ngừng nếu phù hợp.
- Bản nháp/Từ chối: xem/chỉnh sửa nếu quyền cho phép.

## 12. Mini App Detail

Route: `chiTietMiniApp`

Mục tiêu: xem thông tin, version và lịch sử hoạt động của Mini App.

Context:

- Nếu mở từ `dnMiniApp`, dùng Enterprise sidebar.
- Nếu mở từ `miniApp`, `chiTietDoanhNghiep`, `chiTietThanhVien`, `chiTietAPI`, dùng Admin sidebar và breadcrumb phù hợp.

Header card:

- Tên Mini App.
- Mô tả.
- Status badge.
- Doanh nghiệp sở hữu.
- App ID.
- Ngày tạo.
- Phiên bản hiện tại.
- Cập nhật cuối.
- Người publish.
- Metrics:
  - người dùng
  - MAU
  - uptime
  - rating marketplace
- Actions ví dụ:
  - Ẩn khỏi Marketplace
  - Ngừng

Tabs:

- Tổng quan
- Phiên bản
- Lịch sử hoạt động

Tab Tổng quan:

- Card thông tin Mini App:
  - Tên Mini App
  - Mã Mini App
  - Danh mục
  - Nền tảng
  - Doanh nghiệp sở hữu
- Card thông tin phát hành:
  - Trạng thái
  - Ngày phát hành
  - Marketplace
  - Người duyệt
  - Phiên bản hiện tại
- Mô tả Mini App.
- Danh sách chức năng chính.
- Card thống kê sử dụng:
  - Người dùng
  - MAU
  - Phiên truy cập
  - Đánh giá Marketplace

Tab Phiên bản:

- Bảng version:
  - STT
  - Version
  - Trạng thái
  - Ngày tạo
  - Người tạo
  - Thao tác `Xem chi tiết`

Tab Lịch sử hoạt động:

- Filter loại:
  - Publish
  - Kiểm duyệt
  - Cập nhật
  - Thành viên
  - Phiên bản
  - Từ chối
  - Cấu hình
- Filter thời gian.
- Timeline hoạt động có chi tiết dạng label/lines.

## 13. Developer List

Route: `developer`

Lưu ý: menu Developer đang bị ẩn khỏi Admin sidebar trong prototype, nhưng màn vẫn tồn tại và nên export để hệ thống đích có thể bật lại.

Mục tiêu: quản lý developer/thành viên nền tảng.

KPI cards:

- Tổng Developer
- Hoạt động
- Tạm khóa
- Ngừng hoạt động

Search:

- Tìm theo tên hoặc email.

Tabs:

- Tất cả
- Hoạt động
- Tạm khóa
- Ngừng hoạt động

Bảng:

- STT
- Developer: tên, ID
- Email
- Doanh nghiệp
- Mini App
- Trạng thái
- Thao tác: Xem -> chi tiết thành viên/developer.

Action:

- Button `+ Developer` để mở modal thêm developer nếu hệ thống đích cần CRUD.

## 14. API Management

Route: `apiManagement`

Mục tiêu: quản lý catalog API nền tảng.

Header actions:

- `Import OpenAPI/Swagger`
- `+ API`

KPI cards:

- Tổng API
- Published
- Draft

Filters:

- Search theo tên API hoặc endpoint.
- Method filter:
  - GET
  - POST
  - PUT
  - DELETE
  - PATCH
- Nút `Xóa bộ lọc` chỉ hiển thị khi có filter/search active.

Tabs:

- Tất cả
- Published
- Draft

Bảng:

- STT
- Tên API
- Method badge
- Endpoint
- Version
- Trạng thái
- Thao tác: `Xem chi tiết`

Empty state:

- `Không có dữ liệu`

## 15. API Detail

Route: `chiTietAPI`

Mục tiêu: xem, versioning và quản lý tài liệu của một API.

Header:

- Breadcrumb `API Management / Chi tiết API`
- Button back.
- Actions:
  - Sao chép URL
  - More menu

Header card:

- Method badge.
- Tên API + endpoint.
- Mô tả ngắn.
- Button `Phiên bản mới`.
- Metadata:
  - Tên API kỹ thuật
  - Endpoint
  - Module
  - Version hiện tại
  - Cập nhật lần cuối

Tabs:

- Tổng quan
- Phiên bản `{count}`
- Tài liệu API
- Mini App sử dụng `{count}`

Tab Tổng quan:

- Card thông tin API:
  - Tên API
  - Module
  - Method
  - Endpoint
  - Version
  - Trạng thái
- Card cấu hình hệ thống:
  - Authentication
  - Scope
  - Rate Limit
  - Timeout
  - Cache
  - Response Format
- Mô tả API, hỗ trợ đoạn text và bullet.
- Box `Lưu ý quan trọng cho nhà phát triển`.

Tab Phiên bản:

- Search phiên bản.
- Bảng:
  - STT
  - Phiên bản
  - Ngày tạo
  - Trạng thái
  - Mini App sử dụng
  - Mô tả
  - Thao tác
- Action rules:
  - Version Nháp: `Sửa`, `Phát hành`, `Xóa`.
  - Version Phát hành chưa được dùng: `Thu hồi`, `Xóa`.
  - Version Phát hành đang được Mini App dùng: disable `Thu hồi` và `Xóa`.
- Button `Phiên bản mới` mở modal tạo version.

Modal tạo/sửa version:

- Title `Tạo phiên bản API mới` hoặc `Sửa phiên bản API`.
- Hiển thị thông tin API ở đầu.
- Fields:
  - Phiên bản, required.
  - Mô tả thay đổi, required.
  - Tài liệu OpenAPI/Swagger, required khi tạo mới; optional khi sửa.
- Footer: Hủy, Lưu/Tạo.
- Validate không cho submit nếu thiếu required field.

Tab Tài liệu API:

- Danh sách tài liệu với loại file:
  - PDF
  - DOCX
  - XLSX
  - TXT
  - Other
- Actions:
  - Thêm tài liệu API.
  - Sửa tài liệu API.
  - Xóa/tải xuống nếu hệ thống đích cần.
- Empty state: `Chưa có tài liệu API nào`.

Tab Mini App sử dụng:

- Search Mini App.
- Bảng:
  - Mini App
  - Doanh nghiệp
  - Phiên bản API đang dùng
  - Trạng thái
  - Requests/calls nếu có
  - Thao tác `Xem Mini App`
- Empty state: `Chưa có Mini App nào sử dụng API này`.

## 16. API Monitoring

Route: `apiMonitoring`

Mục tiêu: theo dõi sử dụng và lỗi API.

Header:

- Title `API Monitoring`
- Subtitle `Theo dõi tình trạng sử dụng API của nền tảng`

Filters:

- Time range.
- API.
- Doanh nghiệp.
- Mini App.
- Status.

Overview KPI:

- Tổng requests.
- Tỷ lệ lỗi.
- Latency trung bình.
- API đang sử dụng.
- Doanh nghiệp gọi API.
- Mini App gọi API.

Charts/sections:

- Lưu lượng Request theo giờ: success/error series.
- API có nhiều Request nhất.
- API có tỷ lệ lỗi cao nhất.
- Top Mini App sử dụng API nhiều nhất.
- Log request gần đây.

Log table:

- Thời gian
- Mini App
- Doanh nghiệp
- Method
- Endpoint
- Trạng thái HTTP
- Response time

Status:

- 2xx success.
- 4xx client error.
- 5xx server error.
- Badge màu theo nhóm status.

## 17. Template Management

Route: `mauMiniApp`

Mục tiêu: quản lý mẫu Mini App được tạo bằng template builder.

Header:

- Title `Mẫu Mini App (Template)`
- Subtitle `Quản lý các mẫu Mini App được tạo bằng Trình tạo Mini App`
- Primary action `Mẫu Mini App` hoặc `+ Tạo mẫu` -> `trinhTaoMau`

KPI cards:

- Tổng mẫu
- Published
- Draft
- Mini App đã tạo từ mẫu

Filters:

- Search theo tên/mô tả template.
- Filter trạng thái.
- Filter loại/danh mục nếu có.

Tabs:

- Tất cả
- Published
- Draft

Bảng/card list:

- Tên template.
- Loại template.
- Mô tả.
- Số màn hình.
- Số Mini App đã tạo.
- Trạng thái.
- Ngày tạo/cập nhật.
- Thao tác:
  - Xem/chỉnh sửa -> `xemMauMiniApp`
  - Publish/unpublish nếu cần.

## 18. Template Builder

Route: `trinhTaoMau`

Mục tiêu: tạo template Mini App bằng trình builder trực quan.

Bố cục 3 vùng:

- Cột trái: thông tin chung và danh sách màn hình.
- Trung tâm: preview giao diện mobile/app.
- Cột phải: thuộc tính màn hình/component.

Thông tin chung:

- Tên template.
- Mô tả template.
- Loại template/danh mục.
- Trạng thái publish/draft.

Quản lý màn hình:

- Danh sách màn hình.
- Empty state khi chưa có màn hình.
- Button thêm màn hình.
- Form thêm màn hình:
  - Tên màn hình.
  - Loại màn hình: Dashboard, Form, List, Detail hoặc các loại hệ thống đích hỗ trợ.
- Chọn màn hình active để preview và chỉnh thuộc tính.
- Xóa màn hình nếu hệ thống đích hỗ trợ.

Preview:

- Khung preview dạng điện thoại/app.
- Header app dùng tên template.
- Render từng màn hình trong danh sách.
- Khi chưa có màn hình, hiển thị trạng thái trống.

Thuộc tính:

- Khi chưa chọn màn hình: hướng dẫn chọn/thêm màn hình.
- Khi có màn hình:
  - Tên màn hình editable.
  - Loại màn hình readonly hoặc editable tùy hệ thống.
  - Danh sách component phù hợp loại màn hình.
  - Checkbox/toggle chọn component.

Actions:

- Quay lại -> `mauMiniApp`
- Lưu nháp.
- Lưu/Xuất bản template.
- Sau khi lưu, thêm template vào danh sách và quay về `mauMiniApp`.

## 19. View/Edit Template

Route: `xemMauMiniApp`

Mục tiêu: xem và chỉnh sửa template đã có.

Yêu cầu:

- Layout giống Template Builder.
- Load dữ liệu template đã chọn.
- Cho phép sửa thông tin chung.
- Cho phép thêm/xóa/chọn màn hình.
- Cho phép chỉnh component của màn hình.
- Actions:
  - Quay lại danh sách mẫu.
  - Lưu thay đổi.
  - Publish/unpublish nếu có quyền.

## 20. Support Management

Route: `hoTro`

Mục tiêu: quản lý ticket hỗ trợ từ doanh nghiệp/người dùng.

Data model ticket:

- ID
- Tiêu đề
- Doanh nghiệp
- Người gửi
- Mức độ: Cao, Trung bình, Thấp
- Trạng thái: Chờ xử lý, Đang xử lý, Đã hoàn thành
- Ngày tạo

KPI/filters:

- Count theo trạng thái.
- Search theo tiêu đề/người gửi/doanh nghiệp.
- Filter doanh nghiệp.
- Filter mức độ.
- Filter trạng thái/tab.

Tabs:

- Tất cả
- Chờ xử lý
- Đang xử lý
- Đã hoàn thành

Bảng:

- STT
- Tiêu đề
- Doanh nghiệp
- Người gửi
- Mức độ badge
- Trạng thái badge
- Ngày tạo
- Thao tác xem/xử lý.

Action behavior:

- Chờ xử lý -> có thể nhận xử lý.
- Đang xử lý -> có thể hoàn thành.
- Đã hoàn thành -> chỉ xem.

## 21. Reports

Route: `baoCao`

Mục tiêu: tạo và tải báo cáo.

Filters/form:

- Loại báo cáo:
  - Tổng hợp Mini App
  - Thống kê API
  - Doanh nghiệp
  - Đơn vị sử dụng nếu cần.
- Khoảng thời gian.
- Doanh nghiệp.
- Định dạng:
  - Excel
  - PDF

Actions:

- Tạo báo cáo.
- Tải xuống báo cáo.

Bảng danh sách báo cáo:

- Tên báo cáo
- Thời gian
- Định dạng
- Ngày tạo
- Thao tác tải xuống/xem.

## 22. System Management

Route: `quanLyHeThong`

Mục tiêu: cấu hình hệ thống, bảo mật, thông báo, nhật ký, sao lưu.

Tabs:

- Tổng quan
- Bảo mật
- Thông báo
- Nhật ký
- Sao lưu

Tab Tổng quan:

- Thông tin hệ thống:
  - Tên hệ thống
  - Phiên bản
  - Môi trường
  - API Gateway status
  - Database status
- Form cấu hình chung:
  - Tên hệ thống.
  - Email hỗ trợ.
  - URL marketplace nếu có.
- Actions lưu cấu hình.

Tab Bảo mật:

- Toggle/setting:
  - Bắt buộc 2FA.
  - Policy mật khẩu.
  - Thời gian hết phiên.
  - Rate limit đăng nhập.
- Inputs/selects theo policy.

Tab Thông báo:

- Toggle:
  - Gửi email khi Mini App được phê duyệt.
  - Gửi email khi API được phát hành.
  - Gửi thông báo khi có ticket hỗ trợ mới.
- Nhóm cấu hình Mini App/API/System.

Tab Nhật ký:

- Bảng audit log:
  - Thời gian
  - Người thực hiện
  - Hành động
  - Đối tượng
  - IP
- Search/filter nếu cần.

Tab Sao lưu:

- Thông tin lần sao lưu gần nhất.
- Nút tạo bản sao lưu.
- Nút khôi phục dữ liệu.
- Lịch sử sao lưu nếu có.

## 23. Usage Unit Management

Route: `donViSuDung`

Mục tiêu: quản lý các đơn vị/trường/sở/phòng đang sử dụng Mini App.

KPI cards:

- Tổng đơn vị.
- Đơn vị hoạt động.
- Mini App đã cài.
- API Calls tháng này.
- Mini App/Đơn vị trung bình.

Filters:

- Search theo tên đơn vị.
- Loại đơn vị:
  - Trường THPT
  - Trường THCS
  - Trường Tiểu học
  - Sở GD&ĐT
  - Phòng GD&ĐT
- Tỉnh/thành.
- Mini App.
- Trạng thái:
  - Hoạt động
  - Tạm khóa
  - Ngừng hoạt động

Bảng:

- STT
- Đơn vị
- Loại đơn vị
- Tỉnh/thành
- Mini App đã cài
- API Calls/tháng hoặc người dùng
- Trạng thái
- Thao tác `Xem`

Action:

- Click `Xem` -> `chiTietDonViSuDung`.

## 24. Usage Unit Detail

Route: `chiTietDonViSuDung`

Mục tiêu: xem thông tin đơn vị sử dụng và Mini App đã cài.

Header:

- Breadcrumb từ Đơn vị sử dụng.
- Back button.
- Header card gồm tên đơn vị, loại, địa chỉ/tỉnh, trạng thái.
- Actions:
  - Tạm khóa.
  - Mở khóa.
  - Ngừng hoạt động.

Tabs:

- Tổng quan
- Mini App đã cài đặt
- Lịch sử cài đặt/hoạt động

Tab Tổng quan:

- Thông tin đơn vị:
  - Tên
  - Mã đơn vị
  - Loại đơn vị
  - Tỉnh/thành
  - Địa chỉ
  - Người liên hệ
  - Email/SĐT
- KPI:
  - Mini App đang cài
  - API Calls tháng này
  - Người dùng

Tab Mini App đã cài đặt:

- Search `Tìm Mini App...`
- Bảng:
  - Mini App
  - Phiên bản
  - Ngày cài
  - Trạng thái
  - Doanh nghiệp sở hữu
- Empty state nếu không có.

Tab lịch sử:

- Timeline/bảng:
  - Thời gian
  - Mini App
  - Phiên bản
  - Sự kiện, ví dụ `Cài đặt Mini App`, `Cập nhật phiên bản`.

Confirmation dialogs:

- Tạm khóa:
  - Cảnh báo: tất cả Mini App của đơn vị sẽ tạm ngừng hoạt động.
  - Confirm chuyển trạng thái sang Tạm khóa.
- Mở khóa:
  - Thông báo: các Mini App tiếp tục hoạt động bình thường.
  - Confirm chuyển trạng thái sang Hoạt động.

## 25. Data Entities

### 25.1 Business

Fields:

- `id`
- `ten`
- `mst`
- `thanhVien`
- `miniApp`
- `daPublish`
- `nguoiDung`
- `thamGia`
- `lanCuoiHoatDong`
- `trangThai`
- `moTa`
- `loaiHinh`
- `website`
- `nguoiDaiDien`
- `email`
- `sdt`
- `diaChi`

Statuses:

- Hoạt động
- Chờ duyệt
- Tạm khóa
- Ngừng hoạt động

### 25.2 Mini App

Fields:

- `appId`
- `ten`
- `moTa`
- `chucNang`
- `danhMuc`
- `nenTang`
- `doanhNghiep`
- `trangThai`
- `ngayTao`
- `capNhatCuoi`
- `phienBanHienTai`
- `nguoiPublish`
- `ngayPhatHanh`
- `nguoiDuyet`
- `marketplace`
- `nguoiDung`
- `mau`
- `phienTruyCap`
- `danhGia`
- `donViSuDung`
- `luotCaiDat`

Statuses:

- Đã xuất bản
- Chờ duyệt
- Bản nháp
- Từ chối
- Tạm ẩn

### 25.3 Member/Developer

Fields:

- `id`
- `ten`
- `email`
- `vaiTro`
- `trangThai`
- `soDoanhNghiep`
- `soMiniApp`
- `ngayThamGia`
- `lanCuoiHoatDong`

Statuses:

- Hoạt động
- Tạm khóa
- Ngừng hoạt động

### 25.4 API

Fields:

- `id`
- `ten`
- `tenKyThuat`
- `method`
- `endpoint`
- `endpointFull`
- `version`
- `versionHienTai`
- `trangThai`
- `module`
- `capNhatCuoi`
- `moTa`
- `luuY`
- `authentication`
- `scope`
- `rateLimit`
- `timeout`
- `cache`
- `responseFormat`
- `soVersion`
- `soMiniApp`

Statuses:

- Published
- Draft

Methods:

- GET
- POST
- PUT
- DELETE
- PATCH

### 25.5 API Version

Fields:

- `id`
- `phienBan`
- `ngayTao`
- `trangThai`
- `usedBy`
- `moTa`

Statuses:

- Nháp
- Phát hành

### 25.6 Template

Fields:

- `id`
- `ten`
- `moTa`
- `loai`
- `trangThai`
- `soManHinh`
- `miniAppDaTao`
- `ngayTao`
- `capNhatCuoi`
- `templateScreens`

Statuses:

- published
- draft

### 25.7 Support Ticket

Fields:

- `id`
- `tieuDe`
- `doanhNghiep`
- `nguoiGui`
- `mucDo`
- `trangThai`
- `ngayTao`

Statuses:

- Chờ xử lý
- Đang xử lý
- Đã hoàn thành

Severity:

- Cao
- Trung bình
- Thấp

### 25.8 Usage Unit

Fields:

- `id`
- `ten`
- `maDonVi`
- `loaiDonVi`
- `tinhThanh`
- `diaChi`
- `nguoiLienHe`
- `email`
- `sdt`
- `miniAppDaCai`
- `apiCallsThang`
- `nguoiDung`
- `trangThai`

Statuses:

- Hoạt động
- Tạm khóa
- Ngừng hoạt động

## 26. Required Interaction Checklist

Hệ thống generate lại phải đáp ứng:

- Đăng nhập demo vào đúng portal theo role.
- Sidebar active đúng route.
- Top bar/breadcrumb xuất hiện ở tất cả màn sau đăng nhập.
- Search/filter/tabs/pagination hoạt động ở các màn danh sách.
- Status action cập nhật trạng thái ngay trên UI.
- Xóa draft Mini App trong portal doanh nghiệp remove row khỏi bảng.
- Mở chi tiết từ danh sách và back về đúng nơi xuất phát.
- Chi tiết Mini App hiển thị đúng sidebar theo context Admin/Doanh nghiệp.
- Wizard tạo Mini App step 2 không có lựa chọn active mặc định.
- Wizard step 3 chỉ cho tiếp tục khi đã chọn template.
- Modal/drawer có overlay, close button và không làm mất context trang gốc.
- Empty states không làm vỡ layout.
- Tables vẫn đọc được khi dữ liệu dài; text dài truncate hoặc wrap hợp lý.

## 27. Implementation Notes For Target Generator

- Dùng design system của hệ thống đích cho màu, font, radius, spacing và component primitives.
- Không cần copy asset ảnh hiện tại; có thể dùng placeholder/avatar/media của hệ thống đích.
- Ưu tiên component có thể tái sử dụng:
  - AppShell
  - Sidebar
  - TopBar
  - PageHeader
  - KpiCard
  - StatusBadge
  - FilterBar
  - DataTable
  - Pagination
  - DetailHeader
  - Tabs
  - Drawer
  - Modal
  - Stepper
- Nếu dùng routing thật, mỗi `Screen` trong route map nên là route URL riêng để browser Back/Forward hoạt động.
- Nếu dùng mock data ban đầu, vẫn phải giữ đúng field/status/action như spec để sau này nối API thật không phải sửa UI.

