# Product Overview

## Muc Tieu

Dev Portal la dashboard van hanh he sinh thai Mini App va API. He thong phuc vu viec quan ly doanh nghiep phat trien Mini App, Mini App duoc phat hanh len marketplace, don vi su dung da cai dat Mini App, API duoc cung cap cho Mini App, mau Mini App, ho tro, bao cao va cau hinh he thong.

## Actor Chinh

### Quan Tri Vien Nen Tang

Quan tri vien co quyen nhin toan he sinh thai:

- Theo doi dashboard tong quan.
- Duyet, khoa, mo khoa, ngung doanh nghiep.
- Duyet, tu choi, tam an, khoi phuc Mini App.
- Xem chi tiet doanh nghiep, thanh vien, Mini App, don vi su dung, API.
- Quan ly API, tai lieu API, version API va Mini App dang su dung API.
- Theo doi API monitoring.
- Tao, sua, phat hanh mau Mini App.
- Quan ly ticket ho tro, bao cao va cau hinh he thong.

### Doanh Nghiep

Doanh nghiep la ben phat trien va so huu Mini App:

- Xem dashboard rieng cua doanh nghiep.
- Quan ly Mini App cua minh.
- Tao Mini App moi bang wizard.
- Chon tao tu template hoac tu build.
- Gui Mini App len quy trinh kiem duyet.
- Xem chi tiet Mini App va trang thai xet duyet/phat hanh.

## Pham Vi Prototype Hien Tai

Prototype hien tai la SPA, state nam trong React component, chua co backend that. Cac object, status va action dang la data mau nhung the hien ro business semantics. Khi chuyen sang san pham that, can tach thanh API, database, audit log va authorization.

## Shell Va Dieu Huong

Sau dang nhap, moi man hinh dung dashboard shell:

- Sidebar co dinh ben trai.
- Top bar co tieu de route, thong bao, cau hinh, avatar.
- Vung noi dung scroll doc lap.
- Admin va Doanh nghiep co sidebar khac nhau.

Admin route map:

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
```

Doanh nghiep route map:

```text
dnDashboard
dnMiniApp
dnCreateMiniApp
dnCreateMiniAppStep2
dnCreateMiniAppStep3
```

## UX Contract

- Ung dung la dashboard van hanh, khong phai landing page.
- Man dau sau login phai la man co du lieu, KPI, bang, filter va hanh dong.
- Thay doi search/filter/tab phai reset ve page 1.
- List screen phai co empty state khi khong co du lieu.
- Detail screen phai back ve dung nguon mo truoc do.
- Status badge phai dung label ro rang va nhom mau success/warning/danger/neutral.
