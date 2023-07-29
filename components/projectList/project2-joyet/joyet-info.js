// 프로젝트 2번 "졸업작품 Joyet"의 '프로젝트 개요' 클릭 시의 컴포넌트를 구성

export default function JoyetInfo() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div>
                {/* 프로젝트 명 */}
                <div>
                    <h1 className="text-2xl inline">◎ 프로젝트 명 : 가상 헬스 트레이너 Joyet </h1>
                    <p className="text-xl inline">( 프론트엔드 개발 )</p>
                    <br></br>
                    <h2 className="text-2xl my-3">◎ 프로젝트 목표 : 프로젝트의 사용자 웹 사이트 개발</h2>
                    <h2 className="text-xl text-slate-400 dark:text-slate-300 ml-2 my-3">※ 2019-04-01 ~ 2019-11-29 (졸업작품 과제 수행)</h2>
                    <br></br>
                </div>
                {/* 주요 개발사항 */}
                <div>
                    <p className="text-2xl my-3">◎ 주요 개발사항</p>
                    <p className="text-2xl ml-6 my-1">- HTML과 CSS를 사용하여 UI(마크업) 개발 수행</p>
                    <p className="text-2xl ml-6 my-1">- HTML에 Java코드를 넣고 사용하기 위해 JSP를 활용</p>
                    <p className="text-2xl ml-6 my-1">- 반응형 웹 디자인을 목적으로 BootStrap 프레임워크를 사용</p>
                    <br></br>
                </div>
                {/* 기술 스택 */}
                <div>
                    <p className="text-2xl mt-3 my-2">◎ 기술 스택</p>
                    <p className="text-2xl ml-6 my-1 inline">- HTML</p>
                    <p className="text-2xl ml-6 my-1 inline">- CSS(+ BootStrap 프레임워크)</p>
                    <p className="text-2xl ml-6 my-1 inline">- JavaScript</p>
                    <p className="text-2xl ml-6 my-1 inline">- JSP(Java)</p>
                </div>
                {/* 프로젝트 설명 */}
                <div>
                    <br></br>
                    <p className="text-2xl my-3">◎ 프로젝트 요약</p>
                    <p className="text-xl my-1 inline">▶ 졸업작품의 테마는 '다이어트를 도와주는 가상 헬스 트레이너' 였으며 제 담당부분은 회원가입/관리 기능,
                        회원들을 위한 다이어트 정보 취득, 식단 추천 및 운동추천, 목표 입력/확인 기능 등 주요 코칭 시스템이 담긴 웹 사이트 구축이었습니다. 웹 사이트는 JSP 파일들로 구성되었으며
                        팀원들과 사전 정의한 프로토콜 인자를 활용한 Java 코드로 DB, 서버와 통신하여 웹 사이트가 작동되게 구현하였습니다. 팀원들과 협업하며 그 중요성을 깨달았으며, SW경진대회
                        우수상을 수상할 수 있었습니다.</p>
                </div>
            </div>
        </div>
    );
}