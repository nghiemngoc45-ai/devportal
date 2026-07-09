
  # Sign In Screen Design

  This is a code bundle for Sign In Screen Design. The original project is available at https://www.figma.com/design/WVFehb84XqmOcWQjKK2gtI/Sign-In-Screen-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Màn hình Doanh nghiệp

  Nhóm màn hình Doanh nghiệp phục vụ tổ chức phát triển Mini App sau khi đăng nhập với role Doanh nghiệp. Phạm vi chính gồm dashboard vận hành riêng, danh sách Mini App thuộc doanh nghiệp, wizard tạo Mini App mới, chi tiết Mini App và các trạng thái kiểm duyệt/phát hành liên quan.

  ### 1. Dashboard Doanh nghiệp

  Route: `dnDashboard`

  Mục tiêu là cho doanh nghiệp nhìn nhanh tình hình vận hành sản phẩm của mình trên nền tảng. Màn hình cần có:

  - KPI tổng quan: tổng Mini App, tổng API đang dùng/cung cấp, số đơn vị sử dụng, số người dùng, API calls hôm nay.
  - Khu Mini App: Mini App được cài nhiều nhất, cảnh báo phiên bản khi nhiều đơn vị chưa cập nhật, bảng phiên bản gồm tên Mini App, version, số đơn vị đã cập nhật, số đơn vị chưa cập nhật và tỷ lệ cập nhật.
  - Khu API: top API sử dụng nhiều nhất, API có lỗi nhiều nhất trong ngày, chỉ số request/error/latency nếu có dữ liệu.
  - Hoạt động gần đây: các sự kiện như tạo Mini App, gửi duyệt, được duyệt, bị từ chối, upload version, thu hồi.
  - Việc cần xử lý: Mini App bản nháp chưa gửi duyệt, Mini App bị từ chối cần sửa, version mới cần upload, cảnh báo API lỗi.

  Các item Mini App/API nên click được sang màn chi tiết tương ứng nếu route đã tồn tại. Các action item nên điều hướng đến danh sách đã lọc sẵn theo trạng thái hoặc loại cảnh báo.

  ### 2. Quản lý Mini App của Doanh nghiệp

  Route: `dnMiniApp`

  Mục tiêu là để doanh nghiệp quản lý toàn bộ Mini App do chính mình sở hữu.

  Giao diện cần có:

  - Header trang: title `Mini App`, subtitle `Quản lý Mini App của doanh nghiệp`.
  - Nút chính `+ Tạo Mini App`, điều hướng sang `dnCreateMiniApp`.
  - KPI cards: tổng Mini App, Business API, đơn vị sử dụng, lượt cài đặt.
  - Search theo tên Mini App.
  - Filter danh mục: tất cả, giáo dục, tiện ích, tài chính, dịch vụ.
  - Tabs trạng thái có count: tất cả, Published/Đã xuất bản, Chờ duyệt, Draft/Bản nháp, Từ chối.
  - Bảng dữ liệu gồm STT, Mini App, version, đơn vị sử dụng, trạng thái, thao tác.
  - Empty state `Không có dữ liệu` khi filter không còn dòng nào.
  - Pagination khi danh sách dài.

  Cột Mini App nên hiển thị icon/logo, tên và danh mục. Cột trạng thái dùng badge màu theo status. Cột thao tác chỉ hiển thị action hợp lệ với trạng thái hiện tại.

  ### 3. Status transition của Mini App trong portal Doanh nghiệp

  Các trạng thái Mini App cần hỗ trợ:

  - `Bản nháp`: Mini App đang được tạo/sửa, chưa gửi kiểm duyệt.
  - `Chờ duyệt`: Mini App đã gửi cho admin kiểm duyệt, doanh nghiệp không nên sửa trực tiếp nội dung publish.
  - `Đã xuất bản`: Mini App đã được duyệt và có thể hiển thị trên marketplace.
  - `Từ chối`: Admin từ chối duyệt, cần có lý do để doanh nghiệp chỉnh sửa.
  - `Tạm ẩn`: Mini App bị admin ẩn khỏi marketplace, doanh nghiệp chủ yếu xem thông tin và chờ admin khôi phục.

  Transition dành cho Doanh nghiệp:

  ```text
  Bản nháp --Gửi duyệt--> Chờ duyệt
  Bản nháp --Xóa--> Deleted
  Chờ duyệt --Rút yêu cầu--> Bản nháp
  Từ chối --Gửi lại--> Chờ duyệt
  Đã xuất bản --Thu hồi [donViSuDung == 0]--> Bản nháp
  Đã xuất bản --Upload Version--> Version Draft/Review Flow
  ```

  Quy tắc action theo status:

  - `Bản nháp`: Xem, Chỉnh sửa, Gửi duyệt, Xóa. Xóa remove row khỏi bảng và chỉ nên cho phép khi chưa có phụ thuộc.
  - `Chờ duyệt`: Xem, Rút yêu cầu. Rút yêu cầu chuyển về `Bản nháp`.
  - `Từ chối`: Xem lý do, Chỉnh sửa, Gửi lại. Gửi lại chuyển về `Chờ duyệt`.
  - `Đã xuất bản`: Xem, Upload Version. `Thu hồi` chỉ hiện khi `donViSuDung === 0`; thu hồi chuyển về `Bản nháp`.
  - `Tạm ẩn`: Xem chi tiết, xem lịch sử/ghi chú admin; khôi phục là quyền admin.

  Guard cần có khi nối backend thật:

  - `Gửi duyệt` phải validate tên Mini App, mô tả, danh mục, logo/icon, thông tin marketplace, cấu hình template hoặc bundle.
  - `Thu hồi` chỉ hợp lệ khi chưa có đơn vị sử dụng.
  - `Xóa` chỉ hợp lệ với bản nháp và chưa có phụ thuộc.
  - Mọi transition quan trọng cần ghi audit log, cập nhật count trên tabs/KPI và phát notification phù hợp.

  ### 4. Wizard tạo Mini App

  Entry: từ `dnMiniApp` bấm `+ Tạo Mini App`.

  Wizard đầy đủ nên có 6 bước:

  1. Thông tin
  2. Chọn Template hoặc cách tạo
  3. Cấu hình
  4. API
  5. Upload
  6. Hoàn tất

  Mỗi bước cần giữ Enterprise sidebar, breadcrumb/back về danh sách Mini App, stepper ngang thể hiện active/completed/upcoming, và footer action gồm `Quay lại`, `Lưu nháp`, `Tiếp tục`.

  #### Step 1: Thông tin cơ bản

  Route: `dnCreateMiniApp`

  Mục tiêu là nhập thông tin Mini App và xem preview marketplace.

  Giao diện:

  - Cột trái là form nhập liệu.
  - Cột phải là preview panel sticky.
  - Form thông tin cơ bản: tên Mini App bắt buộc, mô tả ngắn bắt buộc, danh mục, tags.
  - Form hiển thị marketplace: upload logo, banner, ảnh giới thiệu.
  - Preview cập nhật realtime theo tên, mô tả, logo/banner; nếu chưa nhập thì dùng placeholder `Tên Mini App` và mô tả mẫu.

  Action:

  - `Lưu nháp`: lưu dữ liệu hiện tại dưới trạng thái `Bản nháp`.
  - `Tiếp tục`: sang `dnCreateMiniAppStep2`.

  #### Step 2: Chọn cách tạo

  Route: `dnCreateMiniAppStep2`

  Mục tiêu là chọn phương thức tạo Mini App.

  Lựa chọn:

  - `Dùng Template`: khởi tạo từ template marketplace.
  - `Tự Build`: doanh nghiệp tự phát triển giao diện Mini App và upload bundle/cấu hình tương ứng.

  Quy tắc UI:

  - Ban đầu chưa chọn option nào.
  - Cả 2 card ở trạng thái outline/unselected.
  - Chỉ card user chọn mới chuyển sang selected/active.
  - `Tiếp tục` disabled cho đến khi đã chọn 1 option.

  Action:

  - `Quay lại`: về `dnCreateMiniApp`.
  - Chọn `Dùng Template` rồi `Tiếp tục`: sang `dnCreateMiniAppStep3`.
  - Chọn `Tự Build` rồi `Tiếp tục`: sang bước cấu hình/upload bundle hoặc placeholder tự build nếu chưa implement.

  #### Step 3: Chọn Template

  Route: `dnCreateMiniAppStep3`

  Mục tiêu là chọn template cụ thể trước khi tạo draft Mini App.

  Giao diện cần có:

  - Header `Danh sách mẫu` hoặc `Chọn Template`.
  - Search theo tên template.
  - Filters: danh mục, loại template, sắp xếp.
  - Grid card template.
  - Panel tóm tắt `Đã chọn`.
  - Khu `Lưu ý quan trọng`.

  Template card cần hiển thị ảnh preview, tên template, mô tả ngắn, danh mục/loại, số màn hình/component hoặc lượt dùng nếu có, nút `Chọn`, nút/icon preview ảnh và nút `Xem mẫu`. Card đã chọn phải có active state rõ ràng.

  Tương tác:

  - Click `Chọn` cập nhật selected template và panel `Đã chọn`.
  - Click preview mở drawer hoặc popup xem mẫu.
  - `Tiếp tục` disabled nếu chưa chọn template.
  - Click `Tiếp tục` khi đã chọn mở confirmation popup.
  - Confirm tạo Mini App trạng thái `Bản nháp` và điều hướng đến chi tiết draft Mini App.
  - `Lưu nháp` lưu wizard state, không bắt buộc đã chọn template.

  ### 5. Chi tiết Mini App trong context Doanh nghiệp

  Màn chi tiết Mini App cần mở được từ danh sách doanh nghiệp và back về đúng nguồn. Khi mở từ portal Doanh nghiệp, sidebar/breadcrumb phải phản ánh context Doanh nghiệp thay vì Admin.

  Giao diện cần có:

  - Header thông tin Mini App: tên, app id, doanh nghiệp sở hữu, version hiện tại, trạng thái, ngày tạo/cập nhật.
  - Badge trạng thái và action hợp lệ theo status hiện tại.
  - Tabs: tổng quan, phiên bản, API sử dụng, đơn vị sử dụng/cài đặt, lịch sử hoạt động.
  - Tổng quan: mô tả, danh mục, tags, marketplace assets, thông tin publish.
  - Phiên bản: danh sách version, trạng thái version, ngày upload, người upload, ghi chú duyệt/từ chối.
  - API sử dụng: API name, method, endpoint, version, status.
  - Đơn vị sử dụng: danh sách đơn vị đã cài, version đang dùng, trạng thái cập nhật.
  - Lịch sử hoạt động: timeline các sự kiện tạo, chỉnh sửa, gửi duyệt, duyệt, từ chối, upload version, thu hồi.

  ### 6. Trạng thái Doanh nghiệp

  Object Doanh nghiệp có các trạng thái:

  ```text
  Chờ duyệt
  Hoạt động
  Tạm khóa
  Ngừng hoạt động
  ```

  Transition chính:

  ```text
  Chờ duyệt --Duyệt--> Hoạt động
  Hoạt động --Tạm khóa--> Tạm khóa
  Hoạt động --Ngừng--> Ngừng hoạt động
  Tạm khóa --Mở khóa--> Hoạt động
  Tạm khóa --Ngừng--> Ngừng hoạt động
  ```

  Extension nên có cho production:

  ```text
  Chờ duyệt --Từ chối + lý do--> Từ chối
  Từ chối --Nộp lại hồ sơ--> Chờ duyệt
  Ngừng hoạt động --Khôi phục có điều kiện--> Hoạt động
  ```

  Quy tắc:

  - Chỉ admin được duyệt, khóa, mở khóa hoặc ngừng doanh nghiệp.
  - Khóa/ngừng phải nhập lý do.
  - Ngừng doanh nghiệp cần kiểm tra Mini App/API đang phụ thuộc.
  - Khi trạng thái doanh nghiệp thay đổi, cần cập nhật khả năng truy cập của tài khoản doanh nghiệp và audit log.

  ### 7. Yêu cầu nghiệm thu UI/chức năng

  - Sidebar active đúng route Doanh nghiệp.
  - Top bar/breadcrumb hiển thị ở mọi màn sau đăng nhập.
  - Search/filter/tabs/pagination hoạt động ở màn danh sách.
  - Count trên tabs và KPI cập nhật sau mỗi transition.
  - Action column chỉ hiển thị action hợp lệ theo trạng thái.
  - Xóa draft Mini App remove row khỏi bảng.
  - Mở chi tiết và back về đúng nơi xuất phát.
  - Wizard step 2 không có lựa chọn active mặc định.
  - Wizard step 3 chỉ cho tiếp tục khi đã chọn template.
  - Modal/drawer có overlay, close button và không làm mất context trang gốc.
  - Empty state không làm vỡ layout.

  ## Màn hình Doanh nghiệp của role Quản trị viên

  Nhóm màn hình này phục vụ Quản trị viên quản lý các doanh nghiệp phát triển Mini App trên toàn nền tảng. Khác với role Doanh nghiệp chỉ thấy Mini App của chính mình, role Quản trị viên cần xem được toàn bộ doanh nghiệp, trạng thái phê duyệt, tình trạng hoạt động, Mini App trực thuộc, thành viên và lịch sử xử lý.

  ### 1. Danh sách Doanh nghiệp

  Route: `doanhNghiep`

  Mục tiêu là giúp Quản trị viên theo dõi, phê duyệt và kiểm soát trạng thái hoạt động của các doanh nghiệp.

  Giao diện cần có:

  - Header trang: title `Doanh nghiệp`, subtitle mô tả quản lý doanh nghiệp phát triển Mini App.
  - KPI cards: tổng doanh nghiệp, chờ duyệt, hoạt động, tạm khóa, ngừng hoạt động.
  - Search theo tên doanh nghiệp, mã số thuế, email liên hệ, người đại diện.
  - Filter bổ sung nếu cần: loại hình doanh nghiệp, lĩnh vực, tỉnh/thành, ngày đăng ký.
  - Tabs trạng thái có count: tất cả, chờ duyệt, hoạt động, tạm khóa, ngừng hoạt động.
  - Bảng dữ liệu gồm STT, doanh nghiệp, ngày đăng ký, lần cuối hoạt động, trạng thái, thao tác.
  - Pagination và chọn số dòng mỗi trang nếu danh sách lớn.
  - Empty state `Không có dữ liệu` khi search/filter không có kết quả.

  Cột `Doanh nghiệp` nên hiển thị tên doanh nghiệp, mã số thuế, email/người đại diện và summary nhanh như số Mini App, số developer/thành viên, số Mini App đã published. Cột trạng thái dùng badge màu rõ ràng: chờ duyệt là warning, hoạt động là success, tạm khóa/ngừng hoạt động là neutral hoặc muted. Cột thao tác chỉ hiện action hợp lệ với status hiện tại.

  ### 2. Status transition của Doanh nghiệp

  Các trạng thái chính:

  - `Chờ duyệt`: doanh nghiệp mới đăng ký, đang chờ admin kiểm tra hồ sơ.
  - `Hoạt động`: doanh nghiệp đã được duyệt và có thể quản lý/tạo/gửi duyệt Mini App.
  - `Tạm khóa`: doanh nghiệp bị khóa tạm thời; nên hạn chế đăng nhập hoặc thao tác publish theo chính sách hệ thống.
  - `Ngừng hoạt động`: doanh nghiệp đã bị dừng vận hành trên nền tảng; chỉ nên xem dữ liệu/lịch sử hoặc khôi phục có điều kiện nếu sản phẩm hỗ trợ.
  - `Từ chối`: nên bổ sung cho production để lưu rõ hồ sơ bị từ chối, dù prototype hiện tại có thể chưa tách status này.

  Transition chính:

  ```text
  Chờ duyệt --Duyệt--> Hoạt động
  Chờ duyệt --Từ chối + lý do--> Từ chối
  Từ chối --Nộp lại hồ sơ--> Chờ duyệt
  Hoạt động --Tạm khóa + lý do--> Tạm khóa
  Hoạt động --Ngừng + lý do--> Ngừng hoạt động
  Tạm khóa --Mở khóa--> Hoạt động
  Tạm khóa --Ngừng + lý do--> Ngừng hoạt động
  Ngừng hoạt động --Khôi phục có điều kiện--> Hoạt động
  ```

  Nếu giữ đúng prototype hiện tại, action `Từ chối` có thể chưa tạo status riêng và hồ sơ vẫn ở `Chờ duyệt`. Khi làm sản phẩm thật, nên bắt buộc nhập lý do từ chối và chuyển sang status `Từ chối` để doanh nghiệp có thể chỉnh sửa/nộp lại.

  ### 3. Quy tắc action theo status

  - Mọi trạng thái đều có `Xem`, mở `chiTietDoanhNghiep`.
  - `Chờ duyệt`: có `Duyệt` và `Từ chối`. `Duyệt` chuyển sang `Hoạt động`; `Từ chối` cần modal nhập lý do.
  - `Hoạt động`: có `Tạm khóa` và `Ngừng`. Cả hai action nên yêu cầu lý do và confirmation.
  - `Tạm khóa`: có `Mở khóa` và `Ngừng`. `Mở khóa` chuyển về `Hoạt động`.
  - `Ngừng hoạt động`: chỉ xem trong prototype; production có thể thêm `Khôi phục` nếu có quy trình rà soát điều kiện.
  - `Từ chối`: xem lý do, xem hồ sơ, chờ doanh nghiệp nộp lại hoặc admin cập nhật thủ công nếu hệ thống cho phép.

  Guard cần có:

  - Chỉ Quản trị viên có quyền phù hợp mới được duyệt, từ chối, khóa, mở khóa, ngừng hoặc khôi phục.
  - `Từ chối`, `Tạm khóa`, `Ngừng` bắt buộc nhập lý do.
  - `Ngừng` cần kiểm tra Mini App/API đang active, đơn vị sử dụng đang cài Mini App và các phụ thuộc thanh toán/hợp đồng nếu có.
  - Khi khóa/ngừng doanh nghiệp, cần xác định tác động đến tài khoản thành viên, Mini App đang published, API key/token và marketplace.
  - Mỗi transition phải ghi audit log gồm người thao tác, thời gian, trạng thái cũ, trạng thái mới, lý do và ghi chú.
  - Sau transition phải cập nhật KPI, count trên tabs, dòng bảng và timeline hoạt động.

  ### 4. Chi tiết Doanh nghiệp

  Route: `chiTietDoanhNghiep`

  Mục tiêu là cung cấp góc nhìn 360 độ về một doanh nghiệp để admin kiểm tra hồ sơ, Mini App, thành viên và lịch sử hoạt động.

  Header cần có:

  - Breadcrumb từ Dashboard hoặc danh sách `Doanh nghiệp`.
  - Back button về đúng danh sách nguồn và giữ filter/tab/page nếu có thể.
  - Header card gồm tên doanh nghiệp, mô tả ngắn, status badge, mã số thuế.
  - Summary nhanh: số thành viên, số Mini App, số Mini App published, số người dùng/đơn vị sử dụng.
  - Action theo trạng thái hiện tại: duyệt, từ chối, tạm khóa, mở khóa, ngừng, khôi phục nếu phù hợp.

  Tabs cần có:

  - `Tổng quan`
  - `Mini App`
  - `Thành viên`
  - `Hoạt động`

  Tab `Tổng quan`:

  - Card thông tin doanh nghiệp: tên, mã số thuế, loại hình, lĩnh vực, website, địa chỉ, mô tả.
  - Card thông tin tài khoản: trạng thái, ngày tham gia, lần cuối hoạt động, tổng Mini App, đã publish.
  - Card người đại diện: họ tên, email, số điện thoại, chức vụ.
  - Card hồ sơ/pháp lý nếu có: giấy phép, file đính kèm, ngày xác minh, người xác minh.

  Tab `Mini App`:

  - Search Mini App.
  - Filter danh mục và trạng thái.
  - Bảng gồm STT, Mini App, danh mục, version, trạng thái, đơn vị sử dụng/lượt cài, thao tác.
  - `Xem` mở `chiTietMiniApp` trong context Admin và back về chi tiết doanh nghiệp.
  - Empty state nếu doanh nghiệp chưa có Mini App.

  Tab `Thành viên`:

  - Search theo tên/email.
  - Filter vai trò và trạng thái tài khoản.
  - Bảng gồm thành viên, email, vai trò, số Mini App tham gia, ngày tham gia, lần cuối hoạt động, trạng thái, thao tác.
  - `Xem` mở `chiTietThanhVien` hoặc drawer xem nhanh; back quay lại đúng doanh nghiệp.
  - Có thể thêm action khóa/mở tài khoản thành viên nếu quyền admin cho phép.

  Tab `Hoạt động`:

  - Filter loại hoạt động: tất cả, phê duyệt, thành viên, Mini App, cập nhật, gửi hồ sơ, khóa/mở khóa.
  - Filter thời gian: tất cả, hôm nay, 7 ngày qua, 30 ngày qua.
  - Timeline có ngày, giờ, người thực hiện, icon loại sự kiện, tiêu đề và chi tiết dạng label/value.
  - Các transition quan trọng cần hiển thị rõ trạng thái cũ, trạng thái mới, lý do và người thao tác.

  ### 5. Modal, drawer và confirmation

  Các action thay đổi trạng thái cần confirmation để tránh thao tác nhầm:

  - `Duyệt`: modal xác nhận duyệt doanh nghiệp, có thể nhập ghi chú nội bộ.
  - `Từ chối`: modal bắt buộc nhập lý do từ chối, lý do này cần hiển thị cho doanh nghiệp khi họ nộp lại hồ sơ.
  - `Tạm khóa`: modal bắt buộc nhập lý do, cảnh báo ảnh hưởng đến đăng nhập/thao tác của doanh nghiệp.
  - `Mở khóa`: modal xác nhận khôi phục trạng thái hoạt động.
  - `Ngừng`: modal cảnh báo tác động đến Mini App/API đang phụ thuộc, nên yêu cầu lý do và confirmation mạnh hơn.
  - `Khôi phục`: modal xác nhận điều kiện khôi phục, chỉ hiện nếu sản phẩm hỗ trợ.

  Drawer xem nhanh có thể dùng cho thành viên hoặc Mini App để admin kiểm tra nhanh mà không mất context của chi tiết doanh nghiệp. Drawer phải có overlay, close button, tiêu đề rõ ràng và action mở trang chi tiết đầy đủ.

  ### 6. Yêu cầu nghiệm thu cho role Quản trị viên

  - Sidebar Admin active đúng mục `Doanh nghiệp`.
  - Search match được tên doanh nghiệp, MST, email và người đại diện.
  - Tabs trạng thái hiển thị đúng count sau search/filter và sau transition.
  - Action column chỉ hiển thị action hợp lệ theo trạng thái hiện tại.
  - `Duyệt`, `Tạm khóa`, `Mở khóa`, `Ngừng` cập nhật trạng thái ngay trên UI sau khi xác nhận.
  - Các action cần lý do không cho submit khi bỏ trống lý do.
  - Chi tiết doanh nghiệp back về đúng nguồn, đúng tab/filter/page trước đó.
  - Từ chi tiết doanh nghiệp mở Mini App/Thành viên rồi quay lại không mất context.
  - Timeline hoạt động ghi nhận transition vừa thực hiện.
  - Empty state, loading state và error state không làm vỡ layout.
  
