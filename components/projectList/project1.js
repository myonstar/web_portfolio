// 현재 프로젝트 1번 "웹 포트폴리오 제작" 페이지 구성
import Image from "next/image";

export default function project1() {
    return (
        <div>
            <div className="flex">
                {/* 프로젝트 상세정보 전체 div 틀 */}
                <div className="p-5 w-3/4">
                    {/* 프로젝트 명 */}
                    <div>
                        <h1 className="text-3xl inline">프로젝트 명 : 웹 포트폴리오 제작기 </h1>
                        <p className="text-xl text-slate-800 inline">( 프론트엔드 개발 )</p>
                        <br></br>
                        <h2 className="text-3xl my-3">프로젝트 목표 : 웹 개발자로서의 역량을 높이기 위해 웹 포트폴리오 제작 프로젝트 수행</h2>
                        <br></br>
                    </div>
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
                        <p className="text-2xl text-slate-800 my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">▶ 참고 영상을 참조하며 웹 포트폴리오를 만들면서 캡슐화된 컴포넌트 단위로 개발 후
                        합치고 재사용 할 수 있는 React의 강점을 깨달았습니다. 만들어놓은 것에서 멈추지 않고 스스로 제가 수행했던 프로젝트들의 상세정보들을 추가, RPA대한 설명을 넣는 등
                        저만의 포트폴리오로 지속적으로 업데이트를 하고 있습니다.</p>
                    </div>
                    {/* 부록 : 깃 허브 링크 */}
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
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 w-1/4">
                    {/* Next.js를 사용한 이유 설명*/}
                    <div>
                        <Image
                            src="/next-logo.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">React 라이브러리의 프레임워크인 Next.js를 사용함으로써 SSR(서버 사이드 렌더링)을 지원하는 Next.js의 장점을 깨달았으며 
                        생소했던 React의 대략적인 사용법도 배울 수 있었습니다.(업데이트 예정)
                        </p>
                    </div>
                    {/* Vercel 설명 */}
                    <div>
                        <Image
                            src="/vercel-logo.webp"
                            alt="Image Not Found"
                            width={450}
                            height={280}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">Next.js를 개발한 Vercel이 제공하는 서비스를 사용하면 연동된 GitHub에 Commit시 Vercel이 감지하여 
                        빌드를 수행 후 도메인을 제공, 제가 만든 웹 포트폴리오가 어디서든 열람 가능하게 할 수 있었습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}