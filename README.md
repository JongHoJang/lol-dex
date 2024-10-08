<p align = "center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=LOL-DEX&fontSize=70" />
</p>
<br>



# LOL-DEX

Riot API를 활용한 리그 오브 레전드 정보 앱 만들기.<br>
NextJS와 TypeScript를 사용하여 Riot API를 활용한 어플리케이션.<br/>

<br/>

## ⚡ 배포 링크

> ### [LOL-DEX] (https://lol-dex-pi.vercel.app/)

<br/>

<details>
<summary>파일 구조</summary>
<br/>

```plaintext
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.tsx
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📜Footer.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂public
 ┣ 📂styles
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Items.ts
 ┣ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
 ┗ 📜.DS_Store
```
</details>
<br/>

## 💻 개발환경

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)



<br/>

## 📌 필수 구현 사항


### 1. **프로젝트 셋업 및 기본 구조 구성**
- [x]  Next.js와 TypeScript를 사용하여 프로젝트를 생성하고, Tailwind CSS를 설치합니다.
- [x]  `src/` 디렉토리와 `@/*` import alias를 설정하여 프로젝트 구조를 정리합니다.


### **2. 레이아웃 및 네비게이션 구성**

- [x]  **글로벌 레이아웃**을 설정
- [x]  네비게이션 메뉴를 구현하여 페이지 간 이동이 가능하도록 함

### 3. 데이터 Fetching

- [x]  `types/` 디렉토리에 필요한 타입 정의
- [x]  **Server Actions**를 활용하여 `/champions`, `/items`, `/rotation` 등의 데이터 패칭을 **서버 컴포넌트** 내에서 직접 처리
- [x]  **Route Handlers**는 클라이언트 사이드 렌더링(CSR)에서만 사용하는 `/api/rotation` 엔드포인트 하나만 구현 및 유지
- [x]  **fetch**를 사용하여 외부 API를 호출하고, **적절한 에러 처리를 수행**

### **4. 각 페이지 구현 및 렌더링 방식 적용**

- [x]  **챔피언 목록 페이지 (`/champions`)**
    - [x]  ISR 방식으로 구현
    - [x]  챔피언 목록을 표시
- [x]  **챔피언 상세 페이지 (`/champions/[id]`)**
    - [x]  동적 렌더링 방식으로 구현
    - [x]  챔피언의 상세 정보를 표시
    - [x]  해당 페이지에서 **동적 메타데이터**를 생성하도록 합니다.
- [x]  **챔피언 로테이션 페이지 (`/rotation`)**
    - [x]  클라이언트 사이드 렌더링으로 구현
    - [x]  로테이션 정보를 표시
- [x]  **아이템 목록 페이지 (`/items`)**
    - [x]  SSG 방식으로 구현
    - [x]  아이템 목록을 표시합

### **5. 최종 점검 및 배포**

- [x]  vercel 배포
- [x]  배포 후 **모든 기능이 정상적으로 작동하는지 확인**(자체 QA)
- [x]  코드 품질 개선
- [x]  최종 결과물에 `any` 타입이 있는지 검토



## 😊 트러블 슈팅

TypeScript에서 배열 타입과 'undefined' 타입 문제 해결하기<br/>
(https://lol-dex-pi.vercel.app/)](https://jangjh9414.tistory.com/269)<br/>





## 😊 프로젝트 소감


언제나 새로운 API를 활용할때면 당황하게 되는 것 같다. 이번 프로젝트에서 Riot API를 처음 접하면서 당황했던 기억이 있다. API마다 API-KEY가 필요한 경우와 그렇지 않은 경우로 나뉘고, 매일 새로운 KEY를 발급받아야하는 등 새로운 API에 적응하는데 시간이 좀 걸렸던 것 같다.<br/>
그동안 React에 조금 익숙해졌다고 생각했는데, Next.js와 TypeScript를 처음 사용하면서 다시 처음 React를 배우는 기분이 조금 들었다. 하지만 이번 프로젝트를 통해 점차 Next.js와 TypeScript의 사용법을 익힐 수 있었다.


데이터를 패칭할 때 `Route Handlers`, `Server Actions` 등 다양한 방법을 시도하면서 어려움을 겪었던 부분도 있었고, 다시 복습이 필요한 부분들도 많았지만, 이번 프로젝트를 통해 다양한 렌더링 방식(ISR, 동적 렌더링, 클라이언트 사이드, SSG)을 활용할 수 있어 좋은 경험이 되었다.



<br/>
