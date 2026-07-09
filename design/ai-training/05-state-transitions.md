# State Transitions

File nay mo ta state machine cua cac object chinh. Khi build backend that, moi transition nen co authorization, validation, audit log va notification.

## Doanh Nghiep

States:

```text
Chờ duyệt
Hoạt động
Tạm khóa
Ngừng hoạt động
```

Transitions:

```text
Chờ duyệt --Duyệt--> Hoạt động
Chờ duyệt --Từ chối--> Chờ duyệt (prototype)
Hoạt động --Tạm khóa--> Tạm khóa
Hoạt động --Ngừng--> Ngừng hoạt động
Tạm khóa --Mở khóa--> Hoạt động
Tạm khóa --Ngừng--> Ngừng hoạt động
```

Recommended production extension:

```text
Chờ duyệt --Từ chối + lý do--> Từ chối
Từ chối --Nộp lại hồ sơ--> Chờ duyệt
Ngừng hoạt động --Khôi phục có điều kiện--> Hoạt động
```

Guard rules:

- Chi admin moi duoc duyet/khoa/mo khoa/ngung.
- Khoa/ngung can ly do.
- Ngung nen kiem tra Mini App/API dang phu thuoc.

## Mini App Global

States:

```text
Bản nháp
Chờ duyệt
Đã xuất bản
Từ chối
Tạm ẩn
```

Admin transitions:

```text
Chờ duyệt --Duyệt--> Đã xuất bản
Chờ duyệt --Từ chối--> Từ chối
Đã xuất bản --Tạm ẩn--> Tạm ẩn
Tạm ẩn --Khôi phục--> Đã xuất bản
```

Enterprise transitions:

```text
Bản nháp --Gửi duyệt--> Chờ duyệt
Bản nháp --Xóa--> Deleted
Chờ duyệt --Rút yêu cầu--> Bản nháp
Từ chối --Gửi lại--> Chờ duyệt
Đã xuất bản --Thu hồi [donViSuDung == 0]--> Bản nháp
Đã xuất bản --Upload Version--> Version Draft/Review Flow
```

Recommended version sub-flow:

```text
VersionDraft --SubmitReview--> VersionPendingReview
VersionPendingReview --Approve--> VersionPublished
VersionPendingReview --Reject--> VersionRejected
VersionRejected --Resubmit--> VersionPendingReview
```

Guard rules:

- `Thu hồi` chi hop le neu chua co don vi su dung.
- `Xóa` chi hop le voi ban nhap va chua co phu thuoc.
- `Gửi duyệt` can validate thong tin marketplace, icon/logo, bundle/template config.
- `Duyệt` can kiem tra security, API permission, UI metadata va version.

## Create Mini App Wizard

Wizard states:

```text
Step1_ThongTin
Step2_ChonCachTao
Step3_ChonTemplateOrBuildConfig
Step4_CauHinhOrThanhToan
Step5_XacNhanOrUpload
Step6_HoanTat
```

Prototype route states:

```text
dnCreateMiniApp --Tiếp tục--> dnCreateMiniAppStep2
dnCreateMiniAppStep2 --Back--> dnCreateMiniApp
dnCreateMiniAppStep2 --Select template--> method=template
dnCreateMiniAppStep2 --Select self_build--> method=self_build
```

Guards:

- Step 1 can save draft.
- Step 2 requires `method != null` before continuing.
- Chua co selection thi khong co card nao duoc style active.

## Don Vi Su Dung

States:

```text
Hoạt động
Tạm khóa
Ngừng hoạt động
```

Transitions:

```text
Hoạt động --Tạm khóa--> Tạm khóa
Tạm khóa --Kích hoạt lại--> Hoạt động
Ngừng hoạt động --Kích hoạt lại có điều kiện--> Hoạt động
Hoạt động --Ngừng--> Ngừng hoạt động
```

Side effects:

- Khi don vi bi tam khoa, Mini App da cai nen chuyen sang khong kha dung cho user cua don vi.
- Khi kich hoat lai, can kiem tra han su dung, license va version Mini App.

## Installed Mini App At Don Vi

States:

```text
Hoạt động
Tạm ngừng
```

Transitions:

```text
Hoạt động --Don vị bị khóa hoặc app bị ẩn--> Tạm ngừng
Tạm ngừng --Don vị/app được kích hoạt lại--> Hoạt động
```

Guard rules:

- Neu Mini App global la `Tạm ẩn`, installed app khong nen active.
- Neu don vi la `Tạm khóa`, installed app khong nen active.

## API

States:

```text
Draft
Published
```

Transitions:

```text
Draft --Publish--> Published
Published --Create new draft version--> DraftVersion
Published --Deprecate/Archive--> Archived (recommended extension)
```

Recommended production extension:

```text
Draft --SubmitReview--> PendingReview
PendingReview --Approve--> Published
PendingReview --Reject--> Rejected
Published --Deprecate--> Deprecated
Deprecated --Archive--> Archived
```

Guard rules:

- Publish requires endpoint, method, version and OpenAPI/Swagger document.
- Production Mini App should only use `Published`.
- Breaking changes should create new version, not mutate published version silently.

## Template

States:

```text
draft
published
```

Transitions:

```text
draft --Phát hành--> published
published --Sửa--> published updated
published --Tạo bản nháp mới--> draft
draft --Xóa--> Deleted
published --Gỡ phát hành--> draft or archived (recommended)
```

Guard rules:

- Published template should have name, category, description and at least one designed screen.
- Deleting published template should be blocked if used by active Mini App.

## Ho Tro

States:

```text
Chờ xử lý
Đang xử lý
Đã hoàn thành
```

Transitions:

```text
Chờ xử lý --Nhận xử lý--> Đang xử lý
Đang xử lý --Hoàn thành--> Đã hoàn thành
Đang xử lý --Mở lại/chuyển lại--> Chờ xử lý
Đã hoàn thành --Mở lại--> Đang xử lý
```

Guard rules:

- Ticket muc do `Cao` nen duoc uu tien.
- Hoan thanh nen co ghi chu xu ly.

## Quan Ly He Thong

Configuration state is not a finite workflow but changes should produce audit events:

```text
ConfigValue(old) --Update by Admin--> ConfigValue(new) + AuditLog
```

Guard rules:

- Thay doi bao mat nen yeu cau role admin cao.
- Thay doi thong bao nen validate kenh gui.
- Sao luu nen co lich va trang thai lan chay gan nhat.
