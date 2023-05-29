// 현재 프로젝트 1번 "웹 포트폴리오 제작" 페이지 구성

export default function project1() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div className="border-solid border-2 border-indigo-600 p-5">
                <div>
                    {/* 프로젝트 명 */}
                    <h1 className="text-3xl inline">프로젝트 명 : 웹 포트폴리오 제작기 </h1>
                    <p className="text-xl text-slate-800 inline">( 프론트엔드 개발 )</p>
                    <br></br>
                    <h2 className="text-3xl">프로젝트 목표 : 웹 개발자로서의 역량을 높이기 위해 웹 포트폴리오 제작에 도전</h2>
                    <br></br>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl text-slate-800 mt-3 my-2">◎ 주요 개발사항</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- React 라이브러리의 프레임워크인 Next.js를 기반으로 개발</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 미리 준비된 유틸리티 클래스를 사용하는 TailWindCSS로 웹 페이지 디자인</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 노션으로 프로젝트를 정리하고 API 연결 후 상세사항을 볼 수 있도록 개발</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- Vercel로 Github를 연동하여 Commit하는 즉시 빌드 후 프론트 배포가 되도록 진행</p>
                    </div>
                    {/* 기술 스택 */}
                    <div>
                        <p className="text-2xl text-slate-800 mt-3 my-2">◎ 기술 스택</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- HTML</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- React</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- Next.js</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- TailwindCSS</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- Git</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl text-slate-800 mt-3 my-1">◎ GitHub 링크</p>
                        <a href="https://github.com/myonstar/web_portfolio" className="text-xl text-blue-800 dark:text-blue-700 ml-6 my-1">https://github.com/myonstar/web_portfolio</a>
                    </div>
                    {/* 부록 : 참고 영상 */}
                    <div>
                        <p className="text-2xl text-slate-800 mt-3 my-1">◎ 참고 영상</p>
                        <a href="https://youtu.be/KvoFvmu5eRo" className="text-xl text-blue-800 dark:text-blue-700 ml-6 my-1">https://youtu.be/KvoFvmu5eRo - Next.js 나만의 포트폴리오 사이트 만들기</a>
                    </div>

                </div>

            </div>
        </div>
    );
}