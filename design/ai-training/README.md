# Dev Portal AI Training Pack

Bo tai lieu nay gom cac file chuan hoa nghiep vu Dev Portal de dung cho RAG, fine-tune, agent prompt hoac chuyen giao sang he thong khac. Noi dung duoc tong hop tu code hien tai trong `src/app/App.tsx` va tai lieu thiet ke trong `design/`.

## Cach Su Dung

Doc theo thu tu:

1. `00-product-overview.md` - Tong quan san pham, actor, pham vi va nguyen tac UX.
2. `01-domain-object-model.md` - Cac object chinh, truong du lieu, quan he.
3. `02-screen-catalog.md` - Danh muc man hinh theo route/panel.
4. `03-business-workflows.md` - Cac luong nghiep vu quan trong.
5. `04-business-rules.md` - Rule, dieu kien hien thi, filter, pagination, quyen thao tac.
6. `05-state-transitions.md` - State machine cua tung object.
7. `06-training-prompt-guide.md` - Huong dan dua bo tri thuc nay vao AI.

## Nguon Hien Tai

- `src/app/App.tsx`: single-page prototype chua route, object mau, state va action.
- `design/developer-portal-feature-export.md`: blueprint chuc nang/UI.
- `design/prototype-ui.md`: visual identity va design system baseline.

## Nguyen Tac Chuyen Giao Sang He Thong Khac

- Giu lai domain, object, status, luong va dieu kien nghiep vu.
- Khong bat buoc copy mau sac, font, spacing neu he thong dich da co design system rieng.
- Moi list screen nen giu pattern: KPI, search, filter, status tabs, table, action column, empty state, pagination.
- Moi detail screen nen giu pattern: breadcrumb/back, header thong tin, tabs noi dung, bang con va modal/drawer khi can.
- Neu build that voi API/backend, cac transition trong `05-state-transitions.md` can duoc validate o server, khong chi o UI.
