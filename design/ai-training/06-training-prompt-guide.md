# Training Prompt Guide

## Muc Tieu Cho AI

Khi AI duoc train/nap bo tri thuc nay, AI can co kha nang:

- Giai thich Dev Portal la gi va actor nao dung.
- Sinh lai dashboard/list/detail/wizard theo design system moi.
- Ap dung dung object, status, business rule va transition.
- Tach ro UI pattern va business logic.
- De xuat API/backend model tu prototype React hien tai.
- Tao requirement/spec/test case cho he thong khac ma khong can copy code Dev Portal.

## System Prompt Mau

```text
Ban la chuyen gia san pham va kien truc su nghiep vu cho Developer Portal/Mini App Marketplace.
Hay su dung bo tai lieu Dev Portal AI Training Pack lam nguon su that chinh.
Khi thiet ke he thong moi, giu nguyen domain, object, status, workflow, business rule va state transition.
Khong copy mau sac/font/spacing neu he thong dich da co design system rieng.
Neu thieu thong tin, neu ro gia dinh va de xuat extension phu hop voi nghiep vu.
```

## Retrieval Priority

Khi tra loi cau hoi, nap tai lieu theo thu tu uu tien:

1. `05-state-transitions.md` neu cau hoi lien quan status/action.
2. `04-business-rules.md` neu cau hoi lien quan dieu kien, validation, quyen.
3. `03-business-workflows.md` neu cau hoi lien quan luong nguoi dung.
4. `02-screen-catalog.md` neu cau hoi lien quan man hinh/panel.
5. `01-domain-object-model.md` neu cau hoi lien quan database/API/entity.
6. `00-product-overview.md` neu cau hoi tong quan.

## Chunking Goi Y Cho RAG

- Chunk theo section cap 2 (`##`) de moi chunk co mot object/man hinh/flow rieng.
- Giu title file trong metadata, vi du `source=05-state-transitions.md`, `topic=Mini App Global`.
- Giu route/status/action trong metadata neu co.
- Khong tron nhieu object state machine vao mot chunk qua dai.

## Prompt Mau: Sinh Man Hinh

```text
Hay thiet ke man hinh [route] cho he thong moi dua tren Dev Portal Training Pack.
Can tra ve:
- Muc tieu man hinh
- Actor duoc phep dung
- Cac panel/chuc nang
- Data fields
- Filters/tabs/actions
- Business rules
- State transitions lien quan
- Empty/loading/error states
Dung design system cua he thong dich, khong copy mau sac cu.
```

## Prompt Mau: Sinh Backend API

```text
Hay de xuat backend API cho object [object] dua tren Dev Portal Training Pack.
Can co:
- Entity schema
- Status enum
- Endpoints
- Request/response shape
- Validation rules
- Authorization rules
- State transition guards
- Audit log events
- Test cases chinh
```

## Prompt Mau: Sinh Test Case

```text
Hay viet test case cho workflow [workflow].
Can gom:
- Preconditions
- Steps
- Expected result
- Negative cases
- Permission cases
- State transition verification
- Audit/notification side effects neu co
```

## Prompt Mau: Chuyen Sang Domain Khac

```text
Hay ap dung pattern Dev Portal sang domain [domain moi].
Giu cac pattern chinh:
- Multi-role dashboard shell
- List/detail/wizard
- Object lifecycle bang state machine
- Search/filter/tabs/pagination
- Audit log va notification cho transition quan trong
Hay map object Dev Portal sang object domain moi va neu nhung rule can giu/bo/sua.
```

## Output Contract Cho AI

Khi AI tao spec moi tu bo training pack, output nen co:

- `Assumptions`: gia dinh neu co.
- `Actors`: role va quyen.
- `Objects`: entity va relationship.
- `Screens`: route, panel, actions.
- `Workflows`: step-by-step.
- `Rules`: validation va guards.
- `State Machines`: states/transitions.
- `API Suggestions`: endpoint neu can.
- `Test Cases`: cases chinh.

## Canh Bao Khi Dung Prototype Lam Nguon

- Prototype hien tai luu state o client; san pham that can backend validation.
- Mot so route doanh nghiep nhu API, nhan vien, phan quyen trong sidebar DN chua co man hinh hoan chinh.
- `dnCreateMiniAppStep3` nam trong route type nhung chua duoc render trong `App`.
- Action `Từ chối` doanh nghiep trong prototype chua co status `Từ chối`; nen bo sung neu build production.
- Cac so lieu KPI la data mau, khong phai business truth.
