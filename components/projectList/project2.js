// 현재 프로젝트 2번 "졸업작품 Joyet" 페이지 구성
import Image from "next/image";

export default function project5() {
    return (
        <div>
            <div>
                {/* 프로젝트 상세정보 전체 div 틀 */}
                <div className="p-5">
                    {/* 프로젝트 명 */}
                    <div>
                        <h1 className="text-3xl inline">프로젝트 명 : 가상 헬스 트레이너 Joyet </h1>
                        <p className="text-xl inline">( 프론트엔드 개발 )</p>
                        <br></br>
                        <h2 className="text-3xl my-3">프로젝트 목표 : Joyet 프로젝트의 사용자 웹 사이트 개발</h2>
                        <br></br>
                    </div>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl my-3">◎ 주요 개발사항</p>
                        <p className="text-2xl ml-6 my-1">- HTML과 CSS를 사용하여 마크업 개발 수행</p>
                        <p className="text-2xl ml-6 my-1">- HTML에 Java코드를 넣고 사용하기 위해 JSP를 활용</p>
                        <p className="text-2xl ml-6 my-1">- 반응형 웹 디자인을 목적으로 BootStrap 프레임워크를 사용</p>
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
                        <p className="text-2xl my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl ml-6 my-1 inline">▶ 졸업작품의 테마는 '다이어트를 도와주는 가상 헬스 트레이너' 였으며 제 담당부분은 회원가입/관리 기능,
                            회원들을 위한 다이어트 정보 취득, 식단 추천 및 운동추천, 목표 입력/확인 기능 등 주요 코칭 시스템이 담긴 웹 사이트 구축이었습니다. 웹 사이트는 JSP 파일들로 구성되었으며
                            팀원들과 사전 정의한 프로토콜 인자를 활용한 Java 코드로 DB, 서버와 통신하여 웹 사이트가 작동되게 구현하였습니다.</p>
                    </div>
                </div>
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 flex">
                    {/* 웹 디자인 관련 설명 */}
                    <div className="m-3">
                        <Image
                            src="/joyet.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                        <p className="text-base my-3">HTML태그들과 CSS를 사용해 직접 웹 디자인을 수행하였으며,
                            웹 페이지가 모바일에서도 어색하지 않게 표시되도록 반응형 웹 페이지로 만들기 위해 추가로 BootStrap 프레임워크를 사용했습니다.
                        </p>
                    </div>
                    {/* 프로토콜 인자 및 통신 설명 */}
                    <div className="m-3">
                        <Image
                            src="/protocol.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                        <p className="text-base my-3">팀원이 구축한 DB, 서버와 통신하기 위해 사전에 프로토콜 인자들과 각 인자들의 기능들을 약속했습니다.
                            통신 방식은 JSP 파일에 작성된 Java 코드로 바이트 배열을 생성 후 프로토콜 인자와 관련 데이터를 붙인 후 서버쪽으로 전송하면 서버쪽에서 결과를 처리합니다.
                            반대로 서버쪽에서 바이트 배열을 전송해주면 문자열 배열로 변환 후 웹 페이지에 표시할 데이터들을 추출 후 표시하거나 웹 페이지를 제어하는 방식으로 서버와 통신하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}