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
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">▶ 참고 영상을 참조하며 웹 포트폴리오를 만들면서 React로 컴포넌트 단위로 개발 후 합치는 
                        만들어놓은 것에서 멈추지 않고 스스로 제가 수행했던 프로젝트들의 상세정보들을 추가, RPA대한 설명을 넣는 등 저만의 포트폴리오로 발전시켰습니다.</p>
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
                            src="/joyet.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">HTML태그들과 CSS를 사용해 직접 웹 디자인을 수행하였으며,
                            웹 페이지가 모바일에서도 어색하지 않게 표시되도록 반응형 웹 페이지로 만들기 위해 추가로 BootStrap 프레임워크를 사용했습니다.
                        </p>
                    </div>
                    {/* Vercel 설명 */}
                    <div>
                        <Image
                            src="/protocol.webp"
                            alt="Image Not Found"
                            width={450}
                            height={280}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">팀원이 구축한 DB, 서버와 통신하기 위해 사전에 프로토콜 인자들과 각 인자들의 기능들을 약속했습니다.
                            통신 방식은 JSP 파일에 작성된 Java 코드로 바이트 배열을 생ㅇ성 후 프로토콜 인자와 관련 데이터를 붙인 후 서버쪽으로 전송하면 서버쪽에서 결과를 처리합니다.
                            반대로 서버쪽에서 바이트 배열을 전송해주면 문자열 배열로 변환 후 웹 페이지에 표시할 데이터들을 추출 후 표시하거나 웹 페이지를 제어하는 방식으로 서버와 통신하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}