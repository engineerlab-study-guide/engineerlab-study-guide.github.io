# GitHub Pages 업로드 안내

최종 주소: https://engineerlab-study-guide.github.io/
Organization: engineerlab-study-guide
Repository: engineerlab-study-guide.github.io
메인 키워드: 엔지니어랩

1. GitHub에서 engineerlab-study-guide Organization을 생성하거나 해당 Organization을 엽니다. 생성 시 약관 동의 등 계정 관련 단계는 본인이 완료하세요.
2. Organization 소유의 공개 저장소 engineerlab-study-guide.github.io를 만듭니다.
3. ZIP을 압축 해제합니다. 안쪽 파일과 assets 폴더를 저장소 루트에 올립니다. engineerlab-study-guide라는 상위 폴더 전체를 올리지 마세요.
4. index.html, robots.txt, sitemap.xml, 404.html, favicon.svg, assets 폴더, 2619520d57f6477650cab031ff55aab9.txt, .nojekyll 파일을 main 브랜치에 commit합니다. Windows 탐색기에서 .nojekyll이 보이지 않는 경우 포함 여부를 다시 확인하세요.
5. Settings → Pages → Build and deployment에서 Source를 Deploy from a branch로 선택합니다. Branch는 main, Folder는 /(root)로 지정한 뒤 Save를 누릅니다.
6. 저장소의 Actions 또는 Pages 화면에서 배포 완료를 확인하고 https://engineerlab-study-guide.github.io/을 엽니다.
7. https://engineerlab-study-guide.github.io/2619520d57f6477650cab031ff55aab9.txt을 열어 아래 키 문자열만 표시되는지 확인합니다. 파일이 404이거나 문자열이 다르면 IndexNow 요청을 실행하지 마세요.
8. 메인페이지·sitemap.xml·robots.txt도 실제 운영 주소에서 확인합니다.

네이버 IndexNow 키
2619520d57f6477650cab031ff55aab9

키 확인 URL
https://engineerlab-study-guide.github.io/2619520d57f6477650cab031ff55aab9.txt

배포와 키 파일 확인에 성공한 뒤 사용할 메인페이지 요청 URL(미실행)
https://searchadvisor.naver.com/indexnow?url=https://engineerlab-study-guide.github.io/&key=2619520d57f6477650cab031ff55aab9

F12 → Network → Preserve log를 켜고 Disable cache를 체크한 뒤 위 요청 URL로 이동합니다. 필터를 All로 두고 indexnow를 검색하여 해당 요청의 Status를 확인합니다. 캐시에서 나온 응답은 새 요청의 성공 근거로 사용하지 말고 다시 확인하세요. 네이버 공식 안내에서 정상 수신은 HTTP 200 OK입니다. 정상 응답은 접수 여부를 뜻하며 색인이나 노출을 보장하지 않습니다.

키 파일이 404이면 파일이 저장소 루트에 있는지, 이름이 정확한지, main에 commit했는지, Pages가 main의 root에서 배포됐는지, 배포 완료 상태인지 확인합니다.

Google Search Console
1. URL 접두어 속성으로 https://engineerlab-study-guide.github.io/을 등록하고 소유권을 확인합니다. HTML 파일 방식이면 Google이 제공한 확인 파일을 루트에 추가한 뒤 다시 배포합니다. 메타 태그 방식이면 제공된 태그를 index.html의 head에 추가합니다.
2. Sitemaps에서 https://engineerlab-study-guide.github.io/sitemap.xml을 제출합니다.
3. URL 검사에 https://engineerlab-study-guide.github.io/을 입력하고 실제 URL 테스트로 접근 가능 여부를 확인합니다.
4. 필요한 경우 색인 생성 요청을 실행합니다. 일반 정보형 웹페이지에는 Google Indexing API나 IndexNow를 적용하지 않습니다.

검수 상태
HTML·SEO 메타데이터·내부 링크·로컬 리소스·사이트맵·robots·404 설정·키 파일 내용의 정적 검사 25개를 통과했습니다. 모바일 대응 CSS와 모바일용 도표 파일도 포함했습니다.
브라우저 보안 정책에서 로컬 미리보기 접근이 거부되어, 실제 화면·200% 확대·체크리스트 클릭·FAQ 펼침의 브라우저 검수는 완료하지 못했습니다. 실제 운영 주소의 키 파일과 배포 상태도 미확인입니다. 배포 후 PC·모바일에서 화면과 버튼 동작을 확인하세요.

이 사이트는 빌드나 서버 런타임 없이 사용하는 정적 HTML입니다. 404.html은 색인 제외이며 sitemap.xml에는 메인페이지 1개만 포함됩니다. 체크리스트는 이 페이지에서만 작동하며 저장·전송하지 않습니다.
