# 자기소개 페이지 — 방문자가 응원을 남길 수 있는 개발자 프로필

단순한 소개글을 넘어, 방문한 사람이 응원 메시지를 남기고 실시간으로 쌓이는 것을 볼 수 있는 인터랙티브 자기소개 페이지입니다.

## 왜 만들었나요?

HTML/CSS/JS의 브라우저 렌더링 동작 원리를 직접 구현하며 익히기 위해 만들었습니다.

특히 JavaScript가 DOM을 어떻게 변경하는지, React의 Virtual DOM이 어떻게 최적화하는지를 이 프로젝트로 체감했습니다.

## 핵심 기능

- 방문자가 응원 메시지를 직접 입력하거나 랜덤 메시지로 응원 가능
- 응원 로그가 최신순으로 쌓이며 무지개 색상으로 구분
- 모바일/데스크탑 반응형 레이아웃

## 빠른 시작

```bash
git clone https://github.com/join5201/my-profile.git
cd my-profile
npm install
npm run dev
```

## 기술 스택

| 영역      | 기술                  | 선택 이유                  |
| --------- | --------------------- | -------------------------- |
| UI        | React 19 + TypeScript | 컴포넌트 기반 구조 학습    |
| 스타일    | Tailwind CSS          | 빠른 반응형 구현           |
| 빌드      | Vite                  | 빠른 개발 서버             |
| 시간 포맷 | Day.js                | 경량 날짜 라이브러리 (2KB) |

## 프로젝트 구조

```
src/
├── components/
│   ├── ProfileSection.tsx   # 프로필 영역
│   ├── CheerSection.tsx     # 응원 입력 영역
│   ├── LogSection.tsx       # 응원 로그 목록
│   └── LogItem.tsx          # 응원 로그 아이템
├── types/
│   └── index.ts             # 타입 정의
└── App.tsx
```

## 라이선스

MIT
