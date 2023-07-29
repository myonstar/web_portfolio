// 현재 프로젝트 1번 "웹 포트폴리오 제작"의 '프로젝트 개요' 클릭 시의 컴포넌트를 구성

export default function PortfolioInfo() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div>
                {/* 프로젝트 명 */}
                <div>
                    <h1 className="text-2xl inline">◎ 프로젝트 명 : 웹 포트폴리오 제작 </h1>
                    <p className="text-xl inline">( 프론트엔드 개발 )</p>
                    <br></br>
                    <h2 className="text-2xl my-3">◎ 프로젝트 목표 : 웹 개발자로서의 역량을 높이기 위해 웹 포트폴리오 제작 프로젝트 수행</h2>
                    <h2 className="text-xl text-slate-400 dark:text-slate-300 ml-2 my-3">※ 2023-05-10 ~ 2023-06-19 (웹 사이트 기본 완성) / 2023-07-03 ~ 2023-07-21 (웹 사이트 1차 보완)</h2>
                    <br></br>
                </div>
                {/* 주요 개발사항 */}
                <div>
                    <p className="text-2xl my-3">◎ 주요 개발사항</p>
                    <p className="text-2xl ml-6 my-1">- React 라이브러리의 프레임워크인 Next.js를 기반으로 개발</p>
                    <p className="text-2xl ml-6 my-1">- 미리 준비된 유틸리티 클래스를 사용하는 TailWindCSS로 웹 페이지 디자인</p>
                    <p className="text-2xl ml-6 my-1">- 노션으로 프로젝트를 정리하고 API 연결 후 상세사항을 볼 수 있도록 개발</p>
                    <p className="text-2xl ml-6 my-1">- Vercel로 Github를 연동하여 Commit하는 즉시 빌드 후 프론트 배포가 되도록 진행</p>
                    <br></br>
                </div>
                {/* 기술 스택 */}
                <div>
                    <p className="text-2xl mt-3 my-2">◎ 기술 스택</p>
                    <p className="text-2xl ml-6 my-1 inline">- HTML</p>
                    <p className="text-2xl ml-6 my-1 inline">- Next.js(React)</p>
                    <p className="text-2xl ml-6 my-1 inline">- TailwindCSS</p>
                    <p className="text-2xl ml-6 my-1 inline">- Git</p>
                </div>
                {/* 프로젝트 설명 */}
                <div>
                    <br></br>
                    <p className="text-2xl my-3">◎ 프로젝트 요약</p>
                    <p className="text-xl my-1 inline">▶ 웹 개발자로 다시 시작하기 위해 React기반의 프레임워크인 Next.js를 사용한 제 자신을 소개하는 웹 포트폴리오를 만들어보기로 
                        했습니다. 웹 포트폴리오를 만들면서 캡슐화된 컴포넌트 단위로 개발 후 조립하고 재사용 할 수 있는 React의 강점을 깨달았고, Next.js를 통해 
                        SSR과 CSR의 장단점을 알게 되었습니다. Bootstrap대신 프론트엔드에 적합한 TailwindCSS를 사용하여 디자인 했고, 
                        완성한 상태에서 멈추지 않고 저만의 포트폴리오로 지속적으로 업데이트를 하고 있습니다.</p>
                </div>
                {/* 부록 : 깃 허브 링크 */}
                <div>
                    <br></br>
                    <p className="text-2xl mt-3 my-1">◎ GitHub 링크</p>
                    <a href="https://github.com/myonstar/web_portfolio" className="text-xl text-blue-800 dark:text-blue-700 ml-6 my-1">https://github.com/myonstar/web_portfolio</a>
                </div>
            </div>
        </div>
    );
}