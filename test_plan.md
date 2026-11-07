Dreamcore Web Hosting Kit - GitHub Pages Deployment Verification Plan

목표
- Dreamcore Web Starter Kit이 GitHub Pages에서 구동되는지 확인하고, 기본 상호작용(시작 버튼 클릭, 씬 전환)이 정상 작동하는지 점검합니다.

전제 조건
- GitHub 계정으로 dreamcore-hosting 저장소가 생성되어 있고, GitHub Pages 배포 소스로 main 브랜치 또는 gh-pages 브랜치를 설정했습니다.
- index.html(7211557), main.js(패치 버전), README_hosting.md(7211779) 파일이 저장소에 포함되어 있습니다.
- 브라우저가 WebGL을 지원하고 인터넷 연결이 가능하거나, aframe.min.js를 로컬로 번들링할 수 있습니다( CDN 사용 시 필요).

배포 방법 요약(선택 옵션)
- 옵션 A: main 브랜치 루트 또는 /docs를 Pages로 배포
- 옵션 B: gh-pages 브랜치에 배포
- 두 경우 모두 URL 예시: https://<your-username>.github.io/dreamcore-hosting/

검증 절차
1) 사이트 접속
  - URL에 접속하여 페이지가 로드되는지 확인
  - 화면에 HUD( Scene: Entrance )와 Dream Start 버튼이 보이는지 확인
2) 시작 버튼 동작 확인
  - Dream Start 버튼 클릭 시 Entrance 씬으로 들어오는지 확인
  - HUD이 Scene: Entrance로 표시되는지 확인
3) 씬 전환 확인
  - 키보드: N 키를 눌러 Mirror Hall, Final Door로 순환되는지 확인
  - 마우스/터치: 모바일에서 화면 탭으로 씬 전환 가능 여부 확인(코드가 모바일 친화적으로 동작하는지 확인)
4) 씬 구성 확인
  - Entrance: 바닥/벽 등 3D 존이 보이고 카메라 위치가 초기화되는지 확인
  - Mirror Hall: 해당 씬이 보이고, 전환 시 HUD가 정상 업데이트되는지 확인
  - Final Door: 해당 씬이 보이고 최종 도어가 보이는지 확인
5) 로딩 및 성능 확인
  - 씬 전환 시 프레임 드롭이나 렉이 없는지 확인
  - 브라우저의 개발자 도구에서 콘솔 에러가 없는지 확인
6) 오프라인/네트워크 차이 확인
  - 네트워크 차단 시 aframe.min.js를 CDN이 아닌 로컬 파일로 불러오도록 구성할지 결정

문제 해결 포인트
- 404/배포 URL 불가: Pages 설정의 소스 브랜치와 루트 경로를 재확인
- 로딩 지연/콘솔 에러: 콘솔에서 CORS, 404, WebGL 관련 에러를 확인하고 main.js가 정상 로드되는지 Network 탭에서 확인
- interactivity 실패: main.js가 정상 로드되는지, DOM 엘리먼트가 올바르게 선택되었는지 확인

자동화 테스트 아이디어 (선택 사항)
- Playwright/Puppeteer를 사용한 간단한 자동화 테스트로:
  - 페이지 열기 → Dream Start 버튼 존재 여부 확인
  - 클릭/터치 시 Scene: Entrance 텍스트 업데이트 확인
  - N 키(또는 탭)로 씬 전환 확인
  - 모든 화면에서 화면이 렌더링되는지 확인

다음 단계 제안
- 원하시면 바로 GitHub 저장소에 이 test_plan.md를 포함시켜 테스트 기록을 남길 수 있도록 템플릿을 제공하고, 필요 시 자동화 테스트 스크립트도 함께 만들어 드리겠습니다.
- 또한 GitHub Pages 배포를 위한 간단한 템플릿 레포지토리 구성도 같이 드릴 수 있습니다.

배포 URL이 실제로 어떻게 보이는지 확인하려면, 다음 정보를 알려 주세요
- GitHub 사용자명(또는 조직명)과 저장소 이름(dreamcore-hosting 등)
- 선택한 Pages 배포 소스(main / gh-pages 또는 docs 경로 여부)

그 정보를 바탕으로 바로 구동 가능한 배포 가이드와 테스트 체크리스트를 맞춤으로 정리해 드리겠습니다.
