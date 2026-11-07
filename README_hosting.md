Dreamcore Web Hosting Kit – 배포용 안내

목표
- 이 파일 세트를 통해 다수의 사용자가 접속 가능한 Dreamcore Web Starter Kit 웹사이트를 운영하는 방법을 안내합니다. 로블록스 없이, 간단한 웹 기술로 구동되는 웹 기반 3D 체험입니다.

구성
- index.html: A-Frame 기반 3씬 Entrence / Mirror Hall / Final Door 구성
- main.js: 씬 전환 및 분위기 애니메이션 로직
- README_hosting.md: 배포 가이드 및 추천 호스팅 옵션 안내

배포 옵션
1) GitHub Pages(무료)
- steps:
  - GitHub에 새 저장소를 만듭니다.
  - 이 저장소에 index.html, main.js, README_hosting.md를 업로드합니다.
  - 저장소의 Settings > Pages에서 브랜치를 main으로 설정하고 루트(/)를 게시 디렉토리로 선택합니다.
  - 도메인(선택) 연결 및 HTTPS 적용이 자동으로 됩니다.

2) Netlify(무료 시작)
- steps:
  - Netlify에 로그인하고 새 사이트 만들기에서 GitHub 저장소를 연결합니다.
  - 빌드 설정은 필요 없으며, Publish directory를 루트로 둡니다.
  - 배포가 끝나면 URL이 생성됩니다. 도메인 연결도 가능.

3) Vercel(무료 시작)
- steps:
  - Vercel에 로그인하고 새 프로젝트에서 GitHub 저장소 연결
  - 기본 설정으로 배포되며, 도메인 연결 및 SSL이 자동으로 적용됩니다.

4) 로컬 테스트 및 프로덕션의 차이
- 이 킷은 기본적으로 CDN에서 A-Frame 라이브러리를 로드합니다. 따라서 인터넷 연결이 필요합니다. 오프라인 사용을 원하면 aframe.min.js를 로컬에 포함하는 번들을 만들어야 합니다.

권장 구성
- 다수의 사용자가 접속하는 프로덕션 환경의 경우 Netlify나 GitHub Pages를 추천합니다. 원클릭 배포를 원하시면 Netlify를 추천합니다.

다음 단계 제안
- 원하시면 이 Hosting Kit을 ZIP으로 묶어 드리거나, 바로 사용할 수 있도록 GitHub Pages/Netlify용 저장소를 템플릿 형태로 만들어 드리겠습니다. 어떤 방식으로 진행하고 싶으신가요?

참고
- index.html의 라이브러리 로딩은 aframe.min.js를 CDN에서 로드합니다. 필요 시 로컬 번들을 붙이는 안내도 같이 드리겠습니다.
