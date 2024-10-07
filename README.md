![](https://velog.velcdn.com/images/star1024/post/56b3e2cc-eda3-4725-aa28-b18405bd6780/image.png)

# LOL-DEX

> Riot API를 활용한 리그 오브 레전드 정보 앱 만들기.<br>
> NextJS와 TypeScript를 사용하여 Riot API를 활용한 어플리케이션.<br/>

<br/>

## ⚡ 배포 링크

> ### [LOL-DEX] (https://monggleroad.vercel.app/)](https://lol-dex-pi.vercel.app/)

<br/>

## 📦 폴더 구조

<details>
<summary>폴더구조</summary>
<br/>
📦moggleRoad-Project<br/>
┣ 📂public<br/>
┃ ┗ 📜vite.svg<br/>
┣ 📂src<br/>
┃ ┣ 📂api<br/>
┃ ┃ ┣ 📜auth.js<br/>
┃ ┃ ┣ 📜fetchCoordinatesByRegion.js<br/>
┃ ┃ ┣ 📜makeRoute.js<br/>
┃ ┃ ┗ 📜pathDataSave.js<br/>
┃ ┣ 📂assets<br/>
┃ ┃ ┣ 📜home.png<br/>
┃ ┃ ┣ 📜loadingImage.png<br/>
┃ ┃ ┣ 📜logo.png<br/>
┃ ┃ ┣ 📜react.svg<br/>
┃ ┃ ┣ 📜searchHome.png<br/>
┃ ┃ ┗ 📜target-icon.png<br/>
┃ ┣ 📂axiosInstance<br/>
┃ ┃ ┗ 📜join.js<br/>
┃ ┣ 📂components<br/>
┃ ┃ ┣ 📜AuthForm.jsx<br/>
┃ ┃ ┣ 📜CategorySearch.jsx<br/>
┃ ┃ ┣ 📜MainPageMap.jsx<br/>
┃ ┃ ┣ 📜MainPageSide.jsx<br/>
┃ ┃ ┣ 📜Modal.jsx<br/>
┃ ┃ ┣ 📜Nav.jsx<br/>
┃ ┃ ┣ 📜NavBottom.jsx<br/>
┃ ┃ ┣ 📜ProtectedRoute.jsx<br/>
┃ ┃ ┣ 📜RegionSearchInput.jsx<br/>
┃ ┃ ┣ 📜SaveUserRouteInfo.jsx<br/>
┃ ┃ ┣ 📜SearchContent.jsx<br/>
┃ ┃ ┣ 📜SearchList.jsx<br/>
┃ ┃ ┣ 📜SearchPagination.jsx<br/>
┃ ┃ ┗ 📜WalkPath.jsx<br/>
┃ ┣ 📂hooks<br/>
┃ ┃ ┗ 📜useCurrentLocation.js<br/>
┃ ┣ 📂pages<br/>
┃ ┃ ┣ 📜CanvasComponent.jsx<br/>
┃ ┃ ┣ 📜Home.jsx<br/>
┃ ┃ ┣ 📜Login.jsx<br/>
┃ ┃ ┣ 📜MainPage.jsx<br/>
┃ ┃ ┣ 📜Search.jsx<br/>
┃ ┃ ┣ 📜SignUp.jsx<br/>
┃ ┃ ┗ 📜WalkPathPage.jsx<br/>
┃ ┣ 📂shared<br/>
┃ ┃ ┗ 📜Router.jsx<br/>
┃ ┣ 📂zustand<br/>
┃ ┃ ┣ 📜authStore.js<br/>
┃ ┃ ┣ 📜geoLocationStore.js<br/>
┃ ┃ ┣ 📜routeDataStore.js<br/>
┃ ┃ ┗ 📜userRouteStore.js<br/>
┃ ┣ 📜App.jsx<br/>
┃ ┣ 📜index.css<br/>
┃ ┗ 📜main.jsx<br/>
┣ 📜.env<br/>
┣ 📜.gitignore<br/>
┣ 📜.prettierrc<br/>
┣ 📜db.json<br/>
┣ 📜eslint.config.js<br/>
┣ 📜index.html<br/>
┣ 📜package-lock.json<br/>
┣ 📜package.json<br/>
┣ 📜postcss.config.js<br/>
┣ 📜README.md<br/>
┣ 📜tailwind.config.js<br/>
┣ 📜vite.config.js<br/>
┗ 📜yarn.lock<br/>
</details>
<br/>

## 💻 개발환경

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>



<br/>

## 📌 주요기능

### 1. 회원 페이지

#### 로그인/회원가입

> ![](https://velog.velcdn.com/images/star1024/post/9c94225b-ef52-46ba-a69b-8d3d48aa172a/image.gif)
> `Zustand`과 `Axios`를 활용해 회원가입과 로그인 기능을 구현하였다.

#### 마이페이지

> ![](https://velog.velcdn.com/images/star1024/post/2fb09d74-922f-4ef1-bf05-4e2b3bdf2ff1/image.gif)
> 마이페이지에서 내가 생성한 몽글로드를 한 눈에 볼 수 있고, 클릭하면 해당 이미지를 다운로드할 수 있다.

### 2. 검색 페이지

#### NAV BAR 를 통한 카테고리 검색 (애견카페/동물병원/애견호텔)

>![](https://velog.velcdn.com/images/star1024/post/eded5887-a897-437a-87a4-1e480de126b0/image.gif)
> NAV 바를 이용해서 지정된 위치의 애견카페, 동물병원, 애견호텔을 검색할 수 있다.

#### 지역별 애견카페/동물병원/애견호텔 검색

> ![](https://velog.velcdn.com/images/star1024/post/5553d9aa-d807-4348-8b2d-2f529b1f55a4/image.gif)
> 지역 검색을 통해 원하는 지역의 애견카페, 동물병원, 애견호텔을 검색할 수 있다.<br/>

> ![page_mini](https://github.com/user-attachments/assets/5e933ff0-c719-47d2-af87-3637502e816b)
> `페이지네이션`을 통해 검색결과가 랜더링 되도록 처리했다<br/>

### 3. 산책로 페이지

#### 생성된 몽글로드 검색

> ![search_road](https://github.com/user-attachments/assets/687d2a8b-e2bc-4a47-9aea-d70bf4b59d3f)
> DB에 저장된 모든 몽글로드를 검색할 수 있다.<br/>

#### 몽글로드 만들기

> ![drawing_save (1)](https://github.com/user-attachments/assets/51f78dc9-278f-4806-821e-c6a44df84d1c)
> `카카오 선 그리기 API`, `Drawing Manager`를 사용해 몽글로드를 그릴 수 있다.<br/>
> 그리는 도중 언제든지 새로운 점을 이용해 도형을 자유롭게 그릴 수 있다. 맵에 보여질 몽글로드의 색상을 선택할 수 있다.<br/>
> `Zustand`을 이용해 데이터를 전역적으로 관리하여 저장할 수 있도록 구현.<br/>

> ![draw_reset](https://github.com/user-attachments/assets/125eb856-f295-47bf-ad97-15c3e216f5e0)
> 몽글로드를 그리는 도중, `다시 그리기` 혹은 `ESC 키`를 이용해 선을 처음부터 다시 그릴 수 있다.<br/> 

## 🏹 트러블 슈팅

<details>
<summary>데이터가 undefined로 저장되는 상황</summary>
<br/>
  
![](https://velog.velcdn.com/images/star1024/post/cf0ebbba-6262-48b4-a145-e6310d4ebac5/image.png)
<br/>
<br/>
콘솔로 확인했을 때 position 데이터는 잘 담기는 반면 폼 작성 후 제출하면 db.json에 다른 데이터는 저장이 되지 않았다. <br/>
`SaveUserRouteInfo` 컴포넌트에서 json-server에 저장할 때, `routeFormData` 는 잘 전달되지 않아 거리만 저장하는 상황으로 파악했다. <br/>

- `routeData` 가 null 또는 undefined인 경우를 처리하는 로직을 추가하여 컴포넌트가 안전하게 랜더링 될 수 있도록 수정했다.
  ![](https://velog.velcdn.com/images/star1024/post/52b09d99-8c9b-4f1f-9800-ed10b78d2656/image.png)
- `Zustand` 상태 불러오기 방식 수정: Zustand의 상태를 가져올 때, 기존처럼 개별적으로 가져오는 대신
  하나의 객체로 가져오도록 수정했다.<br/>
  ![](https://velog.velcdn.com/images/star1024/post/78cdb36f-1122-46f0-ad81-3e50e2aefca3/image.png)
</details>

<br/>

## 😊 프로젝트 소감

### ✨ 장종호(팀장)<br/>

```
카카오 지도 API를 활용하는 과정이 재밌었다. 비록 세부적인 부분을 하나하나 완전히 이해하지는 못했지만,
점차 익숙해지면서 다양한 곳에서 활용 할 수 있어서 더 재미를 느꼈던 것 같다.
특히, 필요에 따라 API의 특정 부분을 수정하고 적용하면서 어떤 방식이 최적인지
깊이 고민할 수 있었던 점이 어려우면서도 배울 점이 많았던 것 같다.
원하던 기능이 API상에서 막혀있는 경우 어떻게 하면 우회해서 기능을 구현할지에 대한 고민을 많이 해 볼 수 있었다.
```

### ✨ 김하영<br/>

```
API나 json-server 같은 데이터를 읽는것에 어려움을 많이 느끼고 있었는데
이번기회를 통해서 console로 확인해보는 습관을 가질 수 있었던 것 같다
```

### ✨ 신한별<br/>

```
생각보다 API 문서가 엄청 친절하고, 다양한 기능이 있어서 좋았다.
다음에는 다른 API를 써서 프로젝트를 진행해보고싶다.
```

### ✨ 임기철<br/>

```
지도 API를 처음 사용해봐서 다양한 경험을 할 수 있었고 좀 더 많은걸 하고 싶었지만 시간이 부족해서 아쉬웠다.
```

### ✨ 정민지<br/>

```
지도 API 적용을 어렵게 생각했는데 API 문서와 함께 차근차근 하면 되는구나~ 를 느껴서 좋았다.
```

<br/>
